"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[6800],{1852:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return y},toc:function(){return r},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(9652),s=["components"],u={title:"value_entity.proto",hide_title:!0},d=void 0,y={unversionedId:"cloudstate/value_entity.proto",id:"cloudstate/value_entity.proto",isDocsHomePage:!1,title:"value_entity.proto",description:"value_entity.proto",source:"@site/protodocs/cloudstate/value_entity.proto.mdx",sourceDirName:"cloudstate",slug:"/cloudstate/value_entity.proto",permalink:"/protodocs/cloudstate/value_entity.proto",version:"current",frontMatter:{title:"value_entity.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"event_sourced.proto",permalink:"/protodocs/cloudstate/event_sourced.proto"},next:{title:"annotations.proto",permalink:"/protodocs/google/api/annotations.proto"}},r=[{value:"<code>value_entity.proto</code>",id:"value_entityproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>ValueEntityAction</code>",id:"valueentityaction",children:[]},{value:"<code>ValueEntityDelete</code>",id:"valueentitydelete",children:[]},{value:"<code>ValueEntityInit</code>",id:"valueentityinit",children:[]},{value:"<code>ValueEntityInitState</code>",id:"valueentityinitstate",children:[]},{value:"<code>ValueEntityReply</code>",id:"valueentityreply",children:[]},{value:"<code>ValueEntityStreamIn</code>",id:"valueentitystreamin",children:[]},{value:"<code>ValueEntityStreamOut</code>",id:"valueentitystreamout",children:[]},{value:"<code>ValueEntityUpdate</code>",id:"valueentityupdate",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>ValueEntity</code>",id:"valueentity",children:[]}]}],p={toc:r};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"value_entityproto"},(0,o.kt)("inlineCode",{parentName:"h2"},"value_entity.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," cloudstate/value_entity.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," cloudstate.valueentity")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"valueentityaction"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityAction")),(0,o.kt)(l.ProtoMessage,{key:0,message:{name:"ValueEntityAction",longName:"ValueEntityAction",fullName:"cloudstate.valueentity.ValueEntityAction",description:"An action to take for changing the entity state.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"update",description:"",label:"",type:"ValueEntityUpdate",longType:"ValueEntityUpdate",fullType:"cloudstate.valueentity.ValueEntityUpdate",ismap:!1,isoneof:!0,oneofdecl:"action",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentityupdate"},{name:"delete",description:"",label:"",type:"ValueEntityDelete",longType:"ValueEntityDelete",fullType:"cloudstate.valueentity.ValueEntityDelete",ismap:!1,isoneof:!0,oneofdecl:"action",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentitydelete"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentitydelete"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityDelete")),(0,o.kt)(l.ProtoMessage,{key:1,message:{name:"ValueEntityDelete",longName:"ValueEntityDelete",fullName:"cloudstate.valueentity.ValueEntityDelete",description:"An action which deletes the persisted value of the Value entity.",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentityinit"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityInit")),(0,o.kt)(l.ProtoMessage,{key:2,message:{name:"ValueEntityInit",longName:"ValueEntityInit",fullName:"cloudstate.valueentity.ValueEntityInit",description:"The init message. This will always be the first message sent to the entity when it is loaded.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:"The name of the service that implements this entity.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"entity_id",description:"The id of the entity.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"state",description:"The initial state of the entity.",label:"",type:"ValueEntityInitState",longType:"ValueEntityInitState",fullType:"cloudstate.valueentity.ValueEntityInitState",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentityinitstate"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentityinitstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityInitState")),(0,o.kt)(l.ProtoMessage,{key:3,message:{name:"ValueEntityInitState",longName:"ValueEntityInitState",fullName:"cloudstate.valueentity.ValueEntityInitState",description:"The state of the entity when it is first activated.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"value",description:"The value of the entity state, if the entity has already been created.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentityreply"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityReply")),(0,o.kt)(l.ProtoMessage,{key:4,message:{name:"ValueEntityReply",longName:"ValueEntityReply",fullName:"cloudstate.valueentity.ValueEntityReply",description:"A reply to a command.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"command_id",description:"The command being replied to",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"client_action",description:"The action to take for the client response",label:"",type:"ClientAction",longType:"cloudstate.ClientAction",fullType:"cloudstate.ClientAction",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#clientaction"},{name:"side_effects",description:"Any side effects to perform",label:"repeated",type:"SideEffect",longType:"cloudstate.SideEffect",fullType:"cloudstate.SideEffect",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#sideeffect"},{name:"state_action",description:"The action to take on the value entity",label:"",type:"ValueEntityAction",longType:"ValueEntityAction",fullType:"cloudstate.valueentity.ValueEntityAction",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentityaction"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentitystreamin"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityStreamIn")),(0,o.kt)(l.ProtoMessage,{key:5,message:{name:"ValueEntityStreamIn",longName:"ValueEntityStreamIn",fullName:"cloudstate.valueentity.ValueEntityStreamIn",description:"Input message type for the gRPC stream in.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"init",description:"",label:"",type:"ValueEntityInit",longType:"ValueEntityInit",fullType:"cloudstate.valueentity.ValueEntityInit",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentityinit"},{name:"command",description:"",label:"",type:"Command",longType:"cloudstate.Command",fullType:"cloudstate.Command",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#command"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentitystreamout"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityStreamOut")),(0,o.kt)(l.ProtoMessage,{key:6,message:{name:"ValueEntityStreamOut",longName:"ValueEntityStreamOut",fullName:"cloudstate.valueentity.ValueEntityStreamOut",description:"Output message type for the gRPC stream out.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"reply",description:"",label:"",type:"ValueEntityReply",longType:"ValueEntityReply",fullType:"cloudstate.valueentity.ValueEntityReply",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/value_entity.proto#valueentityreply"},{name:"failure",description:"",label:"",type:"Failure",longType:"cloudstate.Failure",fullType:"cloudstate.Failure",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#failure"}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"valueentityupdate"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntityUpdate")),(0,o.kt)(l.ProtoMessage,{key:7,message:{name:"ValueEntityUpdate",longName:"ValueEntityUpdate",fullName:"cloudstate.valueentity.ValueEntityUpdate",description:"An action which updates the persisted value of the Value entity. If the entity is not yet persisted, it will be created.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"value",description:"The value to set.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("h3",{id:"valueentity"},(0,o.kt)("inlineCode",{parentName:"h3"},"ValueEntity")),(0,o.kt)("p",null,"The Value Entity service"),(0,o.kt)("h4",{id:"handle"},(0,o.kt)("inlineCode",{parentName:"h4"},"handle")),(0,o.kt)(l.ProtoServiceMethod,{key:"handle-0",method:{name:"handle",description:"One stream will be established per active entity.\nOnce established, the first message sent will be Init, which contains the entity ID, and,\na state if the entity has previously persisted one. Once the Init message is sent, one to\nmany commands are sent to the entity. Each request coming in leads to a new command being sent\nto the entity. The entity is expected to reply to each command with exactly one reply message.\nThe entity should process commands and reply to commands in the order they came\nin. When processing a command the entity can read and persist (update or delete) the state.",requestType:"ValueEntityStreamIn",requestLongType:"ValueEntityStreamIn",requestFullType:"cloudstate.valueentity.ValueEntityStreamIn",requestStreaming:!0,responseType:"ValueEntityStreamOut",responseLongType:"ValueEntityStreamOut",responseFullType:"cloudstate.valueentity.ValueEntityStreamOut",responseStreaming:!0,requestTypeLink:"/protodocs/cloudstate/value_entity.proto#valueentitystreamin",responseTypeLink:"/protodocs/cloudstate/value_entity.proto#valueentitystreamout"},mdxType:"ProtoServiceMethod"}),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);