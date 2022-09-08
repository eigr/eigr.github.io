"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[394],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6790:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const i={sidebar_position:10},o="Astreu",s={unversionedId:"projects-other/eigr-astreu",id:"projects-other/eigr-astreu",title:"Astreu",description:"High-performance Messaging System based on gRPC protocol written in Elixir (this is a WIP no production ready)",source:"@site/docs/projects-other/eigr-astreu.md",sourceDirName:"projects-other",slug:"/projects-other/eigr-astreu",permalink:"/docs/projects-other/eigr-astreu",draft:!1,editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/docs/projects-other/eigr-astreu.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"eigrSidebar",previous:{title:"Cloudstate legacy TCK",permalink:"/docs/projects-functions/tck/cloudstate-tck"},next:{title:"History",permalink:"/docs/history"}},l={},u=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Usage and Installation",id:"usage-and-installation",level:2},{value:"Client SDK&#39;s",id:"client-sdks",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"astreu"},"Astreu"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"High-performance Messaging System based on gRPC protocol written in Elixir")," (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"this is a WIP no production ready")),")"),(0,a.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n                                     +-------------------------------+\n                                     |           Astreu              |\n                                     |                               |\n                                     | +---------------------------+ |\n    +-------------+                  | |     Management API        | |                   +-------------+\n    | Subscribers |                  | +---------------------------+ |                   |  Producers  |\n  +-------------+ |  Bi-directional  | +---------------------------+ |  Bi-directional   | +-------------+\n+---------------| +-----------------\x3e+ |     PubSub Adapters       | +------------------\x3e+ | +-------------+\n| | |          || |    Streams       | +---------------------------+ |    Streams        | | |         | | |\n| | |          || +<-----------------+ +---------------------------+ +<------------------+ | |         | | |\n| | +-------------+                  | |      Core Protocol        | |                   +-------------+ | |\n+-+-------------+                    | +---------------------------+ |                     +-------------+ |\n                                     | +---------------------------+ |                       +-------------+\n                                     | |        gRpc Server        | |\n                                     | +---------------------------+ |\n                                     +-------------------------------+\n\n\n")),(0,a.kt)("h2",{id:"usage-and-installation"},"Usage and Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# docker run --rm --net=host -e RELEASE_NODE=unique_name_peer_node eigr/astreu:0.1.2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect as a Producer to the server from an SDK (Java SDK example below):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(final String[] args) {\n\n    final Producer producer =\n            Astreu.at("127.0.0.1", 9980)\n            .asPub("test", UUID.randomUUID().toString().toLowerCase());\n\n    final Publisher<ReplyMessage> publisher = producer.bind(); \n\n    Flux.from(publisher).subscribe(replyMessage -> {\n        replyMessage.logger().info("Reply Message -> {}", replyMessage);\n    });\n\n    IntStream.range(0, 10).parallel().forEach(i -> {\n        producer.publish(\n                String.valueOf(i), \n                Any.newBuilder()\n                        .setTypeUrl("io.astreu.custom/Text")\n                        .setValue(ByteString.copyFrom(String.format("Hello World Astreu %s", i).getBytes()))\n                        .build()\n        );\n    });\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect as a Subscriber to the server from an SDK (Java SDK example below):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(final String[] args) {\n    final Publisher<MessageWithContext> publisher =\n            Astreu.at("127.0.0.1", 9980)\n                    .asSub("test", "unique-subscription")\n                    .receiveOnly(MessageType.EXCHANGE)\n                    .bind(); \n\n    Flux.from(publisher).subscribe(messageWithContext -> {\n        final AcknowledgeContext context = messageWithContext.getContext();\n\n        context.logger().debug("Message type is -> {}", messageWithContext.getType());\n        final Exchange message = messageWithContext.getMessage();\n\n        context.logger().info("Incoming Message {}", message);\n        context.accept();\n    });\n}\n')),(0,a.kt)("h2",{id:"client-sdks"},"Client SDK's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/eigr/astreu4j"},"Astreu4j")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/eigr/astreu-go"},"GO Lang Astreu"))))}p.isMDXComponent=!0}}]);