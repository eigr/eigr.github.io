"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[8065],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=i(n),p=l,s=m["".concat(c,".").concat(p)]||m[p]||f[p]||a;return n?r.createElement(s,u(u({ref:t},d),{},{components:n})):r.createElement(s,u({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return d},default:function(){return m}});var r=n(3117),l=n(102),a=(n(7294),n(3905)),u=(n(9652),["components"]),o={title:"entity_key.proto",hide_title:!0},c=void 0,i={unversionedId:"cloudstate/entity_key.proto",id:"cloudstate/entity_key.proto",title:"entity_key.proto",description:"entity_key.proto",source:"@site/protodocs/cloudstate/entity_key.proto.mdx",sourceDirName:"cloudstate",slug:"/cloudstate/entity_key.proto",permalink:"/protodocs/cloudstate/entity_key.proto",tags:[],version:"current",frontMatter:{title:"entity_key.proto",hide_title:!0},sidebar:"protodocs",next:{title:"eventing.proto",permalink:"/protodocs/cloudstate/eventing.proto"}},d=[{value:"<code>entity_key.proto</code>",id:"entity_keyproto",children:[],level:2}],f={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"entity_keyproto"},(0,a.kt)("inlineCode",{parentName:"h2"},"entity_key.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," cloudstate/entity_key.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," cloudstate")),(0,a.kt)("hr",null))}m.isMDXComponent=!0},9652:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var l=r(n(7294)),a=r(n(9960)),u={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Number"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.values.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement("code",null,e.number)),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("th",{style:u},"Method"),l.default.createElement("td",null,l.default.createElement("code",null,t.name))),l.default.createElement("tr",null,l.default.createElement("th",{style:u},"Request"),l.default.createElement("td",null,l.default.createElement(a.default,{to:t.requestTypeLink},l.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:u},"Response"),l.default.createElement("td",null,l.default.createElement(a.default,{to:t.responseTypeLink},l.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:u},"Description"),l.default.createElement("td",null,t.description))))};var o=function(e){var n=e.methods;return l.default.createElement(l.default.Fragment,null,n.map((function(e,n){return l.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(o,{methods:t.methods}))};var c=function(e){var t=e.fields,n=function(e){var t=e.field,n=l.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.default.createElement(a.default,{to:t.typeLink},n)};return l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Type"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement(n,{field:e})),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(c,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,r=e.components;return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.h1,null,n.name),l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return l.default.createElement(t.ProtoMessage,{message:e,key:n})})))}}}]);