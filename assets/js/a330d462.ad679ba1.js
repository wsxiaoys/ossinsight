(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3029],{90864:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(2734),o=n(26447),i=n(98456),l=n(46483),s=n(90978),u=n(94320),c=n(87357);function m(e){var t,n,m=e.loading,d=void 0!==m&&m,p=e.error,f=void 0!==p&&p,h=e.shouldLoad,v=void 0===h||h,g=e.hideTitle,y=void 0!==g&&g,b=e.title,Z=e.height,x=void 0===Z?"100px":Z,E=e.noLoadReason,R=e.children,C=e.query,N=e.data,w=(0,a.Z)(),M=(0,r.useState)(!1),P=M[0],q=M[1];return r.createElement(r.Fragment,null,r.createElement(c.Z,{className:s.Z.basicCard,sx:{mt:2}},b&&!y&&r.createElement(o.Z,{className:s.Z.basicCardHeader,direction:"row",justifyContent:"center",alignItems:"center"},r.createElement("a",{className:s.Z.basicCardTitle,style:{color:w.palette.text.secondary},onClick:function(){null!=N&&q(!0)}},b)),!v||d||f?r.createElement(o.Z,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:x}},d&&r.createElement(i.Z,{size:"1.5em"}),f&&r.createElement(l.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"Failed to load data: ",null==f||null==(t=f.response)||null==(n=t.data)?void 0:n.msg),!v&&r.createElement("div",null,E)):R),r.createElement(u.q,{query:C,data:N,open:P,onClose:function(){q(!1)}}))}},41438:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(2734),o=n(26447),i=n(98456),l=n(46483),s=n(90978),u=n(94320),c=n(87357);function m(e){var t,n,m=e.loading,d=void 0!==m&&m,p=e.error,f=void 0!==p&&p,h=e.shouldLoad,v=void 0===h||h,g=e.hideTitle,y=void 0!==g&&g,b=e.title,Z=e.height,x=void 0===Z?"100px":Z,E=e.noLoadReason,R=e.children,C=e.query,N=e.datas,w=(0,a.Z)(),M=(0,r.useState)(!1),P=M[0],q=M[1];return r.createElement(r.Fragment,null,r.createElement(c.Z,{className:s.Z.basicCard,sx:{mt:2}},b&&!y&&r.createElement(o.Z,{className:s.Z.basicCardHeader,direction:"row",justifyContent:"center",alignItems:"center"},r.createElement("a",{className:s.Z.basicCardTitle,style:{color:w.palette.text.secondary},onClick:function(){N[0]&&N[1]&&q(!0)}},b)),!v||d||f?r.createElement(o.Z,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:x}},d&&r.createElement(i.Z,{size:"1.5em"}),f&&r.createElement(l.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"Failed to load data: ",null==f||null==(t=f.response)||null==(n=t.data)?void 0:n.msg),!v&&r.createElement("div",null,E)):R),r.createElement(u.q,{query:C,data:N,open:P,onClose:function(){q(!1)}}))}},54595:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(6971),i=n(85350),l=n(90864),s=n(2734),u=n(98396),c=n(49067);function m(e){var t,n=e.queryName,m=e.params,d=(m=void 0===m?{}:m).repoId1,p=m.repoId2,f=e.series,h=void 0===f?[]:f,v=(e.shouldLoad,e.tooltip),g=e.grid,y=e.xAxis,b=e.yAxis,Z=e.legend,x=(e.seriesColumnName,e.height,(0,s.Z)()),E=(0,u.Z)(x.breakpoints.down("md")),R=(0,o.WV)(n,{repoId:d},!0,!!d),C=(0,o.WV)(n,{repoId:p},!0,!!p),N=(0,i.Z)().isDarkTheme,w=(0,a.useMemo)((function(){return h.map((function(e,t){var n,r,a;return{name:null!=(n=e.name)?n:"repo "+(t+1),data:null!=(r=null==(a=[R,C][t].data)?void 0:a.data)?r:[]}}))}),[h,R.data,C.data]),M=(0,a.useMemo)((function(){return{dataset:[].concat(w.map((function(e,t){return{id:t,source:e.data}}))),tooltip:Object.assign({trigger:"axis"},v),legend:Object.assign({orient:"horizontal",left:"center",icon:"circle",itemHeight:10,itemWidth:10,textStyle:{fontWeight:"bold"},data:w.map((function(e){return e.name}))},Z),grid:Object.assign({top:48,bottom:32,left:24,right:24,containLabel:!0},g),xAxis:Object.assign({nameGap:30,nameLocation:"middle",nameTextStyle:{fontSize:13,fontWeight:"bold"},axisLabel:{fontWeight:"bold"},axisLine:{lineStyle:{width:2}},axisTick:{show:!1}},y),yAxis:Object.assign({nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},splitLine:{interval:5,lineStyle:{type:[5,10]}}},b),series:w.map((function(e,t){return{type:"line",name:e.name,datasetId:t,label:{show:!E,position:"top",fontWeight:"bold",color:"#4e5771",formatter:function(e){var t=e.dataIndex,n=void 0===t?0:t,r=e.data,a=void 0===r?[]:r;return n%3==0||n===a.length-1?a[b.name]:""}},smooth:!0,showSymbol:!1,emphasis:{focus:"series"},encode:{x:y.name,y:b.name,tooltip:[b.name]}}}))}}),[w,N,E]);return a.createElement(l.Z,(0,r.Z)({},e,{shouldLoad:d||p,loading:!1,error:null!=(t=R.error)?t:C.error,query:n}),a.createElement(c.Z,{aspectRatio:E?16/9:26/9,showLoading:R.loading||C.loading,option:M,notMerge:!1,lazyUpdate:!0}))}},12871:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(6971),i=n(85350),l=n(41438),s=n(98396),u=n(2734),c=n(49067);function m(e){var t=e.queryName,n=e.params1,m=e.params2,d=e.series,p=void 0===d?[]:d,f=e.legend,h=e.tooltip,v=(e.shouldLoad,e.xAxis),g=e.yAxis,y=e.grid,b=(e.height,e.dimensionColumnName),Z=e.metricColumnName,x=(0,u.Z)(),E=(0,s.Z)(x.breakpoints.down("md")),R=(0,o.WV)(t,n,!0,!!n.repoId),C=(0,o.WV)(t,m,!0,!!m.repoId),N=(0,i.Z)().isDarkTheme,w=(0,a.useMemo)((function(){var e,t,n,r;return[null!=(e=null==(t=R.data)?void 0:t.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?e:[],null!=(n=null==(r=C.data)?void 0:r.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?n:[]]}),[R.data,C.data]),M=w[0],P=w[1],q=(0,a.useMemo)((function(){return R.loading||C.loading}),[R.loading,C.loading]),T=(0,a.useMemo)((function(){return R.error||C.error}),[R.error,C.error]),L=(0,a.useMemo)((function(){return{tooltip:Object.assign({trigger:"item"},h),legend:Object.assign({type:"scroll",orient:E?"horizontal":"vertical",right:"20px",top:20,bottom:20,x:"right",formatter:"{name}"},f),series:p.filter((function(e){return null!=(null==e?void 0:e.name)})).flatMap((function(e){return[M,P].map((function(t,r){return Object.assign({type:"pie",name:[n,m][r].repoName,radius:["40%","70%"],center:[50+40*(r-.5)+"%","55%"],avoidLabelOverlap:!1,itemStyle:{borderColor:N?"#1e1e1f":"#ffffff",borderWidth:0},label:{show:!1,position:"center",formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",formatter:"{b}\n\n{c}"}},labelLine:{show:!1},data:t.map((function(t){var n=void 0!==e.nameMap?e.nameMap(t[b]):t[b];return{value:t[Z],name:n}}))},e)}))})),xAxis:v,yAxis:g,grid:Object.assign({left:16,top:16,bottom:16,right:16,containLabel:!0},y)}}),[M,P,N,E]);return a.createElement(l.Z,(0,r.Z)({},e,{shouldLoad:!!n.repoId||!!m.repoId,loading:q,error:T,query:t,datas:[R.data,C.data]}),a.createElement(c.Z,{aspectRatio:E?16/9:26/9,option:L,notMerge:!1,lazyUpdate:!0}))}},45150:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(87462),a=n(67294),o=n(6971),i=n(76631),l=n(41438),s=n(98396),u=n(2734),c=n(85267),m=n.n(c),d=n(55329),p=n(49067);function f(e){var t=e.queryName,n=e.params1,i=e.params2,c=e.name1,m=e.name2,f=e.series,h=void 0===f?[]:f,v=(e.shouldLoad,e.grid),g=e.dimensionColumnName,y=e.metricColumnName,b=(0,u.Z)(),Z=(0,s.Z)(b.breakpoints.down("md")),x=(0,o.WV)(t,n,!0,!!n.repoId),E=(0,o.WV)(t,i,!0,!!i.repoId),R=(0,a.useMemo)((function(){var e,t,n,r;return[null!=(e=null==(t=x.data)?void 0:t.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?e:[],null!=(n=null==(r=E.data)?void 0:r.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?n:[]]}),[x.data,E.data]),C=R[0],N=R[1],w=(0,a.useMemo)((function(){return x.loading||E.loading}),[x.loading,E.loading]),M=(0,a.useMemo)((function(){return x.error||E.error}),[x.error,E.error]),P=(0,a.useMemo)((function(){var e,t,n,r,a=h[0],o=a?[C,N].map((function(e,t){return Object.assign({},a,{type:"scatter",geoIndex:0,coordinateSystem:"geo",name:[c,m][t],encode:{lng:0,lat:1,value:2,tooltip:[3,2]},data:e.map((function(e){var t=(0,d.$)(e[g]),n=e[y],r=(0,d.b)(e[g].toUpperCase())||{};return[r.long,r.lat,n,t]})),symbolSize:function(e){return 1+64*Math.sqrt(e[2]/i)}})})):[],i=Math.max(null!=(e=null==C||null==(t=C[0])?void 0:t[y])?e:0,null!=(n=null==N||null==(r=N[0])?void 0:r[y])?n:0);return{geo:{roam:!1,map:"world",silent:!0,zoom:1.7,top:"35%",projection:{project:function(e){return[e[0]/180*Math.PI,-Math.log(Math.tan((Math.PI/2+e[1]/180*Math.PI)/2))]},unproject:function(e){return[180*e[0]/Math.PI,360/Math.PI*Math.atan(Math.exp(e[1]))-90]}}},tooltip:{trigger:"item"},legend:{show:!0},series:o,grid:Object.assign({left:16,top:16,bottom:16,right:16,containLabel:!0},v)}}),[C,N,Z]);return a.createElement(l.Z,(0,r.Z)({},e,{shouldLoad:!!n.repoId||!!i.repoId,loading:w,error:M,query:t,datas:[x.data,E.data]}),a.createElement(p.Z,{aspectRatio:16/9,option:P,notMerge:!1,lazyUpdate:!0}))}i.getMap("world")||i.registerMap("world",m()())},82593:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67294),a=n(46616),o=n(87385),i=n(16573),l=n(1020),s=n(53597),u=n(37332),c=n(75341),m=n(70431),d=n(38168),p=n(44276),f="shareButtons_1MQy",h=function(e){var t=e.title,n=e.hashtags,h=e.style,v=window.location.href;return r.createElement("div",{className:f,style:h},r.createElement(a.Z,{url:v,title:t,hashtags:n},r.createElement(o.Z,{round:!0,size:32})),r.createElement(i.Z,{url:v,title:t,hashtag:null==n?void 0:n[0]},r.createElement(l.Z,{round:!0,size:32})),r.createElement(s.Z,{url:v,title:t},r.createElement(u.Z,{round:!0,size:32})),r.createElement(c.Z,{url:v,title:t},r.createElement(m.Z,{round:!0,size:32})),r.createElement(d.Z,{url:v,title:t},r.createElement(p.Z,{round:!0,size:32})))}},49233:function(e,t,n){"use strict";function r(){return"#"+Math.floor(255*Math.random()).toString(16)+Math.floor(255*Math.random()).toString(16)+Math.floor(255*Math.random()).toString(16)}n.d(t,{m:function(){return r}})},16909:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(67294),a=r.createContext({repo1:void 0,repo2:void 0,dateRange:[null,null],allProvidedRepos:function(){return[]},allReposProvided:function(){return!1}});function o(){return(0,r.useContext)(a)}t.Z=a},58130:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(67294),o=n(4181),i=[{title:"Stars total",query:"stars-total"},{title:"Avg stars / week",query:"stars-average-by-week"},{title:"Max stars / week",query:"stars-max-by-week"}];function l(){return a.createElement(r.Z,{title:"Stars",description:"The chart below display the total number of stars, the average and the maximum number of stars per week gained by the two projects respectively since 2011. "},(function(e){var t=e.repo1,n=e.repo2;return a.createElement(o.Z,{repos:[t,n],queries:i})}))}},35736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(49233),a=n(54595),o=n(67294),i=n(52878);function l(){return o.createElement(i.Z,{title:"Star History",description:"This chart displays the accumulated number of stars the two projects gained respectively each year since 2011."},(function(e){var t=e.repo1,n=e.repo2,i=e.dateRange,l=e.allReposProvided;e.allProvidedRepos;return o.createElement(a.Z,{title:"Stars History",queryName:"stars-history",params:{repoId1:null==t?void 0:t.id,repoId2:null==n?void 0:n.id,dateRange:i},shouldLoad:l([t,n]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:[t,n].map((function(e){return{name:null==e?void 0:e.name,color:(null==e?void 0:e.color)||(0,r.m)(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"total"},height:"500px"})}))}},53852:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(45150),o=n(67294);function i(){return o.createElement(r.Z,{title:"Countries/Regions of Stargazers",description:"This map shows you where the stargazers of each project come from and which countries or regions like the project the best."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return o.createElement(a.Z,{title:"The country / area of stargazers",queryName:"stars-map",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},name1:null==t?void 0:t.name,name2:null==n?void 0:n.name,shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{}],dimensionColumnName:"country_or_area",metricColumnName:"count",height:"400px"})}))}},79759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(12871),o=n(67294);function i(){return o.createElement(r.Z,{title:"Top 50 company of stargazers",description:"The pie charts describe the major companies of stargazers for each project."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return o.createElement(a.Z,{title:"Top 50 company of stargazers",queryName:"stars-top-50-company",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{name:"company"}],dimensionColumnName:"company_name",metricColumnName:"stargazers",height:"400px"})}))}},62554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(67294),o=n(4181),i=[{title:"Total PRs",query:"pull-requests-total"},{title:"Total PR creators",query:"pull-request-creators-total"},{title:"Total PR reviews",query:"pull-request-reviews-total"},{title:"Total PR reviewers",query:"pull-request-reviewers-total"}];function l(){return a.createElement(r.Z,{title:"PRs",description:"The chart below compare the two projects in regard to the total number of pull requests (PRs), PR creators, PR reviews, and PR reviewers since 2011."},(function(e){var t=e.repo1,n=e.repo2;return a.createElement(o.Z,{repos:[t,n],queries:i})}))}},69675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(49233),o=n(54595),i=n(67294);function l(){return i.createElement(r.Z,{title:"PR History",description:"This chart displays the accumulated number of PRs the two projects gained respectively each year since 2011."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,l=e.allReposProvided;e.allProvidedRepos;return i.createElement(o.Z,{title:"Pull Request History",queryName:"pull-requests-history",params:{repoId1:null==t?void 0:t.id,repoId2:null==n?void 0:n.id,dateRange:r},shouldLoad:l([t,n]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:[t,n].map((function(e){return{name:null==e?void 0:e.name,color:(null==e?void 0:e.color)||(0,a.m)(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"total"},height:"500px"})}))}},76807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(54595),o=n(49233),i=n(67294);function l(){return i.createElement(r.Z,{title:"PR Creators per Month",description:"This chart displays the number of PR creators the two projects had respectively each week since 2011."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,l=(e.allProvidedRepos,e.allReposProvided);return i.createElement(a.Z,{title:"Pull Request Creator per month",queryName:"pull-request-creators-per-month",params:{repoId1:null==t?void 0:t.id,repoId2:null==n?void 0:n.id,dateRange:r},shouldLoad:l([t,n]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:[t,n].map((function(e){return{name:null==e?void 0:e.name,color:(null==e?void 0:e.color)||(0,o.m)(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"month_pr_count"},height:"500px"})}))}},28660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(67294),o=n(45150);function i(){return a.createElement(r.Z,{title:"Countries/Regions of PR Creators",description:"This map shows you where the PR creators come from and which countries or regions like the project the best."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return a.createElement(o.Z,{title:"The country / area of PR creators",queryName:"pull-request-creators-map",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},name1:null==t?void 0:t.name,name2:null==n?void 0:n.name,shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{}],dimensionColumnName:"country_or_area",metricColumnName:"count",height:"400px"})}))}},21360:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(12871),o=n(67294);function i(){return o.createElement(r.Z,{advanced:!0,title:"Top 50 company of PR Creators",description:"The pie charts describe the major companies of PR creators for each project."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return o.createElement(a.Z,{title:"Top 50 company of PR Creators",queryName:"pull-request-creators-top-50-company",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{name:"company"}],dimensionColumnName:"company_name",metricColumnName:"code_contributors",height:"400px"})}))}},91805:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(67294),o=n(4181),i=[{title:"Total issues",query:"issues-total"},{title:"Total issue creators",query:"issue-creators-total"},{title:"Total issue comments",query:"issue-comments-total"},{title:"Total issue commenters",query:"issue-commenters-total"}];function l(){return a.createElement(r.Z,{title:"Issues",description:"The chart below compare the two projects in regard to the total number of issues, issue submitters, issues comments, and issue commenters since 2011."},(function(e){var t=e.repo1,n=e.repo2;return a.createElement(o.Z,{repos:[t,n],queries:i})}))}},7647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(67294),o=n(45150);function i(){return a.createElement(r.Z,{title:"Countries/Regions of Issue Openers",description:"This map will show you which country or region does issue creators come from. They make an issue to report the problem, or request a new feature.",advanced:!0},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return a.createElement(o.Z,{title:"The country / area of issue openers",queryName:"issue-creators-map",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},name1:null==t?void 0:t.name,name2:null==n?void 0:n.name,shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{}],dimensionColumnName:"country_or_area",metricColumnName:"count",height:"400px"})}))}},48919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52878),a=n(12871),o=n(67294);function i(){return o.createElement(r.Z,{advanced:!0,title:"Top 50 company of Issue Creators",description:"The pie charts describe the major companies of issue openers for each project."},(function(e){var t=e.repo1,n=e.repo2,r=e.dateRange,i=e.allReposProvided;return o.createElement(a.Z,{title:"top 50 company of issue openers",queryName:"issue-creators-top-50-company",params1:{repoId:null==t?void 0:t.id,dateRange:r},params2:{repoId:null==n?void 0:n.id,dateRange:r},shouldLoad:i([t,n]),noLoadReason:"Need select repo.",series:[{name:"company"}],dimensionColumnName:"company_name",metricColumnName:"issue_creators",height:"400px"})}))}},89502:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(52878),a=n(67294),o=n(4181),i=[{title:"Total commits",query:"commits-total"},{title:"Total committers",query:"committers-total"},{title:"Total pushes",query:"pushes-total"}];function l(){return a.createElement(r.Z,{title:"Commits",description:"The chart below compare the two projects in regard to the total number of commits, committers, and pushes since 2011."},(function(e){var t=e.repo1,n=e.repo2;return a.createElement(o.Z,{repos:[t,n],queries:i})}))}},14151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(52878),a=n(86886),o=n(87357),i=n(94054),l=n(33841),s=n(45684),u=n(23599),c=n(87462),m=n(67294),d=n(6971),p=n(90864),f=n(2734),h=n(98396),v=n(49067),g=["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],y=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];function b(e){var t=e.queryName,n=e.params,r=void 0===n?{}:n,a=e.series,o=void 0===a?[]:a,i=e.shouldLoad,l=e.xAxisColumnName,s=e.yAxisColumnName,u=e.valueColumnName,b=e.xAxis,Z=e.yAxis,x=(e.height,e.zone),E=(e.onZoneChange,(0,d.WV)(t,r,!0,i)),R=E.data,C=E.loading,N=E.error,w=(0,f.Z)(),M=(0,h.Z)(w.breakpoints.down("sm")),P=(0,m.useMemo)((function(){var e=Number.MAX_VALUE,t=Number.MIN_VALUE;return{data:(null==R?void 0:R.data.map((function(n){var r=Number(n[u]);return r>t&&(t=r),r<e&&(e=r),[(n[l]+x+24)%24,n[s],r]})))||[],min:e,max:t}}),[R,x,M]),q=P.data,T=P.min,L=P.max,I=(0,m.useMemo)((function(){return{tooltip:{show:!0},grid:M?{top:"2%",bottom:"2%",left:"2%",right:"2%",containLabel:!0}:{top:"2%",bottom:"16%",left:"6%",right:"2%",containLabel:!0},xAxis:Object.assign({type:"category",data:g,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},inverse:!1},b),yAxis:Object.assign({type:"category",data:y,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold",rotate:0,fontSize:M?8:void 0},position:"top"},Z),visualMap:{show:!M,min:T,max:L,orient:M?void 0:"horizontal",left:"center",bottom:0},series:o.map((function(e){return Object.assign({type:"heatmap",data:q,label:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}},e)}))}}),[q,M]);return m.createElement(p.Z,(0,c.Z)({},e,{loading:C,error:N,query:t,data:R}),m.createElement(v.Z,{aspectRatio:24/7,option:I,notMerge:!1,lazyUpdate:!0}))}for(var Z=n(49233),x=n(46483),E=[],R=-12;R<=13;R++)E.push(R);function C(){var e=(0,m.useState)(0),t=e[0],n=e[1],c=(0,m.useCallback)((function(e){n(e.target.value)}),[n]);return m.createElement(r.Z,{title:"Heat Map of Commits Time",description:m.createElement(m.Fragment,null,m.createElement(x.Z,{variant:"body1"},"The ",m.createElement("b",null,"Heat Maps of Commits Time")," display the number of push events occurring at a particular point of time. The Y-axis represents seven days a week, and the X-axis represents 24 hours a day according to the Universal Time Coordinated (UTC). The lighter color in this heat map indicates that less push events occur at a particular point of time. On the contrary, the darker color indicates more push events occurring."),m.createElement("br",null),m.createElement(x.Z,{variant:"body1"},"You can learn from this heat map what time is the busiest for contributors, and which country or regions most contributors are located."))},(function(e){var n=e.repo1,r=e.repo2,d=e.allProvidedRepos,p=e.allReposProvided,f=e.dateRange;return m.createElement(a.ZP,{container:!0},m.createElement(a.ZP,{xs:12},m.createElement(o.Z,{sx:{minWidth:120}},m.createElement(i.Z,{size:"small"},m.createElement(l.Z,{id:"zone-select-label"},"Timezone (UTC)"),m.createElement(s.Z,{labelId:"zone-select-label",id:"zone-select",value:t,label:"Timezone (UTC)",onChange:c,sx:{minWidth:120},variant:"standard"},E.map((function(e){return m.createElement(u.Z,{key:e,value:e},e>0?"+"+e:e)})))))),m.createElement(a.ZP,{item:!0,md:6,sm:6,xs:12},m.createElement(b,{title:"Commits Time Distribution",queryName:"commits-time-distribution",params:{repoId:null==n?void 0:n.id,dateRange:f},shouldLoad:p([n]),noLoadReason:"Need select repo.",xAxisColumnName:"hour",yAxisColumnName:"dayofweek",valueColumnName:"pushes",series:d([n]).map((function(e){return{name:e.name,color:e.color||(0,Z.m)(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),height:"700px",zone:t,onZoneChange:c})),m.createElement(a.ZP,{item:!0,md:6,sm:6,xs:12},m.createElement(b,{title:"Commits Time Distribution",queryName:"commits-time-distribution",params:{repoId:null==r?void 0:r.id,dateRange:f},shouldLoad:p([r]),noLoadReason:"Need select repo.",xAxisColumnName:"hour",yAxisColumnName:"dayofweek",valueColumnName:"pushes",series:d([r]).map((function(e){return{name:e.name}})),height:"700px",zone:t,onZoneChange:c})))}))}},4181:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(15861),a=n(87757),o=n.n(a),i=n(67294),l=n(8100),s=n(21703),u=n(68023),c=n(4755),m=n(8690),d=n(76395),p=n(91416),f=n(2734),h=n(98396);function v(e,t){var n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(t){return e>=t.value}));return n?(e/n.value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n.symbol:"0"}var g="compareNumbersContainer_+IF-",y="compareNumbersContainerBody_q38y",b="compareNumbers_7PGt",Z="repo1_BV-c",x="repo2_-L+Z",E="title_n1Hx",R=n(46483),C=n(98456),N=n(92902),w=n(87357),M=(0,s.d)();function P(e){var t=e.children;return i.createElement(w.Z,{sx:{maxWidth:"max-content",mx:"auto",py:2,my:2}},i.createElement("div",{className:g},i.createElement("div",{className:y},t)))}function q(e){var t=e.tag,n=void 0===t?"div":t,r=e.title,a=e.query,o=e.repos,l=T(a,o[0]),s=T(a,o[1]);return i.createElement(n,{className:b},i.createElement(R.Z,{className:Z,component:"span",variant:"body1",fontFamily:"Lato",fontWeight:800},l.isValidating?i.createElement(C.Z,{size:"1em"}):i.createElement(N.Z,{title:l.data[0]},i.createElement("span",null,l.data[1]))),i.createElement(R.Z,{className:E,component:"h3",variant:"h5",fontFamily:"Lato",gutterBottom:!0,fontWeight:400,sx:{borderColor:"gray"}},r),i.createElement(R.Z,{className:x,component:"span",variant:"body1",fontFamily:"Lato",fontWeight:800},s.isValidating?i.createElement(C.Z,{size:"1em"}):i.createElement(N.Z,{title:s.data[0]},i.createElement("span",null,s.data[1]))))}function T(e,t){return(0,l.ZP)([e,t],{fetcher:function(e,t){return t?M.get("/q/"+e,{params:{repoId:t.id}}).then((function(e){var t=e.data.data,n=Object.values(t[0]);return[String(n),String(v(n,1)||0)]})):Promise.resolve(["--","--"])},fallbackData:["--","--"],revalidateOnFocus:!1,revalidateOnReconnect:!1})}var L=n(49067);u.D([m.N,d.N,c.N,p.N]);var I=(0,s.d)(),k=function(e){var t=e.repos,n=e.queries,r=z(n.map((function(e){return e.query})),t[0]),a=z(n.map((function(e){return e.query})),t[1]),o=(0,i.useMemo)((function(){var e,o,i,l;return{legend:{left:"25%",orient:"vertical",data:[null!=(e=null==(o=t[0])?void 0:o.name)?e:"repo 1",null!=(i=null==(l=t[1])?void 0:l.name)?i:"repo 2"]},radar:{indicator:n.map((function(e,t){var n,o,i,l;return{name:e.title,max:Math.max(null!=(n=null==(o=r.data)?void 0:o[t])?n:0,null!=(i=null==(l=a.data)?void 0:l[t])?i:0,1)}})),axisName:{padding:[8,8]},center:["50%","50%"]},tooltip:{trigger:"axis"},series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:t.map((function(e,t){var n;return{value:[r,a][t].data,name:null!=(n=null==e?void 0:e.name)?n:"repo "+(t+1),label:{show:!0,formatter:function(e){return v(e.value,1)}}}}))}]}}),[r.data,a.data]);return i.createElement(L.Z,{aspectRatio:4,option:o,notMerge:!1,lazyUpdate:!0})},S=function(e){var t=e.repos,n=e.queries;return i.createElement(P,null,n.map((function(e){var n=e.title,r=e.query;return i.createElement(q,{key:r,title:n,query:r,repos:t})})))};function z(e,t){return(0,l.ZP)([e,t],{fetcher:function(e,t){return t?Promise.all(e.map(function(){var e=(0,r.Z)(o().mark((function e(n){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.get("/q/"+n,{params:{repoId:t.id}});case 3:return r=e.sent,a=r.data.data,i=Object.values(a[0])[0],e.abrupt("return",parseInt(i));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())):Promise.resolve(e.map((function(){return 0})))},fallbackData:e.map((function(){return 0})),revalidateOnFocus:!1,revalidateOnReconnect:!1})}var j=function(e){var t=e.repos,n=e.queries,r=(0,f.Z)();return(0,h.Z)(r.breakpoints.down("sm"))?i.createElement(S,{repos:t,queries:n}):i.createElement(k,{repos:t,queries:n})}},52878:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),a=n(60856),o=n(16909),i=n(46483),l=n(87357),s=n(70131),u=n(10981);function c(e){var t=e.title,n=e.description,c=e.children,m=(0,s.YD)({fallbackInView:!0}),d=m.inView,p=m.ref,f=(0,o.E)(),h=(0,r.useMemo)((function(){return"string"==typeof t?r.createElement(i.Z,{variant:"h4",component:"h2"},t):t}),[t]),v=(0,r.useMemo)((function(){return"string"==typeof n?r.createElement(i.Z,{variant:"body1"},n):n}),[n]);return r.createElement("section",{ref:p,className:a.Z.mainSection},r.createElement(u.Z.Provider,{value:{inView:d}},h,v,r.createElement(l.Z,{sx:{mt:4,mb:8}},c(f,d))))}},42935:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(67294),a=n(52263),o=n(12859),i=n(77019),l=n(5344),s=n(78700),u=n(60856),c=n(4842),m=n(87462),d=n(15861),p=n(87757),f=n.n(p),h=n(61903),v=n(11588),g=n(98456),y=n(49233),b=n(57144),Z=n(76798),x=n(46901),E=n(21703),R=n(8100),C=(0,E.d)();function N(e){var t,n=e.repo,a=e.label,o=e.defaultRepoName,i=e.onChange,l=e.onValid,s=(0,r.useState)(null!=o?o:""),u=s[0],c=s[1],p=(0,r.useState)(!1),E=p[0],N=p[1],w=(0,r.useState)(""),M=w[0],P=w[1],q=(0,r.useState)(!1),T=q[0],L=q[1],I=(0,r.useMemo)((function(){return(0,b.Z)(c,500)}),[c]),k=(0,R.ZP)([u||o],{fetcher:(t=(0,d.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,C.get("/gh/repos/search",{params:{keyword:t}});case 5:return n=e.sent,r=n.data.data,e.abrupt("return",r.map((function(e){return{id:e.id,name:e.fullName,color:(0,y.m)()}})));case 8:return e.prev=8,L(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,,8,11]])}))),function(e){return t.apply(this,arguments)}),fallbackData:[],revalidateOnFocus:!1,revalidateOnReconnect:!1}),S=k.data,z=k.isValidating,j=k.error,_=(0,r.useCallback)((function(e,t){var n=l(t);void 0!==n?(N(!0),P(n)):i(t)}),[l,i]),O=(0,r.useCallback)(function(){var e=(0,d.Z)(f().mark((function e(t,n,r){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(void 0),N(!1),I(n);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[I]),A=(0,r.useMemo)((function(){var e,t,n=(null==j||null==(e=j.response)||null==(t=e.data)?void 0:t.message)||String(j);return-1!==n.indexOf("API rate limit exceeded")?"Too frequent to operate, please try again after one minute.":n}),[j]);return r.createElement(r.Fragment,null,r.createElement(v.Z,{sx:{maxWidth:300,mx:"auto"},size:"small",isOptionEqualToValue:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.name},options:null!=S?S:[],loading:z,value:n,onChange:_,onInputChange:O,renderInput:function(e){return r.createElement(h.Z,(0,m.Z)({},e,{error:E,variant:"standard",size:"small",placeholder:a,helperText:M,InputProps:Object.assign({},e.InputProps,{sx:{"::before":{display:"none"}},endAdornment:r.createElement(r.Fragment,null,z?r.createElement(g.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}}),r.createElement(Z.Z,{open:!!j&&!T,autoHideDuration:3e3,onClose:function(){return L(!0)}},r.createElement(x.Z,{severity:"error",sx:{width:"100%"}},A)))}var w=n(86886),M=n(87357),P=n(85350);var q=function(e){var t=(0,P.Z)().isDarkTheme;return r.createElement(M.Z,{position:"sticky",sx:{my:2,py:2,top:"var(--ifm-navbar-height)",zIndex:11,backgroundColor:t?"var(--ifm-background-color)":"background.default",borderBottom:"1px solid transparent",borderBottomColor:"divider"}},r.createElement(w.ZP,{container:!0},r.createElement(w.ZP,{item:!0,xs:5},r.createElement(N,{label:"Repo Name 1",defaultRepoName:"pingcap/tidb",repo:e.repo1,onChange:e.onRepo1Change,onValid:e.onRepo1Valid})),r.createElement(w.ZP,{item:!0,xs:2},r.createElement(M.Z,{sx:{borderRadius:1,maxWidth:"min-content",margin:"auto",px:2,backgroundColor:"text.primary",color:"background.default",fontWeight:"bolder"}},"VS.")),r.createElement(w.ZP,{item:!0,xs:5},r.createElement(N,{label:"Repo Name 2",defaultRepoName:"tikv/tikv",repo:e.repo2,onChange:e.onRepo2Change,onValid:e.onRepo2Valid}))))};var T="undefined"==typeof window?function(e,t){var n=t.defaultValue;return(0,r.useState)(n)}:function(e,t){var n=t.defaultValue,a=t.deserialize,o=t.serialize,i=(0,r.useMemo)((function(){var t=new URLSearchParams(location.search);return t.has(e)?a(t.get(e)):n}),[]),l=(0,r.useState)(i),s=l[0],u=l[1];return(0,r.useEffect)((function(){var t=o(s);if(null!=t){var n=new URLSearchParams(location.search);n.set(e,t),window.history.replaceState(null,null,"?"+n.toString())}}),[s]),[s,u]};function L(e){return{defaultValue:e,serialize:function(e){return e},deserialize:function(e){return e}}}for(var I=n(82593),k=n(91262),S=n(16909),z=n(46483),j=function(e){return e.filter((function(e){return void 0!==e&&void 0!==(null==e?void 0:e.name)}))},_=function(e){return e.filter((function(e){return void 0!==e&&void 0!==(null==e?void 0:e.name)})).length===e.length},O=n(59500),A=function(e){return r.createElement("main",{className:u.Z.mainContent,style:{}},r.createElement(S.Z.Provider,{value:e.context},e.children))},W=[],V=-12;V<=13;V++)W.push(V);function F(e){var t=(0,r.useState)(null),n=t[0],a=t[1],o=(0,r.useState)(!1),i=o[0],l=o[1];return(0,r.useEffect)((function(){e&&(l(!0),fetch(E._+"/gh/repo/"+e).then((function(e){return e.json()})).then((function(e){return a({id:e.data.id,name:e.data.full_name,color:(0,y.m)()})})).finally((function(){l(!1)})))}),[]),[n,a,i]}var H=[null,null];function U(){var e=(0,a.Z)().siteConfig,t=T("repo1",L()),n=t[0],m=t[1],d=T("repo2",L()),p=d[0],f=d[1],h=F(n),v=h[0],g=h[1],y=h[2],b=F(p),Z=b[0],x=b[1],E=b[2];(0,r.useEffect)((function(){y||m(null==v?void 0:v.name)}),[v,m,y]),(0,r.useEffect)((function(){E||f(null==Z?void 0:Z.name)}),[Z,f,E]);var R=(0,r.useCallback)((function(e){if(void 0!==(null==e?void 0:e.name)&&(null==e?void 0:e.name)===(null==Z?void 0:Z.name))return"Please select another repository to compare."}),[Z]),C=(0,r.useCallback)((function(e){if(void 0!==(null==e?void 0:e.name)&&(null==e?void 0:e.name)===(null==v?void 0:v.name))return"Please select another repository to compare."}),[v]),N=(0,r.useMemo)((function(){return O.keys().sort().map((function(e){return O(e).default})).map((function(e){return r.createElement(e,null)}))}),[]);return r.createElement(i.Z,{wrapperClassName:u.Z.page,title:"Project Compare | "+e.title},r.createElement(l.Z,{dateAdapter:s.Z},r.createElement(c.Z,null,r.createElement(o.Z,null,r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap"})),r.createElement(A,{context:{repo1:v,repo2:Z,dateRange:H,allReposProvided:_,allProvidedRepos:j}},r.createElement(z.Z,{variant:"h3",component:"h1"},"Comparing OSS"),r.createElement(w.ZP,{container:!0},r.createElement(w.ZP,{item:!0,xs:12,lg:8},r.createElement(z.Z,{variant:"body1"},"Here, you can compare any two GitHub projects regarding their stars, pull requests, stargazers' locations and companies, issues, commits, and some other metrics.")),r.createElement(w.ZP,{item:!0,xs:12,lg:4},r.createElement(k.Z,null,(function(){return r.createElement(I.Z,{title:"Compare Projects | OSSInsight",style:{marginTop:16,marginRight:16}})})))),r.createElement(q,{repo1:v,onRepo1Change:g,onRepo1Valid:R,repo2:Z,onRepo2Change:x,onRepo2Valid:C}),r.createElement(M.Z,{sx:{mt:4}},N)))))}},90978:function(e,t){"use strict";t.Z={basicCard:"basicCard_QV6f",basicCardHeader:"basicCardHeader_K-YW",basicCardTitle:"basicCardTitle_+ts1"}},60856:function(e,t){"use strict";t.Z={mainWrapper:"mainWrapper_vp7E",mainHeader:"mainHeader_4hMo",mainContent:"mainContent_9+-R",mainSection:"mainSection_Lz-8",page:"page_8gJN"}},59500:function(e,t,n){var r={"./1-stars-1-numbers.tsx":58130,"./1-stars-2-history.tsx":35736,"./1-stars-3-country-area.tsx":53852,"./1-stars-4-companies.tsx":79759,"./2-prs-1-numbers.tsx":62554,"./2-prs-2-history.tsx":69675,"./2-prs-3-creators.tsx":76807,"./2-prs-4-country-area.tsx":28660,"./2-prs-5-companies.tsx":21360,"./3-issues-1-numbers.tsx":91805,"./3-issues-2-country-area.tsx":7647,"./3-issues-3-companies.tsx":48919,"./4-commits-1-numbers.tsx":89502,"./4-commits-2-time.tsx":14151};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=59500}}]);