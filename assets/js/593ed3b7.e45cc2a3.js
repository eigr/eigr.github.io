"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[7010],{1488:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return y}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),s=o(9652),r=["components"],l={title:"entity.proto",hide_title:!0},d=void 0,p={unversionedId:"cloudstate/entity.proto",id:"cloudstate/entity.proto",isDocsHomePage:!1,title:"entity.proto",description:"entity.proto",source:"@site/protodocs/cloudstate/entity.proto.mdx",sourceDirName:"cloudstate",slug:"/cloudstate/entity.proto",permalink:"/protodocs/cloudstate/entity.proto",tags:[],version:"current",frontMatter:{title:"entity.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"crdt.proto",permalink:"/protodocs/cloudstate/crdt.proto"},next:{title:"event_sourced.proto",permalink:"/protodocs/cloudstate/event_sourced.proto"}},c=[{value:"<code>entity.proto</code>",id:"entityproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>ClientAction</code>",id:"clientaction",children:[]},{value:"<code>Command</code>",id:"command",children:[]},{value:"<code>Entity</code>",id:"entity",children:[]},{value:"<code>EntityPassivationStrategy</code>",id:"entitypassivationstrategy",children:[]},{value:"<code>EntitySpec</code>",id:"entityspec",children:[]},{value:"<code>Failure</code>",id:"failure",children:[]},{value:"<code>Forward</code>",id:"forward",children:[]},{value:"<code>Metadata</code>",id:"metadata",children:[]},{value:"<code>MetadataEntry</code>",id:"metadataentry",children:[]},{value:"<code>ProxyInfo</code>",id:"proxyinfo",children:[]},{value:"<code>Reply</code>",id:"reply",children:[]},{value:"<code>ServiceInfo</code>",id:"serviceinfo",children:[]},{value:"<code>SideEffect</code>",id:"sideeffect",children:[]},{value:"<code>StreamCancelled</code>",id:"streamcancelled",children:[]},{value:"<code>TimeoutPassivationStrategy</code>",id:"timeoutpassivationstrategy",children:[]},{value:"<code>UserFunctionError</code>",id:"userfunctionerror",children:[]}]},{value:"Services",id:"services",children:[{value:"<code>EntityDiscovery</code>",id:"entitydiscovery",children:[]}]}],u={toc:c};function y(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"entityproto"},(0,i.kt)("inlineCode",{parentName:"h2"},"entity.proto")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"path")," cloudstate/entity.proto")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"package")," cloudstate")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"clientaction"},(0,i.kt)("inlineCode",{parentName:"h3"},"ClientAction")),(0,i.kt)(s.ProtoMessage,{key:0,message:{name:"ClientAction",longName:"ClientAction",fullName:"cloudstate.ClientAction",description:"An action for the client",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"reply",description:"Send a reply",label:"",type:"Reply",longType:"Reply",fullType:"cloudstate.Reply",ismap:!1,isoneof:!0,oneofdecl:"action",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#reply"},{name:"forward",description:"Forward to another entity",label:"",type:"Forward",longType:"Forward",fullType:"cloudstate.Forward",ismap:!1,isoneof:!0,oneofdecl:"action",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#forward"},{name:"failure",description:"Send a failure to the client",label:"",type:"Failure",longType:"Failure",fullType:"cloudstate.Failure",ismap:!1,isoneof:!0,oneofdecl:"action",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#failure"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"command"},(0,i.kt)("inlineCode",{parentName:"h3"},"Command")),(0,i.kt)(s.ProtoMessage,{key:1,message:{name:"Command",longName:"Command",fullName:"cloudstate.Command",description:"A command. For each command received, a reply must be sent with a matching command id.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"entity_id",description:"The ID of the entity.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"id",description:"A command id.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"name",description:"Command name",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"payload",description:"The command payload.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"streamed",description:"Whether the command is streamed or not.",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"metadata",description:"The command metadata.\n\nNot all transports support per message metadata, for example, gRPC doesn't. The Cloudstate proxy MAY include\nmetadata from other locations in this case, for example, in gRPC, a unary call MAY have the HTTP request headers\nattached to the command, while a streamed call MAY have the HTTP request headers attached as the metadata for\neither the first command, or every command. This specification leaves this behavior undefined.",label:"",type:"Metadata",longType:"Metadata",fullType:"cloudstate.Metadata",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#metadata"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"entity"},(0,i.kt)("inlineCode",{parentName:"h3"},"Entity")),(0,i.kt)(s.ProtoMessage,{key:2,message:{name:"Entity",longName:"Entity",fullName:"cloudstate.Entity",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"entity_type",description:"The type of entity. By convention, this should be a fully qualified entity protocol grpc\nservice name, for example, cloudstate.eventsourced.EventSourced.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"service_name",description:"The name of the service to load from the protobuf file.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"persistence_id",description:"The ID to namespace state by. How this is used depends on the type of entity, for example,\nevent sourced entities will prefix this to the persistence id.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"passivation_strategy",description:"The passivation strategy for the entity.",label:"",type:"EntityPassivationStrategy",longType:"EntityPassivationStrategy",fullType:"cloudstate.EntityPassivationStrategy",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#entitypassivationstrategy"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"entitypassivationstrategy"},(0,i.kt)("inlineCode",{parentName:"h3"},"EntityPassivationStrategy")),(0,i.kt)(s.ProtoMessage,{key:3,message:{name:"EntityPassivationStrategy",longName:"EntityPassivationStrategy",fullName:"cloudstate.EntityPassivationStrategy",description:"The semantics is to provide a flexible way for entity user functions to configure the passivation strategy.\nThis strategy is sent to the proxy at discovery time allowing the proxy to configure the corresponding entities.\nThe only passivation strategy supported is the timeout strategy and configuring this is optional for the entity.\nIf an entity user function does not configure the passivation strategy the proxy uses its fallback default value.\n\nThe passivation strategy for the entity user function.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"timeout",description:"the timeout passivation strategy.",label:"",type:"TimeoutPassivationStrategy",longType:"TimeoutPassivationStrategy",fullType:"cloudstate.TimeoutPassivationStrategy",ismap:!1,isoneof:!0,oneofdecl:"strategy",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#timeoutpassivationstrategy"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"entityspec"},(0,i.kt)("inlineCode",{parentName:"h3"},"EntitySpec")),(0,i.kt)(s.ProtoMessage,{key:4,message:{name:"EntitySpec",longName:"EntitySpec",fullName:"cloudstate.EntitySpec",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"proto",description:"This should be the Descriptors.FileDescriptorSet in proto serialized from as generated by:\nprotoc --include_imports \\\n--proto_path=<proto file directory> \\\n--descriptor_set_out=user-function.desc \\\n<path to .proto files>",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"entities",description:"The entities being served.",label:"repeated",type:"Entity",longType:"Entity",fullType:"cloudstate.Entity",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#entity"},{name:"service_info",description:"Optional information about the service.",label:"",type:"ServiceInfo",longType:"ServiceInfo",fullType:"cloudstate.ServiceInfo",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#serviceinfo"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"failure"},(0,i.kt)("inlineCode",{parentName:"h3"},"Failure")),(0,i.kt)(s.ProtoMessage,{key:5,message:{name:"Failure",longName:"Failure",fullName:"cloudstate.Failure",description:"A failure reply. If this is returned, it will be translated into a gRPC unknown\nerror with the corresponding description if supplied.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"command_id",description:"The id of the command being replied to. Must match the input command.",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"description",description:"A description of the error.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"restart",description:"Whether this failure should trigger an entity restart.",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"forward"},(0,i.kt)("inlineCode",{parentName:"h3"},"Forward")),(0,i.kt)(s.ProtoMessage,{key:6,message:{name:"Forward",longName:"Forward",fullName:"cloudstate.Forward",description:"Forwards handling of this request to another entity.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:"The name of the service to forward to.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"command_name",description:"The name of the command.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"payload",description:"The payload.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"metadata",description:"The metadata to include with the forward",label:"",type:"Metadata",longType:"Metadata",fullType:"cloudstate.Metadata",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#metadata"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"metadata"},(0,i.kt)("inlineCode",{parentName:"h3"},"Metadata")),(0,i.kt)(s.ProtoMessage,{key:7,message:{name:"Metadata",longName:"Metadata",fullName:"cloudstate.Metadata",description:"Transport-specific metadata associated with a message.\n\nThe semantics of the metadata are not defined in this protocol, but rather, depend on the transport on which a\nparticular instance of the metadata maps to. What keys or values are allowed or disallowed, whether duplicate values\nfor the same key are allowed and how they are handled, and whether key names are case sensitive or not, are all\nundefined in the context of the Cloudstate protocol.\n\nIf a metadata entry associated with a message can't be expressed in an underlying transport, for example, due to\ninvalid characters in a key or value, the behavior of the proxy is undefined. This is because metadata is transport\nspecific, so if the user function chooses to use metadata, it is choosing to be specific to a particular transport,\nwhich is beyond the scope of the Cloudstate protocol, and it's therefore the user function's responsibility to adhere\nto the semantics of that transport. The proxy MAY decide to drop metadata entries if it knows they are invalid or\nunsupported. If a metadata entry is dropped, the proxy MAY inform the user function that the entry was dropped by\nsending an error message to the EntityDiscovery.ReportError gRPC call.\n\nThe metadata MAY also contain CloudEvent metadata. If a message comes from a Cloudstate event source, the Cloudstate\nproxy MUST attach CloudEvent metadata to it if the event doesn't already have CloudEvent metadata attached to it.\nThis metadata SHALL be encoded according to the binary mode of the CloudEvent HTTP protocol binding, which can be\nfound here:\n\nhttps://github.com/cloudevents/spec/blob/master/http-protocol-binding.md\n\nThe Cloudstate proxy MAY synthesize appropriate values for Cloudstate metadata if no equivalent metadata exists in\nthe event source, for example, if there is no type, the Cloudstate proxy MAY use the name of the gRPC message as the\nCloudEvent type, and if there is no source, the Cloudstate proxy MAY use the name of the topic as the source.\n\nIf an incoming message does have CloudEvent metadata attached to it, the Cloudstate proxy MUST transcode that\nCloudEvent metadata to the HTTP protocol binding as described above.\n\nMessages sent from the user function to an event destination MAY include CloudEvent metadata. If they include any\nCloudEvent metadata, they MUST include all required CloudEvent attributes, including id, source, specversion and\ntype. The behavior of the proxy is undefined if some of these attributes, but not others, are included - the proxy\nMAY ignore them all, or MAY generate values itself, but SHOULD NOT fail sending the message. If the destination for\nthe message is an event destination, the Cloudstate proxy MUST transcode the supplied Cloudstate metadata to a\nbinding appropriate for the underlying transport for that event destination, it MUST NOT pass the CloudEvent\nmetadata as is unless the transport uses the same binding rules.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"entries",description:"The metadata entries.",label:"repeated",type:"MetadataEntry",longType:"MetadataEntry",fullType:"cloudstate.MetadataEntry",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#metadataentry"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"metadataentry"},(0,i.kt)("inlineCode",{parentName:"h3"},"MetadataEntry")),(0,i.kt)(s.ProtoMessage,{key:8,message:{name:"MetadataEntry",longName:"MetadataEntry",fullName:"cloudstate.MetadataEntry",description:"A metadata entry.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"key",description:"Key for the entry. Valid keys depend on the transport from or to which this metadata is sent.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"string_value",description:"A string value. Valid values depend on the transport from or which this metadata is sent.\n\nIf the transport does not support string values, the behavior of the Cloudstate proxy is undefined from the\npoint of view of this protocol. If there is a convention in the protocol for encoding string values as\nUTF-8 bytes, then the Cloudstate proxy MAY do that.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"value",defaultValue:""},{name:"bytes_value",description:"A bytes value. Valid values depend on the transport from or which this metadata is sent.\n\nIf the transport does not support bytes values, the behavior of the Cloudstate proxy is undefined from the\npoint of view of this protocol. If there is a convention in the protocol for encoding bytes values as\nBase64 encoded strings, then the Cloudstate proxy MAY do that.",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!0,oneofdecl:"value",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"proxyinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"ProxyInfo")),(0,i.kt)(s.ProtoMessage,{key:9,message:{name:"ProxyInfo",longName:"ProxyInfo",fullName:"cloudstate.ProxyInfo",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"protocol_major_version",description:"",label:"",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"protocol_minor_version",description:"",label:"",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"proxy_name",description:"",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"proxy_version",description:"",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"supported_entity_types",description:"",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"reply"},(0,i.kt)("inlineCode",{parentName:"h3"},"Reply")),(0,i.kt)(s.ProtoMessage,{key:10,message:{name:"Reply",longName:"Reply",fullName:"cloudstate.Reply",description:"A reply to the sender.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"payload",description:"The reply payload",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"metadata",description:"Metadata for the reply\n\nNot all transports support per message metadata, for example, gRPC doesn't. The Cloudstate proxy MAY ignore the\nmetadata in this case, or it MAY lift the metadata into another place, for example, in gRPC, a unary call MAY\nhave its reply metadata placed in the headers of the HTTP response, or the first reply to a streamed call MAY\nhave its metadata placed in the headers of the HTTP response.\n\nIf the metadata is ignored, the Cloudstate proxy MAY notify the user function by sending an error message to the\nEntityDiscovery.ReportError gRPC call.",label:"",type:"Metadata",longType:"Metadata",fullType:"cloudstate.Metadata",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#metadata"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"serviceinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"ServiceInfo")),(0,i.kt)(s.ProtoMessage,{key:11,message:{name:"ServiceInfo",longName:"ServiceInfo",fullName:"cloudstate.ServiceInfo",description:"Information about the service that proxy is proxying to.\nAll of the information in here is optional. It may be useful for debug purposes.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:'The name of the service, eg, "shopping-cart".',label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"service_version",description:"The version of the service.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"service_runtime",description:"A description of the runtime for the service. Can be anything, but examples might be:\n- node v10.15.2\n- OpenJDK Runtime Environment 1.8.0_192-b12",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"support_library_name",description:'If using a support library, the name of that library, eg "cloudstate"',label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"support_library_version",description:"The version of the support library being used.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"protocol_major_version",description:"Cloudstate protocol major version accepted by the support library.",label:"",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"protocol_minor_version",description:"Cloudstate protocol minor version accepted by the support library.",label:"",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"sideeffect"},(0,i.kt)("inlineCode",{parentName:"h3"},"SideEffect")),(0,i.kt)(s.ProtoMessage,{key:12,message:{name:"SideEffect",longName:"SideEffect",fullName:"cloudstate.SideEffect",description:"A side effect to be done after this command is handled.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"service_name",description:"The name of the service to perform the side effect on.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"command_name",description:"The name of the command.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"payload",description:"The payload of the command.",label:"",type:"Any",longType:"google.protobuf.Any",fullType:"google.protobuf.Any",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"synchronous",description:"Whether this side effect should be performed synchronously, ie, before the reply is eventually\nsent, or not.",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"metadata",description:"The metadata to include with the side effect",label:"",type:"Metadata",longType:"Metadata",fullType:"cloudstate.Metadata",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/cloudstate/entity.proto#metadata"}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"streamcancelled"},(0,i.kt)("inlineCode",{parentName:"h3"},"StreamCancelled")),(0,i.kt)(s.ProtoMessage,{key:13,message:{name:"StreamCancelled",longName:"StreamCancelled",fullName:"cloudstate.StreamCancelled",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"entity_id",description:"The ID of the entity",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"id",description:"The command id",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"timeoutpassivationstrategy"},(0,i.kt)("inlineCode",{parentName:"h3"},"TimeoutPassivationStrategy")),(0,i.kt)(s.ProtoMessage,{key:14,message:{name:"TimeoutPassivationStrategy",longName:"TimeoutPassivationStrategy",fullName:"cloudstate.TimeoutPassivationStrategy",description:"A passivation strategy based on a timeout. The idle timeout after which a user function's entity is passivated.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"timeout",description:"The timeout in millis",label:"",type:"int64",longType:"int64",fullType:"int64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("h3",{id:"userfunctionerror"},(0,i.kt)("inlineCode",{parentName:"h3"},"UserFunctionError")),(0,i.kt)(s.ProtoMessage,{key:15,message:{name:"UserFunctionError",longName:"UserFunctionError",fullName:"cloudstate.UserFunctionError",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"message",description:"",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("h3",{id:"entitydiscovery"},(0,i.kt)("inlineCode",{parentName:"h3"},"EntityDiscovery")),(0,i.kt)("p",null,"Entity discovery service."),(0,i.kt)("h4",{id:"discover"},(0,i.kt)("inlineCode",{parentName:"h4"},"discover")),(0,i.kt)(s.ProtoServiceMethod,{key:"discover-0",method:{name:"discover",description:"Discover what entities the user function wishes to serve.",requestType:"ProxyInfo",requestLongType:"ProxyInfo",requestFullType:"cloudstate.ProxyInfo",requestStreaming:!1,responseType:"EntitySpec",responseLongType:"EntitySpec",responseFullType:"cloudstate.EntitySpec",responseStreaming:!1,requestTypeLink:"/protodocs/cloudstate/entity.proto#proxyinfo",responseTypeLink:"/protodocs/cloudstate/entity.proto#entityspec"},mdxType:"ProtoServiceMethod"}),(0,i.kt)("h4",{id:"reporterror"},(0,i.kt)("inlineCode",{parentName:"h4"},"reportError")),(0,i.kt)(s.ProtoServiceMethod,{key:"reportError-1",method:{name:"reportError",description:"Report an error back to the user function. This will only be invoked to tell the user function\nthat it has done something wrong, eg, violated the protocol, tried to use an entity type that\nisn't supported, or attempted to forward to an entity that doesn't exist, etc. These messages\nshould be logged clearly for debugging purposes.",requestType:"UserFunctionError",requestLongType:"UserFunctionError",requestFullType:"cloudstate.UserFunctionError",requestStreaming:!1,responseType:"Empty",responseLongType:".google.protobuf.Empty",responseFullType:"google.protobuf.Empty",responseStreaming:!1,requestTypeLink:"/protodocs/cloudstate/entity.proto#userfunctionerror"},mdxType:"ProtoServiceMethod"}),(0,i.kt)("hr",null))}y.isMDXComponent=!0}}]);