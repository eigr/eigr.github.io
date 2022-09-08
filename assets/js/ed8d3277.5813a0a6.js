"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[7301],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const r={},i="Spawn Introduction",s={unversionedId:"projects-spawn/spawn-introduction",id:"projects-spawn/spawn-introduction",title:"Spawn Introduction",description:"Actor Mesh Platform",source:"@site/docs/projects-spawn/spawn-introduction.md",sourceDirName:"projects-spawn",slug:"/projects-spawn/spawn-introduction",permalink:"/docs/projects-spawn/spawn-introduction",draft:!1,editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/docs/projects-spawn/spawn-introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"eigrSidebar",previous:{title:"Service Proxy",permalink:"/docs/concepts/service-proxy"},next:{title:"Runtime",permalink:"/docs/projects-functions/eigr-functions"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"What problem Spawn solves",id:"what-problem-spawn-solves",level:2},{value:"Spawn Architecture",id:"spawn-architecture",level:2},{value:"Custom Resources",id:"custom-resources",level:2},{value:"SDKs",id:"sdks",level:2},{value:"Main Concepts",id:"main-concepts",level:2},{value:"The Actor Model",id:"the-actor-model",level:3},{value:"The Sidecar Pattern",id:"the-sidecar-pattern",level:3},{value:"The Protocol",id:"the-protocol",level:3},{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Local Development",id:"local-development",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spawn-introduction"},"Spawn Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Actor Mesh Platform")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Although Spawn ",(0,o.kt)("strong",{parentName:"p"},"is functional")," it is still a work in progress and we do not recommend it for ",(0,o.kt)("strong",{parentName:"p"},"production environments at this time.")," We hope to have a stable version soon.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Spawn is based on the sidecar proxy pattern to provide a polyglot Actor Model framework and platform.\nSpawn's technology stack, built on the BEAM VM (Erlang's virtual machine), provides support\nfor different languages from its native Actor model."),(0,o.kt)("p",null,"Spawn is made up of the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A semantic protocol based on Protocol Buffers"),(0,o.kt)("li",{parentName:"ul"},"A Sidecar Proxy, written in Elixir, that implements this protocol and persistent storage\nadapters."),(0,o.kt)("li",{parentName:"ul"},"Support libraries in different programming languages.")),(0,o.kt)("h2",{id:"what-problem-spawn-solves"},"What problem Spawn solves"),(0,o.kt)("p",null,"The advancement of Cloud Computing, Edge computing, Containers, Orchestrators, Data-\nOriented Services, and global-scale products aimed at serving audiences in various regions of\nour world make the development of software today a task of enormous complexity. It is not\nuncommon to see dozens, if not hundreds, of non-functional requirements that must be met\nto build a system. All this complexity falls on the developer, who often does not have all the\nknowledge or time to create such systems satisfactorily."),(0,o.kt)("p",null,"When studying this scenario, we realize that many of these current problems belong to the following groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fast delivery and business oriented."),(0,o.kt)("li",{parentName:"ul"},"State management."),(0,o.kt)("li",{parentName:"ul"},"Scalability."),(0,o.kt)("li",{parentName:"ul"},"Resilience and fault tolerance."),(0,o.kt)("li",{parentName:"ul"},"Distributed and/or regionally distributed computing."),(0,o.kt)("li",{parentName:"ul"},"Integration Services."),(0,o.kt)("li",{parentName:"ul"},"Polyglot services.")),(0,o.kt)("p",null,"The actor model on which Spawn is based can solve almost all the problems on this list, with\nScalability, resilience, fault tolerance, and state management by far the top success stories of\ndifferent known actor model implementations. So what we needed to do was add Integration"),(0,o.kt)("p",null,"Services, fast, business-oriented delivery, distributed computing, and polyglot services to the\nrecipe so we could revolutionize software development as we know it today."),(0,o.kt)("p",null,"That's precisely what we did with our platform called Eigr Functions Spawn."),(0,o.kt)("p",null,"Spawn takes care of the entire infrastructure layer by abstracting all the complex issues that\nare not part of the business domain it is intended to address."),(0,o.kt)("p",null,"Particularly domains such as game development, machine learning pipelines, complex event\nprocessing, real-time data ingestion, service integrations, financial or transactional services,\nand logistics are some of the domains that can be mastered by the Eigr Functions Spawn\nplatform."),(0,o.kt)("h2",{id:"spawn-architecture"},"Spawn Architecture"),(0,o.kt)("p",null,"Spawn takes the Actor Model's distribution, fault tolerance, and high concurrent capability in\nits most famous implementation, the BEAM Erlang VM implementation, and adds to the\nflexibility and dynamism that the sidecar pattern offers to build cross-platform and polyglot\nmicroservice-oriented architectures."),(0,o.kt)("p",null,"To achieve these goals, the Eigr Functions Spawn architecture is composed of the following components:"),(0,o.kt)("p",null,"As seen above, the Eigr Functions Spawn platform architecture is separated into different components, each with its responsibility. We will detail the components below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"k8s Operator:")," Responsible for interacting with the Kubernetes API and coordinating the deployments of the other components. The user interacts with it using our specific CRDs (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resource Definitions"),"). We'll talk more about our CRDs later.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cloud Storage:")," Despite not being directly part of the platform, it is worth mentioning here that Spawn uses user-defined persistent storage to store the state of its Actors. Different types of persistent storage can be used, such as relational databases such as MySQL, Postgres, among others. In the future, we will support other types of databases, both relational and non-relational.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Activators:")," Activators are applications responsible for ingesting data from external sources for certain user-defined actors and are configured through their own CRD. They are responsible for listening to a user-configured event and forward this event through a direct invocation to a specific target actor. Different types of Activators exist to consume events from other providers such as Google PubSub, RabbitMQ, Amazon SQS, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Actor Host Function:")," The container where the user defines his actors and all the business logic of his actors around the state of these actors through a specific SDK for each supported programming language.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Spawn Sidecar Proxy:")," The centerpiece of the gear is our sidecar proxy; in turn it is responsible for managing the entire lifecycle of user-defined actors through our SDKs and also responsible for managing the state of these actors in persistent storage. The Spawn proxy can also allow the user to develop different integration flows between its actors such as Forwards,\nEffects, Pipes, and in the future, other essential standards such as Saga, Aggregators, Scatter-\nGather, external invocations, and others.\nOur proxy connects directly and transparently to all cluster members without needing for a single point of failure, i.e., a true mesh network."))),(0,o.kt)("h2",{id:"custom-resources"},"Custom Resources"),(0,o.kt)("p",null,"Spawn defines some custom Resources for the user to interact with the API for deploying Spawn artifacts in Kubernetes. We'll talk more about these CRDs in the Getting Started section but for now we'll list each of these resources below for a general understanding of the concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ActorSystem CRD:")," The user must define the ActorSystem CRD before it attempts to\ndeploy any other Spawn features. In it, the user defines some general parameters for the\nfunctioning of the actor cluster and the parameters of the persistent storage connection for a\ngiven system. Multiple ActorSystems can be defined but remember that they must be\nreferenced equally in the Actor Host Functions. Examples of this CRD can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn/tree/main/examples/k8s/system.yaml"},"examples/k8s folder"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ActorNode CRD:")," A ActorNode is a cluster member application. An ActorNode, by\ndefinition, is a Kubernetes Deployment and will contain two containers, one containing the\nActor Host Function user application and another container for the Spawn proxy, which is\nresponsible for connecting to the proxies cluster via Distributed Erlang and also for providing\nall the necessary abstractions for the functioning of the system such as state management,\nactivation, and passivation of actors, among other infrastructure tasks. Examples of this CRD\ncan be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn/tree/main/examples/k8s/node.yaml"},"examples/k8s folder"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Activator CRD:")," Activator CRD defines any means of inputting supported events such as\nqueues, topics, HTTP, or grpc endpoints and maps these events to the appropriate actor to\nhandle them. Examples of this CRD can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn/tree/main/examples/k8s/activators/amqp.yaml"},"examples/k8s\nfolder"),"."))),(0,o.kt)("h2",{id:"sdks"},"SDKs"),(0,o.kt)("p",null,"Another important part of Spawn is the SDKs implemented in different languages that aim to\nabstract all the protocol specifics and expose an easy and intuitive API to developers."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SDK"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-dotnet-sdk"},"C# SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"C#")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-go-sdk"},"Go SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"Go")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-springboot-sdk"},"Spring Boot SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-node-sdk"},"NodeJS/Typescript SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"Node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-python-sdk"},"Python SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"Python")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/eigr-labs/spawn-rust-sdk"},"Rust SDK")),(0,o.kt)("td",{parentName:"tr",align:null},"Rust")))),(0,o.kt)("h2",{id:"main-concepts"},"Main Concepts"),(0,o.kt)("p",null,"The sections below will discuss the main concepts that guided our architectural choices."),(0,o.kt)("h3",{id:"the-actor-model"},"The Actor Model"),(0,o.kt)("p",null,"According to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"},"Wikipedia")," Actor Model is:"),(0,o.kt)("p",null,'"A mathematical model of concurrent computation that treats actor as the universal primitive of concurrent computation. In response to a message it receives, an actor can: ',(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7erJ1DV_Tlo&t=22s"},"make local decisions, create more actors, send more messages, and determine how to respond to the next message received"),". Actors may modify their own private state, but can only affect each other indirectly through messaging (removing the need for lock-based synchronization)."),(0,o.kt)("p",null,"The actor model originated in ",(0,o.kt)("a",{parentName:"p",href:"https://www.ijcai.org/Proceedings/73/Papers/027B.pdf"},"1973"),'. It has been used both as a framework for a theoretical understanding of computation and as the theoretical basis for several practical implementations of concurrent systems."'),(0,o.kt)("p",null,"The Actor Model was proposed by Carl Hewitt, Peter Bishop, and Richard Steiger and is\ninspired by several characteristics of the physical world."),(0,o.kt)("p",null,"Although it emerged in the 70s of the last century, only in the previous two decades of our\ncentury has this model gained strength in the software engineering communities due to the\nmassive amount of existing data and the performance and distribution requirements of the\nmost current applications."),(0,o.kt)("p",null,"For more information about the Actor Model, see the following links:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Actor_model"},"https://en.wikipedia.org/wiki/Actor_model")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesync.global/media/almost-actors-comparing-pony-language-to-beam-languages-erlang-elixir/"},"https://codesync.global/media/almost-actors-comparing-pony-language-to-beam-languages-erlang-elixir/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.infoworld.com/article/2077999/understanding-actor-concurrency--part-1--actors-in-erlang.html"},"https://www.infoworld.com/article/2077999/understanding-actor-concurrency--part-1--actors-in-erlang.html")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/general/actors.html"},"https://doc.akka.io/docs/akka/current/general/actors.html")),(0,o.kt)("h3",{id:"the-sidecar-pattern"},"The Sidecar Pattern"),(0,o.kt)("p",null,"The sidecar pattern is a pattern for implementing Service Meshs and Microservices\narchitectures where an external software is placed close to the real service to provide non-\nfunctional characteristics such as interfacing with the underlying network, routing, and data\ntransformation between other orthogonal requirements to the business."),(0,o.kt)("p",null,"The sidecar allows components to access services from any location or programming language.\nThe sidecar can also be a translator for cross-language dependency management as a\ncommunication proxy mechanism. This benefits distributed applications with complex\nintegration requirements and applications that rely on external business integrations."),(0,o.kt)("p",null,"For more information about the Sidecar Pattern, see the following links:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.techtarget.com/searchapparchitecture/tip/The-role-of-sidecars-in-microservices-architecture"},"https://www.techtarget.com/searchapparchitecture/tip/The-role-of-sidecars-in-microservices-architecture")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar"},"https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=j7JKkbAiWuI"},"https://www.youtube.com/watch?v=j7JKkbAiWuI")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/nerd-for-tech/microservice-design-pattern-sidecar-sidekick-pattern-dbcea9bed783"},"https://medium.com/nerd-for-tech/microservice-design-pattern-sidecar-sidekick-pattern-dbcea9bed783")),(0,o.kt)("h3",{id:"the-protocol"},"The Protocol"),(0,o.kt)("p",null,"Spawn is based on ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers")," and a\nsuper simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr-labs/spawn/blob/main/docs/protocol.md"},"HTTP stack"),"\nto allow a heterogeneous layer of communication between different services which can, in\nturn, be implemented in any language that supports the gRPC protocol."),(0,o.kt)("p",null,"The Spawn protocol itself is described ",(0,o.kt)("a",{parentName:"p",href:"/protodocs/eigr/functions/protocol/actors/protocol.proto/"},"here")," and as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr-labs/spawn/blob/main/apps/protos/priv/protos/eigr/functions/protocol/actors/protocol.proto"},"*.proto"),"\nfile."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"More complete guides or examples can be found on the official page or in the repositories of each SDK available."),(0,o.kt)("p",null,"Let's start with a classic Hello World written with the help of the sdk for Springboot."),(0,o.kt)("p",null,"Start by defining a basic springboot maven project with the following ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"pom.xml"))," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>io.eigr</groupId>\n    <artifactId>spawn-springboot-examples</artifactId>\n    <version>0.1.9</version>\n    <name>spawn-springboot-examples</name>\n    <url>http://www.example.com</url>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n    </properties>\n\n    <parent>\n        <groupId>io.eigr</groupId>\n        <artifactId>spawn-springboot-sdk</artifactId>\n        <version>0.1.9</version>\n    </parent>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-dependencies</artifactId>\n                <version>2.7.0</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n            <dependency>\n                <groupId>org.testcontainers</groupId>\n                <artifactId>testcontainers-bom</artifactId>\n                <version>1.17.2</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.eigr</groupId>\n            <artifactId>spawn-springboot-starter</artifactId>\n            <version>0.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-webflux</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>org.testcontainers</groupId>\n            <artifactId>testcontainers</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.13.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <extensions>\n            <extension>\n                <groupId>kr.motd.maven</groupId>\n                <artifactId>os-maven-plugin</artifactId>\n                <version>1.6.2</version>\n            </extension>\n        </extensions>\n\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n\n            <plugin>\n                <groupId>org.xolstice.maven.plugins</groupId>\n                <artifactId>protobuf-maven-plugin</artifactId>\n                <version>0.6.1</version>\n                <configuration>\n                    <protocArtifact>com.google.protobuf:protoc:3.19.2:exe:${os.detected.classifier}</protocArtifact>\n                    <pluginId>grpc-java</pluginId>\n                    <pluginArtifact>io.grpc:protoc-gen-grpc-java:1.47.0:exe:${os.detected.classifier}</pluginArtifact>\n                </configuration>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>compile</goal>\n                            <goal>compile-custom</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-surefire-plugin</artifactId>\n                <version>2.7</version>\n            </plugin>\n\n            <plugin>\n                <artifactId>maven-dependency-plugin</artifactId>\n                <version>2.5.1</version>\n                <executions>\n                    <execution>\n                        <id>getClasspathFilenames</id>\n                        <goals>\n                            \x3c!-- provides the jars of the classpath as properties inside of maven\n                                 so that we can refer to one of the jars in the exec plugin config below --\x3e\n                            <goal>properties</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n\n            <plugin>\n                <groupId>com.google.cloud.tools</groupId>\n                <artifactId>jib-maven-plugin</artifactId>\n                <version>3.1.4</version>\n                <executions>\n                    <execution>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>build</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <to>\n                        <image>my-dockerhub-repo/spawn-springboot-examples</image>\n                    </to>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,o.kt)("p",null,"As Spawn depends on the types of data exchanged between actors being defined via Protobuf\ntypes, we will have to create a folder to store such files in our project. In maven projects, this\ncan be done by creating a folder under ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/main/proto")),". In our example we will create\nthe folders ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/main/proto/io/eigr/spawn/example"))," and inside the example folder we\nwill create the file ",(0,o.kt)("strong",{parentName:"p"},"example.proto")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage io.eigr.spawn.example;\n\noption java_multiple_files = true;\noption java_package = "io.eigr.spawn.example";\noption java_outer_classname = "ExampleProtos";\n\nmessage MyState {\n  int32 value = 1;\n}\n\nmessage MyBusinessMessage {\n  int32 value = 1;\n}\n')),(0,o.kt)("p",null,"As you can see, we have defined two types of messages, one that will be used to store the state of our actor to be created later, and the other to be able to transmit business information that will be used in our actor's methods."),(0,o.kt)("p",null,"Now we can start writing some code. Let's start by defining our Actor class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package io.eigr.spawn.example;\n\nimport io.eigr.spawn.springboot.starter.ActorContext;\nimport io.eigr.spawn.springboot.starter.Value;\nimport io.eigr.spawn.springboot.starter.annotations.ActorEntity;\nimport io.eigr.spawn.springboot.starter.annotations.Command;\nimport lombok.extern.log4j.Log4j2;\n\nimport java.util.Optional;\n\n@Log4j2\n@ActorEntity(name = "joe", stateType = MyState.class, snapshotTimeout = 10000, deactivatedTimeout = 50000)\npublic class JoeActor {\n\n    @Command\n    public Value get(ActorContext<MyState> context) {\n        log.info("Received invocation. Context: {}", context);\n        if (context.getState().isPresent()) {\n            MyState state = context.getState().get();\n\n            return Value.ActorValue.<MyState, MyBusinessMessage>at()\n                    .state(state)\n                    .value(MyBusinessMessage.newBuilder()\n                            .setValue(state.getValue())\n                            .build())\n                    .reply();\n        }\n\n        return Value.ActorValue.at()\n                .empty();\n    }\n\n    @Command(name = "sum", inputType = MyBusinessMessage.class)\n    public Value sum(MyBusinessMessage msg, ActorContext<MyState> context) {\n        log.info("Received invocation. Message: {}. Context: {}", msg, context);\n\n        int value = 1;\n        if (context.getState().isPresent()) {\n            log.info("State is present and value is {}", context.getState().get());\n            Optional<MyState> oldState = context.getState();\n            value = oldState.get().getValue() + msg.getValue();\n        } else {\n            log.info("State is NOT present. Msg getValue is {}", msg.getValue());\n            value = msg.getValue();\n        }\n\n        log.info("New Value is {}", value);\n        MyBusinessMessage resultValue = MyBusinessMessage.newBuilder()\n                .setValue(value)\n                .build();\n\n        return Value.ActorValue.at()\n                .value(resultValue)\n                .state(updateState(value))\n                .reply();\n    }\n\n    private MyState updateState(int value) {\n        return MyState.newBuilder()\n                .setValue(value)\n                .build();\n    }\n\n}\n\n')),(0,o.kt)("p",null,"The code itself is self-explanatory, but you can check out the Spring Boot SDK documentation if\nyou want to know all the details. We define an Actor (our class because we are using Java\nobject-oriented), which in turn has two methods, one that only returns the value of our actor's\ncurrent state and another that receives our current state but also our message of the business."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," The state of an Actor will always be passed as an argument through the Context type,\nwhile the business message will always be given directly as the method's first argument.")),(0,o.kt)("p",null,"The sum method, in turn, receives the business message, extracts the value passed, and adds it to the value of the actor's current state."),(0,o.kt)("p",null,"Now that we've defined our first Actor, it's time to write our Main class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package io.eigr.spawn.example;\n\nimport io.eigr.spawn.springboot.starter.SpawnSystem;\nimport io.eigr.spawn.springboot.starter.autoconfigure.EnableSpawn;\nimport lombok.extern.log4j.Log4j2;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.boot.autoconfigure.domain.EntityScan;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.annotation.Bean;\n\n@Log4j2\n@EnableSpawn\n@SpringBootApplication\n@EntityScan("io.eigr.spawn.example")\npublic class App {\n    public static void main(String[] args) {SpringApplication.run(App.class, args);}\n\n    @Bean\n    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {\n        return args -> {\n            SpawnSystem actorSystem = ctx.getBean(SpawnSystem.class);\n            log.info("Let\'s invoke some Actor");\n            for (int i = 0; i < 10000; i++) {\n                MyBusinessMessage arg = MyBusinessMessage.newBuilder()\n                        .setValue(i)\n                        .build();\n\n                MyBusinessMessage sumResult = (MyBusinessMessage) actorSystem.invoke("joe", "sum", arg, MyBusinessMessage.class);\n                log.info("Actor invoke Sum Actor Action value result: {}", sumResult.getValue());\n            }\n\n            MyBusinessMessage getResult = (MyBusinessMessage) actorSystem.invoke("joe", "get", MyBusinessMessage.class);\n            log.info("Actor invoke Get Actor Action value result: {}", getResult.getValue());\n        };\n    }\n}\n')),(0,o.kt)("p",null,"Once again, the code is self-explanatory and will not be discussed in detail here. Just know that\nwe started our application by telling Spring that it is a Spawn Host Actor Function app; we will\nperform a series of invocations to our previously defined actor. In turn, at each invocation, the\nstate will be stored by the actor, and even if the application is restarted, the actor will return\nfrom the point at which it was before being turned off."),(0,o.kt)("p",null,"To proceed, create a container and send it to a container registry that will be accessible via\nKubernetes in the future. This can be done by executing the following command in the\napplication directory via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mvn install\n")),(0,o.kt)("p",null,"This command will compile the maven application, and thanks to the jib Maven plugin, it will also publish the container image in your docker hub registry :)"),(0,o.kt)("p",null,"Now that we have created our container containing our Actor Host Function, we must deploy\nit in a Kubernetes cluster with the Eigr Functions Controller installed (See more about this\nprocess in the section on installation)."),(0,o.kt)("p",null,"In a directory of your choice, create a file called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"system.yaml"))," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: spawn.eigr.io/v1\nkind: ActorSystem\nmetadata:\n  name: spawn-system\n  namespace: default\nspec:\n  storage:\n    type: InMemory\n")),(0,o.kt)("p",null,"This file will be responsible for creating a system of actors in the cluster."),(0,o.kt)("p",null,"Now create a new file called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"node.yaml"))," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: spawn.eigr.io/v1\nkind: ActorNode\nmetadata:\n  name: my-first-app\n  system: spawn-system\n  namespace: default\nspec:\n  function:\n    image: my-dockerhub-repo/spawn-springboot-examples:latest\n")),(0,o.kt)("p",null,"This file will be responsible for deploying your host function and actors in the cluster.\nNow that the files have been defined, we can apply them to the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f system.yaml\nkubectl apply -f node.yaml\n")),(0,o.kt)("p",null,"After that, just check your actors with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get actornodes\n")),(0,o.kt)("h2",{id:"local-development"},"Local Development"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," All scripts will use a MySQL DB with a database called eigr-functions-db by default. Make sure you have a working instance on your localhost or you will have to change make tasks or run commands manually during testing.")),(0,o.kt)("p",null,"Tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make build run-proxy-local\n")),(0,o.kt)("p",null,"For more information on how to collaborate or even to get to know the project structure better, go to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn/blob/main/CONTRIBUTING.md"},"contributor guide")))}u.isMDXComponent=!0}}]);