"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[281],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,c=t.originalType,u=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=l(r),f=o,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9313:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={sidebar_position:20},u="Cloudstate legacy TCK",l={unversionedId:"projects-functions/tck/cloudstate-tck",id:"projects-functions/tck/cloudstate-tck",isDocsHomePage:!1,title:"Cloudstate legacy TCK",description:"`",source:"@site/docs/projects-functions/tck/cloudstate-tck.md",sourceDirName:"projects-functions/tck",slug:"/projects-functions/tck/cloudstate-tck",permalink:"/docs/projects-functions/tck/cloudstate-tck",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/docs/projects-functions/tck/cloudstate-tck.md",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"eigrSidebar",previous:{title:"Introduction",permalink:"/docs/projects-functions/tck/introdution"},next:{title:"Astreu",permalink:"/docs/projects-other/eigr-astreu"}},s=[{value:"cloudstate-tck",id:"cloudstate-tck",children:[]},{value:"cloudstate-proxy-core",id:"cloudstate-proxy-core",children:[]}],p={toc:s};function d(t){var e=t.components,r=(0,o.Z)(t,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cloudstate-legacy-tck"},"Cloudstate legacy TCK"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551                                       \u2551\n\u2551             user function             \u2551\n\u2551                                       \u2551\n\u2551      gcr.io/eigr-io/eigr-go-tck       \u2551\n\u2551                                       \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2566\u2550\u255d\n                            \u2502PORT 8080\u2502  \n                            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n                                 \u25b2       \n                                 \u2502       \n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551                                       \u2551\n\u2551                  tck                  \u2551\n\u2551                                       \u2551\n\u2551     gcr.io/eigr-io/cloudstate-tck     \u2551\n\u2551                                       \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2566\u2550\u255d\n        \u2502                   \u2502PORT 8090\u2502  \n        \u25bc                   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                   \u25b2       \n   \u2502PORT 9000\u2502                   \u2502       \n\u2554\u2550\u2550\u2569\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551                                       \u2551\n\u2551                 proxy                 \u2551\n\u2551                                       \u2551\n\u2551 gcr.io/eigr-io/cloudstate-proxy-core  \u2551\n\u2551                                       \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n")),(0,c.kt)("h1",{id:"cloudstate-images"},"Cloudstate Images"),(0,c.kt)("p",null,"Cloudstate container images have been preserved to set a baseline to run the latest state of Cloudstate."),(0,c.kt)("h2",{id:"cloudstate-tck"},"cloudstate-tck"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"cloudstateio/cloudstate-tck:lastest"),(0,c.kt)("li",{parentName:"ul"},"gcr.io/eigr-io/cloudstate-tck:latest"),(0,c.kt)("li",{parentName:"ul"},"cloudstateio/cloudstate-tck:0.6.0"),(0,c.kt)("li",{parentName:"ul"},"gcr.io/eigr-io/cloudstate-tck:0.6.0")),(0,c.kt)("h2",{id:"cloudstate-proxy-core"},"cloudstate-proxy-core"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"cloudstateio/cloudstate-proxy-core:latest"),(0,c.kt)("li",{parentName:"ul"},"gcr.io/eigr-io/cloudstate-proxy-core:latest"),(0,c.kt)("li",{parentName:"ul"},"cloudstateio/cloudstate-proxy-core:0.6.0"),(0,c.kt)("li",{parentName:"ul"},"gcr.io/eigr-io/cloudstate-proxy-core:0.6.0")))}d.isMDXComponent=!0}}]);