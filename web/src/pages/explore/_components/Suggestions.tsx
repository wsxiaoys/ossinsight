import { ButtonBase, Card, Grid, styled } from '@mui/material';
import React from 'react';

// 【🎆 Annual review】My year in review 2022【使用关键词 annual report/github year/year in review/repo _name 2022 触发】
// { type: '🎆 Annual review', content: 'The annual report of @pingcap/tidb 【使用关键词 annual report/github year/year in review/repo _name 2022 触发】' },

const types = {
  hotTopics: {
    title: '🔥 Hot topics',
    color: '#E78F34',
  },
  programmingLanguage: {
    title: '👾 Programming Language',
    color: '#8253F6',
  },
  trends: {
    title: '🚀 OSS trends',
    color: '#E78F34',
  },
  contributors: {
    title: '🧑‍💻 Contributors',
    color: '#C9B4FF',
  },
  stars: {
    title: '🌟 Stars',
    color: '#519AEB',
  },
  similarProjects: {
    title: '🔍 Similar projects',
    color: '#34A352',
  },
  location: {
    title: '🌍 Location',
    color: '#FFD7AD',
  },
  company: {
    title: '🏢 Company',
    color: '#BCDAFF',
  },
};

const questions = [
  { type: types.hotTopics, content: 'Popular repos related to ChatGPT' },
  { type: types.hotTopics, content: 'The most watched Web3 projects' },
  { type: types.programmingLanguage, content: 'Top python projects 2022' },
  { type: types.programmingLanguage, content: 'What is the distribution of primary language used in repositories' },
  { type: types.trends, content: 'The closed PR monthly history of GitHub' },
  { type: types.trends, content: 'The star history of GitHub all the time' },
  { type: types.contributors, content: 'Contributor list of @pingcap/tidb' },
  { type: types.stars, content: 'Star history of @carbon-language/carbon-lang' },
  { type: types.similarProjects, content: 'Projects similar to @facebook/react' },
  { type: types.trends, content: 'Top trending HCL repositories of the past month' },
  { type: types.location, content: 'The most watched projects by India developers' },
  { type: types.location, content: 'Where are @kubernetes/kubernetes contributors come from' },
  { type: types.company, content: 'What projects Microsoft developers like to contribute to' },
];

export interface SuggestionsProps {
  onSelect: (question: string) => void;
}

export default function Suggestions ({ onSelect }: SuggestionsProps) {
  return (
    <Grid container mx={2}>
      {questions.map((question, index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={index} display='flex' alignItems='stretch' justifyContent='stretch' p={1}>
          <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left', width: '100%', backgroundColor: '#1C1C1C' }} component={ButtonBase} onClick={() => onSelect(question.content)}>
            <Tag color={question.type.color}>{question.type.title}</Tag>
            <div style={{ fontSize: 16 }}>{question.content}</div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const Tag = styled('div')<{ color: string }>`
  color: ${({ color }) => color};
  background-color: ${({ color }) => `${color}20`};
  border: 0.5px solid ${({ color }) => `${color}40`};
  border-radius: 6px;
  padding: 2px 6px;
  margin-bottom: 8px;
  width: max-content;
  font-size: 6px;
`;
