"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[2751],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,h=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6594:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"ifcp-2021",title:"Erlang Workshop 2021 - ICFP 2021",author:"Marcel Lanz",author_title:"eigr.io Core Team",author_url:"https://github.com/marcellanz",author_image_url:"https://avatars.githubusercontent.com/u/12616445?v=4",tags:["serverless","eigr"]},p=void 0,s={permalink:"/blog/ifcp-2021",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/blog/blog/2021-08-19-Erlang-2021-ICFP-2021.md",source:"@site/blog/2021-08-19-Erlang-2021-ICFP-2021.md",title:"Erlang Workshop 2021 - ICFP 2021",description:"We're excited to be selected",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"serverless",permalink:"/blog/tags/serverless"},{label:"eigr",permalink:"/blog/tags/eigr"}],readingTime:.79,truncated:!1},c=[{value:"Abstract",id:"abstract",children:[]}],u={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're excited to be selected\nfor ",(0,o.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM"},"one of the Lightning Talks"),"\nright after the Erlang Keynote at the ACM SIGPLAN, ",(0,o.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/home/erlang-2021"},"ICFP Erlang Workshop 2021"),"."),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Serverless runtimes are often hidden in a cloud providers offering and exposed\nsolely by their programming API and deployment procedures. In this talk, we\u2019ll\nexplore an open-source Serverless runtime built for the cloud and on-premises,\nrunning on the BEAM with a polyglot programming model to build general purpose\napplications."),(0,o.kt)("p",null,"Building general purpose applications using multiple languages and having a\nstory how to handle state was our main motivation to explore the space of a\nServerless runtime to be built. We think the BEAM, OTP and Elixir/Erlang are a\nperfect match to build on."),(0,o.kt)("p",null,"With this talk, we combine herein the world of the BEAM with cloud technology\nlike a gRPC-based protocol, Kubernetes and a polyglot programming model with\nlanguages supported like Go, JavaScript, JVM-languages, Python and many more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Event:"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM"},"https://icfp21.sigplan.org/details/erlang-2021-papers/13/Lightning-Talk-eigr-io-A-Serverless-Runtime-on-the-BEAM")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Slides:"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.slideshare.net/MarcelLanz/eigrio-a-serverless-runtime-on-the-beam-acm-sigplan-icfp-2021-erlang-workshop"},"https://www.slideshare.net/MarcelLanz/eigrio-a-serverless-runtime-on-the-beam-acm-sigplan-icfp-2021-erlang-workshop")))}g.isMDXComponent=!0}}]);