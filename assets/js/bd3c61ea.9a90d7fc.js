"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[5421],{3472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return g},default:function(){return m}});var s=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9652),r=["components"],p={title:"http.proto",hide_title:!0},l=void 0,d={unversionedId:"google/api/http.proto",id:"google/api/http.proto",isDocsHomePage:!1,title:"http.proto",description:"http.proto",source:"@site/protodocs/google/api/http.proto.mdx",sourceDirName:"google/api",slug:"/google/api/http.proto",permalink:"/protodocs/google/api/http.proto",tags:[],version:"current",frontMatter:{title:"http.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"annotations.proto",permalink:"/protodocs/google/api/annotations.proto"},next:{title:"httpbody.proto",permalink:"/protodocs/google/api/httpbody.proto"}},g=[{value:"<code>http.proto</code>",id:"httpproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>CustomHttpPattern</code>",id:"customhttppattern",children:[]},{value:"<code>Http</code>",id:"http",children:[]},{value:"<code>HttpRule</code>",id:"httprule",children:[]}]}],h={toc:g};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"httpproto"},(0,o.kt)("inlineCode",{parentName:"h2"},"http.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," google/api/http.proto")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," google.api")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"customhttppattern"},(0,o.kt)("inlineCode",{parentName:"h3"},"CustomHttpPattern")),(0,o.kt)(i.ProtoMessage,{key:0,message:{name:"CustomHttpPattern",longName:"CustomHttpPattern",fullName:"google.api.CustomHttpPattern",description:"A custom pattern is used for defining custom HTTP verb.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"kind",description:"The name of this custom HTTP verb.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"path",description:"The path matched by this custom verb.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"http"},(0,o.kt)("inlineCode",{parentName:"h3"},"Http")),(0,o.kt)(i.ProtoMessage,{key:1,message:{name:"Http",longName:"Http",fullName:"google.api.Http",description:"Defines the HTTP configuration for an API service. It contains a list of\n[HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method\nto one or more HTTP REST API methods.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"rules",description:'A list of HTTP configuration rules that apply to individual API methods.\n\n**NOTE:** All service configuration rules follow "last one wins" order.',label:"repeated",type:"HttpRule",longType:"HttpRule",fullType:"google.api.HttpRule",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/google/api/http.proto#httprule"},{name:"fully_decode_reserved_expansion",description:'When set to true, URL path parameters will be fully URI-decoded except in\ncases of single segment matches in reserved expansion, where "%2F" will be\nleft encoded.\n\nThe default behavior is to not decode RFC 6570 reserved characters in multi\nsegment matches.',label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"httprule"},(0,o.kt)("inlineCode",{parentName:"h3"},"HttpRule")),(0,o.kt)(i.ProtoMessage,{key:2,message:{name:"HttpRule",longName:"HttpRule",fullName:"google.api.HttpRule",description:'# gRPC Transcoding\n\ngRPC Transcoding is a feature for mapping between a gRPC method and one or\nmore HTTP REST endpoints. It allows developers to build a single API service\nthat supports both gRPC APIs and REST APIs. Many systems, including [Google\nAPIs](https://github.com/googleapis/googleapis),\n[Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC\nGateway](https://github.com/grpc-ecosystem/grpc-gateway),\nand [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature\nand use it for large scale production services.\n\n`HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies\nhow different portions of the gRPC request message are mapped to the URL\npath, URL query parameters, and HTTP request body. It also controls how the\ngRPC response message is mapped to the HTTP response body. `HttpRule` is\ntypically specified as an `google.api.http` annotation on the gRPC method.\n\nEach mapping specifies a URL path template and an HTTP method. The path\ntemplate may refer to one or more fields in the gRPC request message, as long\nas each field is a non-repeated field with a primitive (non-message) type.\nThe path template controls how fields of the request message are mapped to\nthe URL path.\n\nExample:\n\n    service Messaging {\n      rpc GetMessage(GetMessageRequest) returns (Message) {\n        option (google.api.http) = {\n            get: "/v1/{name=messages/*}"\n        };\n      }\n    }\n    message GetMessageRequest {\n      string name = 1; // Mapped to URL path.\n    }\n    message Message {\n      string text = 1; // The resource content.\n    }\n\nThis enables an HTTP REST to gRPC mapping as below:\n\nHTTP | gRPC\n-----|-----\n`GET /v1/messages/123456`  | `GetMessage(name: "messages/123456")`\n\nAny fields in the request message which are not bound by the path template\nautomatically become HTTP query parameters if there is no HTTP request body.\nFor example:\n\n    service Messaging {\n      rpc GetMessage(GetMessageRequest) returns (Message) {\n        option (google.api.http) = {\n            get:"/v1/messages/{message_id}"\n        };\n      }\n    }\n    message GetMessageRequest {\n      message SubMessage {\n        string subfield = 1;\n      }\n      string message_id = 1; // Mapped to URL path.\n      int64 revision = 2;    // Mapped to URL query parameter `revision`.\n      SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.\n    }\n\nThis enables a HTTP JSON to RPC mapping as below:\n\nHTTP | gRPC\n-----|-----\n`GET /v1/messages/123456?revision=2&sub.subfield=foo` |\n`GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield:\n"foo"))`\n\nNote that fields which are mapped to URL query parameters must have a\nprimitive type or a repeated primitive type or a non-repeated message type.\nIn the case of a repeated type, the parameter can be repeated in the URL\nas `...?param=A&param=B`. In the case of a message type, each field of the\nmessage is mapped to a separate parameter, such as\n`...?foo.a=A&foo.b=B&foo.c=C`.\n\nFor HTTP methods that allow a request body, the `body` field\nspecifies the mapping. Consider a REST update method on the\nmessage resource collection:\n\n    service Messaging {\n      rpc UpdateMessage(UpdateMessageRequest) returns (Message) {\n        option (google.api.http) = {\n          patch: "/v1/messages/{message_id}"\n          body: "message"\n        };\n      }\n    }\n    message UpdateMessageRequest {\n      string message_id = 1; // mapped to the URL\n      Message message = 2;   // mapped to the body\n    }\n\nThe following HTTP JSON to RPC mapping is enabled, where the\nrepresentation of the JSON in the request body is determined by\nprotos JSON encoding:\n\nHTTP | gRPC\n-----|-----\n`PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:\n"123456" message { text: "Hi!" })`\n\nThe special name `*` can be used in the body mapping to define that\nevery field not bound by the path template should be mapped to the\nrequest body.  This enables the following alternative definition of\nthe update method:\n\n    service Messaging {\n      rpc UpdateMessage(Message) returns (Message) {\n        option (google.api.http) = {\n          patch: "/v1/messages/{message_id}"\n          body: "*"\n        };\n      }\n    }\n    message Message {\n      string message_id = 1;\n      string text = 2;\n    }\n\n\nThe following HTTP JSON to RPC mapping is enabled:\n\nHTTP | gRPC\n-----|-----\n`PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:\n"123456" text: "Hi!")`\n\nNote that when using `*` in the body mapping, it is not possible to\nhave HTTP parameters, as all fields not bound by the path end in\nthe body. This makes this option more rarely used in practice when\ndefining REST APIs. The common usage of `*` is in custom methods\nwhich don\'t use the URL at all for transferring data.\n\nIt is possible to define multiple HTTP methods for one RPC by using\nthe `additional_bindings` option. Example:\n\n    service Messaging {\n      rpc GetMessage(GetMessageRequest) returns (Message) {\n        option (google.api.http) = {\n          get: "/v1/messages/{message_id}"\n          additional_bindings {\n            get: "/v1/users/{user_id}/messages/{message_id}"\n          }\n        };\n      }\n    }\n    message GetMessageRequest {\n      string message_id = 1;\n      string user_id = 2;\n    }\n\nThis enables the following two alternative HTTP JSON to RPC mappings:\n\nHTTP | gRPC\n-----|-----\n`GET /v1/messages/123456` | `GetMessage(message_id: "123456")`\n`GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id:\n"123456")`\n\n## Rules for HTTP mapping\n\n1. Leaf request fields (recursive expansion nested messages in the request\n   message) are classified into three categories:\n   - Fields referred by the path template. They are passed via the URL path.\n   - Fields referred by the [HttpRule.body][google.api.HttpRule.body]. They are passed via the HTTP\n     request body.\n   - All other fields are passed via the URL query parameters, and the\n     parameter name is the field path in the request message. A repeated\n     field can be represented as multiple query parameters under the same\n     name.\n 2. If [HttpRule.body][google.api.HttpRule.body] is "*", there is no URL query parameter, all fields\n    are passed via URL path and HTTP request body.\n 3. If [HttpRule.body][google.api.HttpRule.body] is omitted, there is no HTTP request body, all\n    fields are passed via URL path and URL query parameters.\n\n### Path template syntax\n\n    Template = "/" Segments [ Verb ] ;\n    Segments = Segment { "/" Segment } ;\n    Segment  = "*" | "**" | LITERAL | Variable ;\n    Variable = "{" FieldPath [ "=" Segments ] "}" ;\n    FieldPath = IDENT { "." IDENT } ;\n    Verb     = ":" LITERAL ;\n\nThe syntax `*` matches a single URL path segment. The syntax `**` matches\nzero or more URL path segments, which must be the last part of the URL path\nexcept the `Verb`.\n\nThe syntax `Variable` matches part of the URL path as specified by its\ntemplate. A variable template must not contain other variables. If a variable\nmatches a single path segment, its template may be omitted, e.g. `{var}`\nis equivalent to `{var=*}`.\n\nThe syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`\ncontains any reserved character, such characters should be percent-encoded\nbefore the matching.\n\nIf a variable contains exactly one path segment, such as `"{var}"` or\n`"{var=*}"`, when such a variable is expanded into a URL path on the client\nside, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The\nserver side does the reverse decoding. Such variables show up in the\n[Discovery\nDocument](https://developers.google.com/discovery/v1/reference/apis) as\n`{var}`.\n\nIf a variable contains multiple path segments, such as `"{var=foo/*}"`\nor `"{var=**}"`, when such a variable is expanded into a URL path on the\nclient side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.\nThe server side does the reverse decoding, except "%2F" and "%2f" are left\nunchanged. Such variables show up in the\n[Discovery\nDocument](https://developers.google.com/discovery/v1/reference/apis) as\n`{+var}`.\n\n## Using gRPC API Service Configuration\n\ngRPC API Service Configuration (service config) is a configuration language\nfor configuring a gRPC service to become a user-facing product. The\nservice config is simply the YAML representation of the `google.api.Service`\nproto message.\n\nAs an alternative to annotating your proto file, you can configure gRPC\ntranscoding in your service config YAML files. You do this by specifying a\n`HttpRule` that maps the gRPC method to a REST endpoint, achieving the same\neffect as the proto annotation. This can be particularly useful if you\nhave a proto that is reused in multiple services. Note that any transcoding\nspecified in the service config will override any matching transcoding\nconfiguration in the proto.\n\nExample:\n\n    http:\n      rules:\n        # Selects a gRPC method and applies HttpRule to it.\n        - selector: example.v1.Messaging.GetMessage\n          get: /v1/messages/{message_id}/{sub.subfield}\n\n## Special notes\n\nWhen gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the\nproto to JSON conversion must follow the [proto3\nspecification](https://developers.google.com/protocol-buffers/docs/proto3#json).\n\nWhile the single segment variable follows the semantics of\n[RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String\nExpansion, the multi segment variable **does not** follow RFC 6570 Section\n3.2.3 Reserved Expansion. The reason is that the Reserved Expansion\ndoes not expand special characters like `?` and `#`, which would lead\nto invalid URLs. As the result, gRPC Transcoding uses a custom encoding\nfor multi segment variables.\n\nThe path variables **must not** refer to any repeated or mapped field,\nbecause client libraries are not capable of handling such variable expansion.\n\nThe path variables **must not** capture the leading "/" character. The reason\nis that the most common use case "{var}" does not capture the leading "/"\ncharacter. For consistency, all path variables must share the same behavior.\n\nRepeated message fields must not be mapped to URL query parameters, because\nno client library can support such complicated mapping.\n\nIf an API needs to use a JSON array for request or response body, it can map\nthe request or response body to a repeated field. However, some gRPC\nTranscoding implementations may not support this feature.',hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"selector",description:"Selects a method to which this rule applies.\n\nRefer to [selector][google.api.DocumentationRule.selector] for syntax details.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"get",description:"Maps to HTTP GET. Used for listing and getting information about\nresources.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:""},{name:"put",description:"Maps to HTTP PUT. Used for replacing a resource.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:""},{name:"post",description:"Maps to HTTP POST. Used for creating a resource or performing an action.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:""},{name:"delete",description:"Maps to HTTP DELETE. Used for deleting a resource.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:""},{name:"patch",description:"Maps to HTTP PATCH. Used for updating a resource.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:""},{name:"custom",description:'The custom pattern is used for specifying an HTTP method that is not\nincluded in the `pattern` field, such as HEAD, or "*" to leave the\nHTTP method unspecified for this rule. The wild-card rule is useful\nfor services that provide content to Web (HTML) clients.',label:"",type:"CustomHttpPattern",longType:"CustomHttpPattern",fullType:"google.api.CustomHttpPattern",ismap:!1,isoneof:!0,oneofdecl:"pattern",defaultValue:"",typeLink:"/protodocs/google/api/http.proto#customhttppattern"},{name:"body",description:"The name of the request field whose value is mapped to the HTTP request\nbody, or `*` for mapping all request fields not captured by the path\npattern to the HTTP body, or omitted for not having any HTTP request body.\n\nNOTE: the referred field must be present at the top-level of the request\nmessage type.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"response_body",description:"Optional. The name of the response field whose value is mapped to the HTTP\nresponse body. When omitted, the entire response message will be used\nas the HTTP response body.\n\nNOTE: The referred field must be present at the top-level of the response\nmessage type.",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"additional_bindings",description:"Additional HTTP bindings for the selector. Nested bindings must\nnot contain an `additional_bindings` field themselves (that is,\nthe nesting may only be one level deep).",label:"repeated",type:"HttpRule",longType:"HttpRule",fullType:"google.api.HttpRule",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/google/api/http.proto#httprule"}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);