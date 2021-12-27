"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[8228],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(f,a(a({ref:t},i),{},{components:n})):o.createElement(f,a({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var o=n(3117),l=n(102),r=(n(7294),n(3905)),a=n(9652),s=["components"],u={title:"event_sourced.proto",hide_title:!0},d=void 0,i={unversionedId:"cloudstate/event_sourced.proto",id:"cloudstate/event_sourced.proto",title:"event_sourced.proto",description:"event_sourced.proto",source:"@site/protodocs/cloudstate/event_sourced.proto.mdx",sourceDirName:"cloudstate",slug:"/cloudstate/event_sourced.proto",permalink:"/protodocs/cloudstate/event_sourced.proto",tags:[],version:"current",frontMatter:{title:"event_sourced.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"entity.proto",permalink:"/protodocs/cloudstate/entity.proto"},next:{title:"value_entity.proto",permalink:"/protodocs/cloudstate/value_entity.proto"}},c=[{value:"<code>event_sourced.proto</code>",id:"event_sourcedproto",children:[],level:2},{value:"Messages",id:"messages",children:[{value:"<code>EventSourcedEvent</code>",id:"eventsourcedevent",children:[],level:3},{value:"<code>EventSourcedInit</code>",id:"eventsourcedinit",children:[],level:3},{value:"<code>EventSourcedReply</code>",id:"eventsourcedreply",children:[],level:3},{value:"<code>EventSourcedSnapshot</code>",id:"eventsourcedsnapshot",children:[],level:3},{value:"<code>EventSourcedStreamIn</code>",id:"eventsourcedstreamin",children:[],level:3},{value:"<code>EventSourcedStreamOut</code>",id:"eventsourcedstreamout",children:[],level:3}],level:2},{value:"Services",id:"services",children:[{value:"<code>EventSourced</code>",id:"eventsourced",children:[{value:"<code>handle</code>",id:"handle",children:[],level:4}],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"event_sourcedproto"},(0,r.kt)("inlineCode",{parentName:"h2"},"event_sourced.proto")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," cloudstate/event_sourced.proto")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," cloudstate.eventsourced")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"eventsourcedevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedEvent")),(0,r.kt)(a.ProtoMessage,{key:0,message:{name:"EventSourcedEvent",longName:"EventSourcedEvent",fullName:"cloudstate.eventsourced.EventSourcedEvent",description:"An event. These will be sent to the entity when the entity starts up.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"sequence",description:"The sequence number of the event.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"payload",description:"The event payload.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"eventsourcedinit"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedInit")),(0,r.kt)(a.ProtoMessage,{key:1,message:{name:"EventSourcedInit",longName:"EventSourcedInit",fullName:"cloudstate.eventsourced.EventSourcedInit",description:"The init message. This will always be the first message sent to the entity when\nit is loaded.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:"",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"entity_id",description:"The ID of the entity.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"If present the entity should initialise its state using this snapshot.",label:"",type:"EventSourcedSnapshot",longType:"EventSourcedSnapshot",fullType:"cloudstate.eventsourced.EventSourcedSnapshot",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedsnapshot"}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"eventsourcedreply"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedReply")),(0,r.kt)(a.ProtoMessage,{key:2,message:{name:"EventSourcedReply",longName:"EventSourcedReply",fullName:"cloudstate.eventsourced.EventSourcedReply",description:"A reply to a command.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"command_id",description:"The id of the command being replied to. Must match the input command.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"client_action",description:"The action to take",label:"",type:"ClientAction",longType:"cloudstate.ClientAction",fullType:"cloudstate.ClientAction",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#clientaction"},{name:"side_effects",description:"Any side effects to perform",label:"repeated",type:"SideEffect",longType:"cloudstate.SideEffect",fullType:"cloudstate.SideEffect",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#sideeffect"},{name:"events",description:"A list of events to persist - these will be persisted before the reply\nis sent.",label:"repeated",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"An optional snapshot to persist. It is assumed that this snapshot will have\nthe state of any events in the events field applied to it. It is illegal to\nsend a snapshot without sending any events.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"eventsourcedsnapshot"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedSnapshot")),(0,r.kt)(a.ProtoMessage,{key:3,message:{name:"EventSourcedSnapshot",longName:"EventSourcedSnapshot",fullName:"cloudstate.eventsourced.EventSourcedSnapshot",description:"A snapshot",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"snapshot_sequence",description:"The sequence number when the snapshot was taken.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"The snapshot.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"eventsourcedstreamin"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedStreamIn")),(0,r.kt)(a.ProtoMessage,{key:4,message:{name:"EventSourcedStreamIn",longName:"EventSourcedStreamIn",fullName:"cloudstate.eventsourced.EventSourcedStreamIn",description:"Input message type for the gRPC stream in.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"init",description:"",label:"",type:"EventSourcedInit",longType:"EventSourcedInit",fullType:"cloudstate.eventsourced.EventSourcedInit",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedinit"},{name:"event",description:"",label:"",type:"EventSourcedEvent",longType:"EventSourcedEvent",fullType:"cloudstate.eventsourced.EventSourcedEvent",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedevent"},{name:"command",description:"",label:"",type:"Command",longType:"cloudstate.Command",fullType:"cloudstate.Command",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#command"}]},mdxType:"ProtoMessage"}),(0,r.kt)("h3",{id:"eventsourcedstreamout"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourcedStreamOut")),(0,r.kt)(a.ProtoMessage,{key:5,message:{name:"EventSourcedStreamOut",longName:"EventSourcedStreamOut",fullName:"cloudstate.eventsourced.EventSourcedStreamOut",description:"Output message type for the gRPC stream out.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"reply",description:"",label:"",type:"EventSourcedReply",longType:"EventSourcedReply",fullType:"cloudstate.eventsourced.EventSourcedReply",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedreply"},{name:"failure",description:"",label:"",type:"Failure",longType:"cloudstate.Failure",fullType:"cloudstate.Failure",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#failure"}]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"services"},"Services"),(0,r.kt)("h3",{id:"eventsourced"},(0,r.kt)("inlineCode",{parentName:"h3"},"EventSourced")),(0,r.kt)("p",null,"The Entity service"),(0,r.kt)("h4",{id:"handle"},(0,r.kt)("inlineCode",{parentName:"h4"},"handle")),(0,r.kt)(a.ProtoServiceMethod,{key:"handle-0",method:{name:"handle",description:"The stream. One stream will be established per active entity.\nOnce established, the first message sent will be Init, which contains the entity ID, and,\nif the entity has previously persisted a snapshot, it will contain that snapshot. It will\nthen send zero to many event messages, one for each event previously persisted. The entity\nis expected to apply these to its state in a deterministic fashion. Once all the events\nare sent, one to many commands are sent, with new commands being sent as new requests for\nthe entity come in. The entity is expected to reply to each command with exactly one reply\nmessage. The entity should reply in order, and any events that the entity requests to be\npersisted the entity should handle itself, applying them to its own state, as if they had\narrived as events when the event stream was being replayed on load.",requestType:"EventSourcedStreamIn",requestLongType:"EventSourcedStreamIn",requestFullType:"cloudstate.eventsourced.EventSourcedStreamIn",requestStreaming:!0,responseType:"EventSourcedStreamOut",responseLongType:"EventSourcedStreamOut",responseFullType:"cloudstate.eventsourced.EventSourcedStreamOut",responseStreaming:!0,requestTypeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedstreamin",responseTypeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedstreamout"},mdxType:"ProtoServiceMethod"}),(0,r.kt)("hr",null))}m.isMDXComponent=!0},9652:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var l=o(n(7294)),r=o(n(9960)),a={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Number"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.values.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement("code",null,e.number)),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("th",{style:a},"Method"),l.default.createElement("td",null,l.default.createElement("code",null,t.name))),l.default.createElement("tr",null,l.default.createElement("th",{style:a},"Request"),l.default.createElement("td",null,l.default.createElement(r.default,{to:t.requestTypeLink},l.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:a},"Response"),l.default.createElement("td",null,l.default.createElement(r.default,{to:t.responseTypeLink},l.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:a},"Description"),l.default.createElement("td",null,t.description))))};var s=function(e){var n=e.methods;return l.default.createElement(l.default.Fragment,null,n.map((function(e,n){return l.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(s,{methods:t.methods}))};var u=function(e){var t=e.fields,n=function(e){var t=e.field,n=l.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.default.createElement(r.default,{to:t.typeLink},n)};return l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Type"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement(n,{field:e})),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(u,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,o=e.components;return l.default.createElement(l.default.Fragment,null,l.default.createElement(o.h1,null,n.name),l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return l.default.createElement(t.ProtoMessage,{message:e,key:n})})))}}}]);