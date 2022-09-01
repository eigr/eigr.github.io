"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[7607],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5551:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(3117),o=(t(7294),t(3905));const i={sidebar_position:10},a="Inversion of State",s={unversionedId:"concepts/inversion-of-state",id:"concepts/inversion-of-state",title:"Inversion of State",description:"Serverless runtimes are often hidden in a cloud providers offering and exposed solely by their programming API and",source:"@site/docs/concepts/inversion-of-state.md",sourceDirName:"concepts",slug:"/concepts/inversion-of-state",permalink:"/docs/concepts/inversion-of-state",draft:!1,editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/docs/concepts/inversion-of-state.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"eigrSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Polyglot Programming",permalink:"/docs/concepts/polyglot-programming"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inversion-of-state"},"Inversion of State"),(0,o.kt)("p",null,"Serverless runtimes are often hidden in a cloud providers offering and exposed solely by their programming API and\ndeployment procedures. In this talk, we'll explore an open-source Serverless runtime built for the cloud and\non-premises, running on the BEAM with a polyglot programming model to build general purpose applications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="inversion of state"',title:'"inversion',of:!0,'state"':!0},"                                                 \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500                                      \n                   \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557       message-in   \u2502                                     \n                   \u2551                         \u2551   \u2502                                                      \n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557     \u2551                         \u2551     \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557 \u2502                                     \n\u2551  request1  \u2551\u2500\u2500\u2500\u2500\u2500\u256c\u2500\u2500(1)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256c\u2500\u2500\u25b6\u2502 \u2551  request1  \u2551\u2500\u2500\u2500\u2500\u2500(3.2)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                \n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d     \u2551                         \u2551     \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563 \u2502                    \u2502                \n                   \u2551             \u250c\u2500\u2500\u2500\u2500\u2500(2)\u2500\u2500\u2500\u256c\u2500\u2500\u25b6\u2502 \u2551   state1   \u2551\u2500\u2500\u2500\u2500\u2500(3.1)\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u2502                \n                   \u2551             \u2502           \u2551     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d \u2502              \u2502     \u2502                \n                   \u2551             \u2502           \u2551   \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500   \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n                   \u2551             \u2502           \u2551                       \u2551           \u2502     \u2502               \u2551\n                   \u2551             \u2502           \u2551                       \u2551           \u25bc     \u25bc               \u2551\n                   \u2551             \u2502           \u2551                       \u2551 function(ctx, message) response \u2551\n                   \u2551             \u2502           \u2551                       \u2551                                 \u2551\n                   \u2551             \u2502           \u2551                       \u2551           \u2502               \u2502     \u2551\n                   \u2551             \u2502           \u2551   \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u255d\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557     \u2551             \u2502           \u2551     \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557 \u2502              \u2502               \u2502      \n\u2551 response1  \u2551\u25c0\u2500\u2500\u2500\u2500\u256c\u2500\u2500(6)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256c\u2500\u2500\u2500\u253c\u2500\u2551 response1  \u2551  \u25c0\u2500\u2500(4.2)\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d     \u2551             \u2502           \u2551     \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563 \u2502              \u2502                      \n                   \u2551             \u2502    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u256c\u2500\u2500\u2500\u253c\u2500\u2551   state2   \u2551  \u25c0\u2500\u2500(4.1)\u2500\u2500\u2500\u2500\u2500\u2500\u2518                      \n                   \u2551             \u2502    \u2502      \u2551     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d \u2502                                     \n                   \u2551Proxy        \u2502    \u2502      \u2551   \u2502                                                      \n                   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u2550\u255d      message-out   \u2502                                     \n                                 \u2502    \u2502          \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500                                      \n                                 \u2502    \u2502                                                                 \n                                 \u2502    \u2502                                                                 \n                   \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u256c\u2550\u2550\u2550\u2550\u2550\u2550\u2557                                                          \n                   \u2551             \u2502    \u2502      \u2551                                                          \n                   \u2551             \u2502    \u2502      \u2551     \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557                                       \n                   \u2551             \u2514\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u256c\u2500\u2500\u2500\u2500\u2500\u2551   state1   \u2551                                       \n                   \u2551                  \u2502      \u2551     \u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563                                       \n                   \u2551                  \u2514\u2500(5)\u2500\u2500\u256c\u2500\u2500\u2500\u2500\u25b6\u2551   state2   \u2551                                       \n                   \u2551                         \u2551     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d                                       \n                   \u2551State-Management         \u2551                                                          \n                   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d                                                                                                                    \n")))}u.isMDXComponent=!0}}]);