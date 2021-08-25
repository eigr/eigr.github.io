"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[8228],{1246:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=o(7462),s=o(3366),a=(o(7294),o(3905)),i=o(9652),d=["components"],r={title:"event_sourced.proto",hide_title:!0},l=void 0,u={unversionedId:"cloudstate/event_sourced.proto",id:"cloudstate/event_sourced.proto",isDocsHomePage:!1,title:"event_sourced.proto",description:"event_sourced.proto",source:"@site/protodocs/cloudstate/event_sourced.proto.mdx",sourceDirName:"cloudstate",slug:"/cloudstate/event_sourced.proto",permalink:"/protodocs/cloudstate/event_sourced.proto",version:"current",frontMatter:{title:"event_sourced.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"entity.proto",permalink:"/protodocs/cloudstate/entity.proto"},next:{title:"value_entity.proto",permalink:"/protodocs/cloudstate/value_entity.proto"}},c=[{value:"<code>event_sourced.proto</code>",id:"event_sourcedproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>EventSourcedEvent</code>",id:"eventsourcedevent",children:[]},{value:"<code>EventSourcedInit</code>",id:"eventsourcedinit",children:[]},{value:"<code>EventSourcedReply</code>",id:"eventsourcedreply",children:[]},{value:"<code>EventSourcedSnapshot</code>",id:"eventsourcedsnapshot",children:[]},{value:"<code>EventSourcedStreamIn</code>",id:"eventsourcedstreamin",children:[]},{value:"<code>EventSourcedStreamOut</code>",id:"eventsourcedstreamout",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>EventSourced</code>",id:"eventsourced",children:[]}]}],p={toc:c};function m(e){var t=e.components,o=(0,s.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event_sourcedproto"},(0,a.kt)("inlineCode",{parentName:"h2"},"event_sourced.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," cloudstate/event_sourced.proto")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," cloudstate.eventsourced")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"eventsourcedevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedEvent")),(0,a.kt)(i.ProtoMessage,{key:0,message:{name:"EventSourcedEvent",longName:"EventSourcedEvent",fullName:"cloudstate.eventsourced.EventSourcedEvent",description:"An event. These will be sent to the entity when the entity starts up.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"sequence",description:"The sequence number of the event.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"payload",description:"The event payload.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"eventsourcedinit"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedInit")),(0,a.kt)(i.ProtoMessage,{key:1,message:{name:"EventSourcedInit",longName:"EventSourcedInit",fullName:"cloudstate.eventsourced.EventSourcedInit",description:"The init message. This will always be the first message sent to the entity when\nit is loaded.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:"",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"entity_id",description:"The ID of the entity.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"If present the entity should initialise its state using this snapshot.",label:"",type:"EventSourcedSnapshot",longType:"EventSourcedSnapshot",fullType:"cloudstate.eventsourced.EventSourcedSnapshot",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedsnapshot"}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"eventsourcedreply"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedReply")),(0,a.kt)(i.ProtoMessage,{key:2,message:{name:"EventSourcedReply",longName:"EventSourcedReply",fullName:"cloudstate.eventsourced.EventSourcedReply",description:"A reply to a command.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"command_id",description:"The id of the command being replied to. Must match the input command.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"client_action",description:"The action to take",label:"",type:"ClientAction",longType:"cloudstate.ClientAction",fullType:"cloudstate.ClientAction",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#clientaction"},{name:"side_effects",description:"Any side effects to perform",label:"repeated",type:"SideEffect",longType:"cloudstate.SideEffect",fullType:"cloudstate.SideEffect",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#sideeffect"},{name:"events",description:"A list of events to persist - these will be persisted before the reply\nis sent.",label:"repeated",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"An optional snapshot to persist. It is assumed that this snapshot will have\nthe state of any events in the events field applied to it. It is illegal to\nsend a snapshot without sending any events.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"eventsourcedsnapshot"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedSnapshot")),(0,a.kt)(i.ProtoMessage,{key:3,message:{name:"EventSourcedSnapshot",longName:"EventSourcedSnapshot",fullName:"cloudstate.eventsourced.EventSourcedSnapshot",description:"A snapshot",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"snapshot_sequence",description:"The sequence number when the snapshot was taken.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"snapshot",description:"The snapshot.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"eventsourcedstreamin"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedStreamIn")),(0,a.kt)(i.ProtoMessage,{key:4,message:{name:"EventSourcedStreamIn",longName:"EventSourcedStreamIn",fullName:"cloudstate.eventsourced.EventSourcedStreamIn",description:"Input message type for the gRPC stream in.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"init",description:"",label:"",type:"EventSourcedInit",longType:"EventSourcedInit",fullType:"cloudstate.eventsourced.EventSourcedInit",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedinit"},{name:"event",description:"",label:"",type:"EventSourcedEvent",longType:"EventSourcedEvent",fullType:"cloudstate.eventsourced.EventSourcedEvent",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedevent"},{name:"command",description:"",label:"",type:"Command",longType:"cloudstate.Command",fullType:"cloudstate.Command",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#command"}]},mdxType:"ProtoMessage"}),(0,a.kt)("h3",{id:"eventsourcedstreamout"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourcedStreamOut")),(0,a.kt)(i.ProtoMessage,{key:5,message:{name:"EventSourcedStreamOut",longName:"EventSourcedStreamOut",fullName:"cloudstate.eventsourced.EventSourcedStreamOut",description:"Output message type for the gRPC stream out.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"reply",description:"",label:"",type:"EventSourcedReply",longType:"EventSourcedReply",fullType:"cloudstate.eventsourced.EventSourcedReply",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedreply"},{name:"failure",description:"",label:"",type:"Failure",longType:"cloudstate.Failure",fullType:"cloudstate.Failure",ismap:!1,isoneof:!0,oneofdecl:"message",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#failure"}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("h3",{id:"eventsourced"},(0,a.kt)("inlineCode",{parentName:"h3"},"EventSourced")),(0,a.kt)("p",null,"The Entity service"),(0,a.kt)("h4",{id:"handle"},(0,a.kt)("inlineCode",{parentName:"h4"},"handle")),(0,a.kt)(i.ProtoServiceMethod,{key:"handle-0",method:{name:"handle",description:"The stream. One stream will be established per active entity.\nOnce established, the first message sent will be Init, which contains the entity ID, and,\nif the entity has previously persisted a snapshot, it will contain that snapshot. It will\nthen send zero to many event messages, one for each event previously persisted. The entity\nis expected to apply these to its state in a deterministic fashion. Once all the events\nare sent, one to many commands are sent, with new commands being sent as new requests for\nthe entity come in. The entity is expected to reply to each command with exactly one reply\nmessage. The entity should reply in order, and any events that the entity requests to be\npersisted the entity should handle itself, applying them to its own state, as if they had\narrived as events when the event stream was being replayed on load.",requestType:"EventSourcedStreamIn",requestLongType:"EventSourcedStreamIn",requestFullType:"cloudstate.eventsourced.EventSourcedStreamIn",requestStreaming:!0,responseType:"EventSourcedStreamOut",responseLongType:"EventSourcedStreamOut",responseFullType:"cloudstate.eventsourced.EventSourcedStreamOut",responseStreaming:!0,requestTypeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedstreamin",responseTypeLink:"/protodocs/cloudstate/event_sourced.proto#eventsourcedstreamout"},mdxType:"ProtoServiceMethod"}),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);