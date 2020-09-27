(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},104:function(e,t,a){"use strict";var r=a(0),n=a(20);t.a=function(){const e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},105:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(104),n=a(106);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,r)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},106:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),i=(a(0),a(103)),o=a(105),s={id:"personium",title:"Personium",sidebar_label:"Personium",slug:"/personium"},c={unversionedId:"personium",id:"personium",isDocsHomePage:!1,title:"Personium",description:"Personium is an open-source Personal Data Store (PDS) server software. Personium aims to empower individuals to take full control of their data and share personal data easily with data-using services. Thanks to its architecture, protocols, and utilities, Data Subjects can distribute or allow data processors to utilize the data with explicit consent in receiving data-driven digital services.",source:"@site/docs/personium.md",slug:"/personium",permalink:"/docs/personium",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personium.md",version:"current",sidebar_label:"Personium",sidebar:"someSidebar",previous:{title:"Fairdrive",permalink:"/docs/fairdrive"},next:{title:"Fairdrop - private file transfer",permalink:"/docs/fairdrop"}},l=[{value:"Decentralized PDS",id:"decentralized-pds",children:[]},{value:"Architecture and Services Components",id:"architecture-and-services-components",children:[]},{value:"Demonstration of the integrations",id:"demonstration-of-the-integrations",children:[]},{value:"Limitations and Future Potentials",id:"limitations-and-future-potentials",children:[]},{value:"References",id:"references",children:[]}],p={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://personium.io/"}),Object(i.b)("em",{parentName:"a"},"Personium"))," is an open-source Personal Data Store (PDS) server software. Personium aims to empower individuals to take full control of their data and share personal data easily with data-using services. Thanks to its architecture, protocols, and utilities, Data Subjects can distribute or allow data processors to utilize the data with explicit consent in receiving data-driven digital services."),Object(i.b)("p",null,"Personium users can be individuals, businesses, or associations. Individuals can use PDS to allow a service provider to access their private data in a sandbox environment to receive a personalized experience. Businesses or associations can use PDS to manage and exchange data with internal users or external business entities. Both user groups need to receive secure and compliant services to provide consent or revoke consent for data processors to access their data assets."),Object(i.b)("h3",{id:"decentralized-pds"},"Decentralized PDS"),Object(i.b)("p",null,"The name Personium came from the words ",Object(i.b)("em",{parentName:"p"},"Persona")," and ",Object(i.b)("em",{parentName:"p"},"-nium"),", the founder Akio Shimono envisioning Personium as ",Object(i.b)("em",{parentName:"p"},"\u201ca network of interconnected Personal Data Store and creating complex polymers by bonding atoms\u201d"),"."),Object(i.b)("p",null,"In system-centric data management, shared copies of personal data are managed by a number of digital service providers. As illustrated in the figure below, it is likely your personal data is maintained separately in different data model standards. We rarely have the time to maintain our personal data spread across the web, and have limited knowledge on how data was used to create our digital identities."),Object(i.b)("img",{src:Object(o.a)("images/image4.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 3:")," ",Object(i.b)("em",{parentName:"p"},"Company A, B")," and ",Object(i.b)("em",{parentName:"p"},"C")," provide services to ",Object(i.b)("em",{parentName:"p"},"Alice"),", ",Object(i.b)("em",{parentName:"p"},"Bob")," and ",Object(i.b)("em",{parentName:"p"},"Carol"),". All of the three companies could potentially maintain a seperate copy of data from different sources of information via user input (network g) and h)). ",Object(i.b)("em",{parentName:"p"},"Application B1"),", owned by ",Object(i.b)("em",{parentName:"p"},"Company B"),", could be authorized by ",Object(i.b)("em",{parentName:"p"},"Bob")," to access or copy a subset of ",Object(i.b)("em",{parentName:"p"},"Bob\u2019s")," personal data managed by Company A via b) service federations. Company B and Company C could share personal information via backend f) because Bob and Carol signed an implicit services agreement. ",Object(i.b)("em",{parentName:"p"},"Carol")," receives a personalized service offering derived from data stored by all three companies behind the scenes."),Object(i.b)("p",null,"Personium uses the model of centralized data, but it decentralizes the hosting and allows data owners to define how services consume information by explicit consent. This design imposes the decoupling of data ownerships and service providers, at the same time creating new business opportunities for PDS Providers and PDS service integrators."),Object(i.b)("img",{src:Object(o.a)("images/image7.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 4:")," ",Object(i.b)("em",{parentName:"p"},"Alice")," prefers a PDS service hosted by ",Object(i.b)("em",{parentName:"p"},"PDS Provider A"),", while ",Object(i.b)("em",{parentName:"p"},"Bob")," and ",Object(i.b)("em",{parentName:"p"},"Carol")," have received excellent services in the last few years with ",Object(i.b)("em",{parentName:"p"},"PDS Provider B"),". Alice is able to switch PDS Providers easily by exporting PDS to other competitive providers."),Object(i.b)("p",null,"In this simplified model shown in Figure 4, each individual owns a single copy of the data store. Data owners can choose to store multiple data stores hosted by multiple PDS Providers for the right reason. For example, your personal information, financial information, healthcare information and business identity can be decentralized hosted by purpose-built PDS providers to optimize the data consumption process."),Object(i.b)("h3",{id:"architecture-and-services-components"},"Architecture and Services Components"),Object(i.b)("p",null,"Personium provides a web of three layered architecture which empowers individuals to manage personal data. Additional explanations are available ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://personium.io/docs/en/introduction/001_Personium_Architecture/"}),Object(i.b)("em",{parentName:"a"},"here")),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unit - server that hosts Cells")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Cell - PDS for individuals that can be networked beyond Units")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Box - scoped space in a Cell dedicated to each app"))),Object(i.b)("img",{src:Object(o.a)("images/image11.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 5:")," Personium Unit is like a cluster of PDSs which we call Cells. Each Cell owned by an individual can save data into different boxes."),Object(i.b)("p",null,"There are three features of Personium that allow integrating with decentralised storage like Swarm easy. First, data retrieval from outside sources and access permission of personal data are handled at each Box. Therefore, Personium app developers can implement any app that saves and retrieves data from Swarm. Second, individuals from different Units can share data with each other. Cross-Unit communications with each individual using Swarm are not prohibited technically. Third, individuals can switch from one Unit to another smoothly. Existing services from the previous Unit do not need to be replicated in the destination Unit. That means individuals can keep using Swarm from previous arrangements."),Object(i.b)("img",{src:Object(o.a)("images/image5.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 6:")," Each application is assigned a secured space so out of scope data access is not allowed by default. Data retrieval of outside sources can be implemented in the process rules component at the Box layer."),Object(i.b)("p",null,"Swarm Integration Benefits"),Object(i.b)("p",null,"As we illustrated in the architecture, Personium is designed to be decentralized. This implies that the PDS Provider needs to have an incentive to host and manage privately owned data. Let us take one step further in considering the hosting implication, storing and managing personal or organisation data can imply greater responsibilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On average, a general audience would not be able to sufficiently run Personal Data Store for personal use due to technical complexities involved. These users have a direct impact on driving privacy awareness globally.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A data owner needs to trust the hosting provider or a Personal Data Store registry.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The service providers need to ensure all operators would respect security procedures.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By adhering to MyData principles, the data owner needs to find ways to migrate to another services provider with little efforts to ensure interoperability.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The PDS provider needs to build a profitable business revenue model in providing services to the personal data store users."))),Object(i.b)("p",null,"Storing sensitive information on the Swarm ethereum storage network could potentially simplify these concerns:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In a personal data context, assuming a publicly maintained network is available, personal data will be replicated through the Swarm network without a centralised hosting provider. This potentially changes the role of Personium to a data processor and consent management role.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Sensitive data can be encrypted via the Swarm network, this means data encryption can be offloaded to the Swarm storage layer.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"With a high-level view, encrypted data is chunked/distributed and only can be decrypted when a decryption key is presented. This is interesting, once data is replicated over the network, the data owner can easily switch hosting providers by exporting the data via the storage network layer rather than PDS layer. This would allow creating multiple hosting models: e.g. configuring hosting connected to a public network, or create private network topologies owned by a group/entity, or a personal owned network.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the disaster of lost services or data, the network may provide data recovery capabilities with future coming data persistence guarantees.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hosting at storage level is designed to reward providing popular content, this means the hosting provider could potentially have a commercial reason to serve data or host local swarm nodes for either business or personal use. This incentive would be a key factor to create business hosting motivations.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enterprise can maintain a private swarm network to limit data replication boundaries."))),Object(i.b)("h3",{id:"demonstration-of-the-integrations"},"Demonstration of the integrations"),Object(i.b)("p",null,"We took a lean approach, with little knowledge of how Swarm works at the start, refactored a sample Personium application ",Object(i.b)("em",{parentName:"p"},"MyBoard"),". The objective is to understand and demonstrate how data is persisted and received with encryption with no modifications to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/personium/personium-core"}),Object(i.b)("em",{parentName:"a"},"personium-core")),"."),Object(i.b)("p",null,"The MyBoard application stores your notes in your Personium Cell. The refactor took us a little over a day while we learned how to configure Swarm Bee and interact with Swarm Public Gateway."),Object(i.b)("img",{src:Object(o.a)("images/image13.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Figure 6:")," MyBoard application can store encrypted notes data to Swarm decentralized storage local nodes and serve data to a connected cluster."),Object(i.b)("p",null,"After the integration, our new MyBoard application would perform requests in the following sequence (letter a-e refers to the requests flow in figure 6):"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"User makes note save the request to the MyBoard application")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The frontend service requests the Personium Engine backend")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Backend makes a REST API request to a nearby node, a local swarm node, persisting user MyBoard data. Swarm Bee client would provide a 32 bytes reference response. If the REST API request includes encryption, the Swarm Bee client will provide a 64 bytes response, which includes 32 bytes references and 32 bytes decryption key for data retrieval from the Swarm storage network.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Alternatively, if the local node was not available for operational reasons, MyBoard PDS backend engine can also make requests to other online nodes. In Figure 6, we configured the local node to join the Swarm network, and PDS Engine uses the public Swarm gateway as the recovery endpoint.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When encryption is requested, the Swarm node will encrypt the data on the local node before sharing it with the rest of the network. This ensures that data is well protected - it only can be accessed when both reference and the decryption key are presented.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Personium Engine persists Swarm references to a Personium backing storage for data retrieval from the Swarm network."))),Object(i.b)("h3",{id:"limitations-and-future-potentials"},"Limitations and Future Potentials"),Object(i.b)("p",null,"The demonstration we built was to show how easy it was to integrate Swarm storage with Personium applications. Lower level integrations would require to refactor Personium system metadata management into Swarm protocols. However, this would be likely relying on a centralized database solution with potentially SQL or NoSQL capabilities. Alternatively, to enable backward compatibility, a Swarm fuse integration would make the transition easier to existing centralised backing storage."),Object(i.b)("p",null,"Common data applications could face complex challenges that both Swarm and Personium should consider:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Managing references and decryption keys can be additional overhead for securing the data access.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data replication currently only provides eventual consistency, and pull data from a Swarm cluster of networks is currently in development. Although there are APIs available to check upload progress.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Provide an end-to-end user process to switch data hosting providers at the storage network layer if when a user requests.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Not all data may suit such integration, preferably application or application data that is immutable representing a historical state with a concrete data retention period - the Swarm Feeds could address such limitations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Allow service providers of Personium to launch their service in a short period if Swarm potentially provides storage network service to Common European data spaces.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using existing decentralized storage allows different parties to concentrate on their expertise. For example, app developers can concentrate on the features while PDS developers can concentrate on any of the nine components described in \u201c",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mydata.org/wp-content/uploads/sites/5/2020/04/Understanding-Mydata-Operators-pages.pdf"}),Object(i.b)("em",{parentName:"a"},"Understanding MyData Operators")),"\u201d white paper.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Considering data are immutable, a Personium unit can keep track of which history of personal data is consumed by a data consumer or an application Unit."))),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("p",null,"Personium PDS server software: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://personium.io/"}),Object(i.b)("em",{parentName:"a"},"https://personium.io/"))),Object(i.b)("p",null,"Sample App Integrated with Swarm: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/personium/app-swarm"}),Object(i.b)("em",{parentName:"a"},"https://github.com/personium/app-swarm"))),Object(i.b)("p",null,"MyData Operators Awardees information: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mydata.org/operators/"}),Object(i.b)("em",{parentName:"a"},"https://mydata.org/operators/"))),Object(i.b)("p",null,"Common European Data Spaces: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12491-Legislative-framework-for-the-governance-of-common-European-data-spaces"}),Object(i.b)("em",{parentName:"a"},"https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12491-Legislative-framework-for-the-governance-of-common-European-data-spaces"))))}d.isMDXComponent=!0}}]);