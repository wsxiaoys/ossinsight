import { useAsyncOperation, useAsyncState } from '@site/src/hooks/operation';
import { ChartResult, newQuestion, pollQuestion, Question, QuestionStatus, questionToChart } from '@site/src/api/explorer';
import React, { ForwardedRef, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { isEmptyArray, isNullish, notFalsy, notNullish } from '@site/src/utils/value';
import { format } from 'sql-formatter';
import Section from '@site/src/pages/explore/_components/Section';
import CodeBlock from '@theme/CodeBlock';
import { Charts } from '@site/src/pages/explore/_components/charts';
import { Alert, Button, Divider, styled, ToggleButton, ToggleButtonGroup, Typography, useEventCallback } from '@mui/material';
import { useUserInfoContext } from '@site/src/context/user';
import { getErrorMessage, isAxiosError } from '@site/src/utils/error';
import { AxiosError } from 'axios';
import { applyForwardedRef } from '@site/src/utils/ref';
import { TabContext, TabPanel } from '@mui/lab';
import TableChart from './charts/TableChart';
import { AutoGraph, TableView } from '@mui/icons-material';
import Info from './Info';

export interface ExecutionContext {
  run: (question?: string) => void;
}

export interface ExecutionProps {
  search: string;
  questionId?: string;
  onLoading?: (loading: boolean) => void;
  onResultLoading?: (loading: boolean) => void;
  onChartLoading?: (loading: boolean) => void;
  onQuestionChange?: (question: Question) => void;
}

const PENDING_STATE = new Set([QuestionStatus.New, QuestionStatus.Waiting, QuestionStatus.Running]);

export function useQuestion (content: string, questionId?: string) {
  const userInfo = useUserInfoContext();
  const { data, loading, error, setAsyncData, clearState } = useAsyncState<Question>();
  const runningQuestion = useRef<string>();

  const run = useEventCallback((question?: string) => {
    if (userInfo.validating && !userInfo.userInfo) {
      userInfo.login();
      return;
    }
    const real = question ?? content;
    runningQuestion.current = real;
    setAsyncData(newQuestion(real));
  });

  // only prefetch first question
  useEffect(() => {
    if (notNullish(questionId) && isNullish(data) && !loading) {
      setAsyncData(pollQuestion(questionId).then(question => {
        runningQuestion.current = question.title;
        return question;
      }));
    }
  }, []);

  // clear state if question id was deleted
  useEffect(() => {
    if (isNullish(questionId)) {
      clearState();
    }
  }, [questionId]);

  useEffect(() => {
    if (runningQuestion.current !== content) {
      clearState();
      runningQuestion.current = undefined;
    }
  }, [content]);

  useEffect(() => {
    if (notNullish(data) && !loading) {
      switch (data.status) {
        case QuestionStatus.New:
        case QuestionStatus.Waiting:
        case QuestionStatus.Running: {
          const h = setTimeout(() => {
            setAsyncData(pollQuestion(data.id));
          }, 1500);
          return () => {
            clearTimeout(h);
          };
        }
        case QuestionStatus.Success:
        case QuestionStatus.Error:
        case QuestionStatus.Cancel:
          break;
      }
    }
  }, [data, loading]);

  const resultPending = isNullish(data) ? false : PENDING_STATE.has(data.status);
  const resultError = data?.status === QuestionStatus.Cancel ? new Error('Execution was canceled') : (data?.error);

  return { run, question: data, loading, resultPending, sqlError: error, resultError };
}

export function isSqlError (error: unknown): error is AxiosError<{ message: string, querySQL: string }> {
  if (isAxiosError(error) && notNullish(error.response)) {
    if (notNullish(error.response.data)) {
      return typeof error.response.data.message === 'string' && typeof error.response.data.querySQL === 'string';
    }
  }
  return false;
}

export default forwardRef<ExecutionContext, ExecutionProps>(function Execution ({ search, questionId, onLoading, onResultLoading, onChartLoading, onQuestionChange }, ref: ForwardedRef<ExecutionContext>) {
  const { question, run, loading, resultPending, sqlError, resultError } = useQuestion(search, questionId);

  useEffect(() => {
    onLoading?.(loading);
  }, [loading, onLoading]);

  useEffect(() => {
    applyForwardedRef(ref, { run });
  }, []);

  useEffect(() => {
    if (notNullish(question)) {
      onQuestionChange?.(question);
    }
  }, [question, onQuestionChange]);

  const formattedSql = useMemo(() => {
    if (notNullish(question)) {
      return format(question.querySQL);
    }
    if (isSqlError(sqlError)) {
      return format(sqlError.response?.data.querySQL ?? '');
    }
  }, [question, sqlError]);

  const waitingResult = useMemo(() => {
    if (isNullish(question)) {
      return false;
    }
    if (loading) {
      return false;
    }
    return resultPending;
  }, [question, loading, resultPending]);

  useEffect(() => {
    onResultLoading?.(waitingResult);
  }, [waitingResult, onResultLoading]);

  const sqlSectionStatus = useMemo(() => {
    if (isNullish(question)) {
      if (loading) {
        return 'loading';
      } else {
        return 'pending';
      }
    }
    return 'success';
  }, [loading, question]);

  const sqlTitle = useMemo(() => {
    if (isNullish(question)) {
      if (loading) {
        return 'Generating SQL...';
      } else if (isNullish(sqlError)) {
        return '';
      } else {
        return 'Failed to generate SQL';
      }
    } else {
      return 'Show SQL';
    }
  }, [question, loading, sqlError]);

  const result = question?.result?.rows;

  useEffect(() => {
    clear();
  }, [question]);

  const { data: chartData, setData: setChartData, loading: chartLoading, error: chartError, run: chartRun, clear } = useAsyncOperation(question?.id, questionToChart, true);
  useEffect(() => {
    onChartLoading?.(chartLoading);
  }, [chartLoading, onChartLoading]);

  useEffect(() => {
    if (notFalsy(search) && notNullish(question)) {
      if (notNullish(question.chart)) {
        setChartData(question.chart);
      } else if (notNullish(question.result)) {
        chartRun();
      }
    }
  }, [search, question?.result]);

  const resultTitle = useMemo(() => {
    if (notNullish(question)) {
      switch (question.status) {
        case QuestionStatus.New:
          return 'Pending...';
        case QuestionStatus.Waiting:
          return 'Waiting execution...';
        case QuestionStatus.Running:
          return 'Running SQL...';
        case QuestionStatus.Success:
          if (chartLoading) {
            return 'Visualizing...';
          } else {
            return <>{`${question.result?.rows.length ?? 'NaN'} rows in ${question.spent ?? 'NaN'} seconds`}{renderEngines(question)}</>;
          }
        case QuestionStatus.Error:
          return 'Failed to execute SQL';
        case QuestionStatus.Cancel:
          return 'Execution canceled';
        default:
          return 'Unknown state';
      }
    } else {
      return 'Pending...';
    }
  }, [question, chartLoading]);

  const resultStatus = useMemo(() => {
    if (isNullish(question)) {
      if (loading) {
        return 'loading';
      } else {
        return 'pending';
      }
    } else if (resultPending || chartLoading) {
      return 'loading';
    } else {
      return 'success';
    }
  }, [question, resultPending || chartLoading]);

  return (
    <>
      <Section status={sqlSectionStatus} title={sqlTitle} error={sqlError} errorWithChildren>
        {notFalsy(formattedSql) && (
          <CodeBlock language="sql">
            {formattedSql}
          </CodeBlock>
        )}
      </Section>
      <Section
        status={resultStatus}
        title={resultTitle}
        extra={<Button>Play with your own data</Button>}
        error={resultError}
        defaultExpanded
      >
        <Chart chartData={chartData} chartError={chartError} result={result} fields={question?.result?.fields} />
      </Section>
    </>
  );
});

function renderEngines (question: Question | undefined) {
  if (notNullish(question) && !isEmptyArray(question.engines)) {
    return (
      <>
        , Running on
        <EngineTag>{question.engines.join(', ')}</EngineTag>
        <Info>
          <Typography variant='body1'>
            <b>tikv</b>: row-store engine
            <br />
            <b>tiflash</b>: column-store engine
          </Typography>
          <Divider orientation='horizontal' sx={{ my: 1.5 }} light />
          <Typography variant='body2'>
            Intelligent query processing in <a>TiDB optimizer</a>.
          </Typography>
        </Info>
      </>
    );
  }
  return null;
}

const EngineTag = styled('span')`
  color: #5667FF;
  border: 1px solid #5667FF80;
  border-radius: 2px;
  padding: 4px 8px;
  margin: 0 4px;
`;

function Chart ({ chartData, chartError, fields, result }: { chartData: ChartResult | undefined, chartError: unknown, result: Array<Record<string, any>> | undefined, fields: Array<{ name: string }> | undefined }) {
  const [tab, setTab] = useState('visualization');

  useEffect(() => {
    setTab('visualization');
  }, [chartData]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return useMemo(() => {
    if (isNullish(chartData) || isNullish(result)) {
      return null;
    }

    const renderChart = () => {
      return <Charts {...chartData} data={result} fields={fields} />;
    };

    const renderTable = () => {
      return <TableChart chartName="Table" title="hi" data={result} fields={fields} />;
    };

    if (notNullish(chartError)) {
      return (
        <>
          <Alert severity="error" sx={{ mb: 2 }}>
            {getErrorMessage(chartError)}
          </Alert>
          {renderTable()}
        </>
      );
    }

    if (chartData.chartName === 'Table') {
      return renderChart();
    }

    return (
      <>
        <Controls>
          <ToggleButtonGroup size="small" value={tab} onChange={handleTabChange} exclusive color="primary">
            <ToggleButton value="visualization">
              <AutoGraph />
            </ToggleButton>
            <ToggleButton value="raw">
              <TableView />
            </ToggleButton>
          </ToggleButtonGroup>
        </Controls>
        <TabContext value={tab}>
          <StyledTabPanel value="visualization">
            {renderChart()}
          </StyledTabPanel>
          <StyledTabPanel value="raw">
            {renderTable()}
          </StyledTabPanel>
        </TabContext>
      </>
    );
  }, [tab, chartData, chartError, result, fields]);
}

const Controls = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledTabPanel = styled(TabPanel)`
  padding-left: 0;
  padding-right: 0;
`;
