"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[2144],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,h=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1760:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const o={slug:"acm-sigplan-ifcp-erlang-workshop-2021",title:"ACM SIGPLAN, ICFP Erlang Workshop 2021",authors:["marcellanz"],tags:["serverless","eigr"]},i=void 0,l={permalink:"/blog/acm-sigplan-ifcp-erlang-workshop-2021",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/blog/blog/2021-08-19-acm-sigplan-icfp-erlang-workshop-2021.md",source:"@site/blog/2021-08-19-acm-sigplan-icfp-erlang-workshop-2021.md",title:"ACM SIGPLAN, ICFP Erlang Workshop 2021",description:"We're excited to be selected",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"serverless",permalink:"/blog/tags/serverless"},{label:"eigr",permalink:"/blog/tags/eigr"}],readingTime:.81,hasTruncateMarker:!1,authors:[{name:"Marcel Lanz",title:"eigr.io \u2013 Core Team",url:"https://github.com/marcellanz",imageURL:"https://avatars.githubusercontent.com/u/12616445?v=4",key:"marcellanz"}],frontMatter:{slug:"acm-sigplan-ifcp-erlang-workshop-2021",title:"ACM SIGPLAN, ICFP Erlang Workshop 2021",authors:["marcellanz"],tags:["serverless","eigr"]},prevItem:{title:"May 2022 \u2013 Current Status of the Project",permalink:"/blog/current-status-of-the-project"}},s={authorsImageUrls:[void 0]},p=[{value:"Abstract",id:"abstract",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're excited to be selected\nfor ",(0,a.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM"},"one of the Lightning Talks"),"\nright after the Erlang Keynote at the ACM\nSIGPLAN, ",(0,a.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/home/erlang-2021"},"ICFP Erlang Workshop 2021"),"."),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"Serverless runtimes are often hidden in a cloud providers offering and exposed\nsolely by their programming API and deployment procedures. In this talk, we\u2019ll\nexplore an open-source Serverless runtime built for the cloud and on-premises,\nrunning on the BEAM with a polyglot programming model to build general purpose\napplications."),(0,a.kt)("p",null,"Building general purpose applications using multiple languages and having a\nstory how to handle state was our main motivation to explore the space of a\nServerless runtime to be built. We think the BEAM, OTP and Elixir/Erlang are a\nperfect match to build on."),(0,a.kt)("p",null,"With this talk, we combine herein the world of the BEAM with cloud technology\nlike a gRPC-based protocol, Kubernetes and a polyglot programming model with\nlanguages supported like Go, JavaScript, JVM-languages, Python and many more."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event:"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM"},"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\nSlides:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.slideshare.net/MarcelLanz/eigrio-a-serverless-runtime-on-the-beam-acm-sigplan-icfp-2021-erlang-workshop"},"Slideshare"),"\n, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1mLmSFY0z6gxoG88-phcFTwyVBMv8R9myBA5MZOWoJso/edit#slide=id.p1"},"Google Slides")))}u.isMDXComponent=!0}}]);