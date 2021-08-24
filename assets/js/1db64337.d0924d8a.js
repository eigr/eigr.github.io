"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Overview",l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"WIP. The eigr.io documentation is a work-in-progress right now.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/docs/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"eigrSidebar",next:{title:"Inversion of State",permalink:"/docs/concepts/inversion-of-state"}},u=[{value:"Abstract",id:"abstract",children:[]},{value:"Key Points",id:"key-points",children:[]},{value:"Function as a Service (FaaS)",id:"function-as-a-service-faas",children:[]},{value:"Stateful Services",id:"stateful-services",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"WIP. The eigr.io documentation is a work-in-progress right now.")),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Serverless runtimes are often hidden in a cloud providers offering and exposed solely by their programming API and\ndeployment procedures. eigr.io is an open-source serverless runtime built for the cloud and on-premises, running on the\nBEAM with a polyglot programming model to build general purpose applications."),(0,o.kt)("h2",{id:"key-points"},"Key Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The eigr/functions project is no fork of Cloudstate but based on a new implementation of the Cloudstate protocol."),(0,o.kt)("li",{parentName:"ul"},"The technical basis for project eigr is Erlang/OTP and the BEAM-VM."),(0,o.kt)("li",{parentName:"ul"},"Developer Libraries are intended to be compatible with Cloudstate and Akka Serverless.")),(0,o.kt)("h2",{id:"function-as-a-service-faas"},"Function as a Service (FaaS)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="FaaS"',title:'"FaaS"'},"\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557    \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551               \u2551    \u2551                   \u2551    \u2551               \u2551\n\u2551  Message In   \u2551\u2500\u2500\u2500\u25b6\u2551      Service      \u2551\u2500\u2500\u2500\u25b6\u2551  Message Out  \u2551\n\u2551               \u2551    \u2551                   \u2551    \u2551               \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"message in, message out" \u2013 Bon\xe9r, 2020, "CloudState\u2014Towards Stateful Serverless"')),(0,o.kt)("h2",{id:"stateful-services"},"Stateful Services"),(0,o.kt)("p",null,"State is brought to the incoming message right at the time the message passed to the service and even before the service\nhandles that message. This is possible by state-models that are abstracted in a way so that state can be lifted to a\ncontext available to a service that has chosen the very state-model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="Stateful FaaS"',title:'"Stateful','FaaS"':!0},"\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557                             \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551               \u2551\u2500\u2510                        \u250c\u2500\u25b6\u2551               \u2551\n\u2551  Message In   \u2551 \u2502  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557 \u2502  \u2551  Message Out  \u2551\n\u2551               \u2551 \u2514\u2500\u25b6\u2551                   \u2551\u2500\u2518  \u2551               \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d    \u2551      Service      \u2551    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557 \u250c\u2500\u25b6\u2551                   \u2551\u2500\u2510  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551               \u2551 \u2502  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d \u2502  \u2551               \u2551\n\u2551   State In    \u2551\u2500\u2518                        \u2514\u2500\u25b6\u2551   State Out   \u2551\n\u2551               \u2551                             \u2551               \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d                             \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n")))}d.isMDXComponent=!0}}]);