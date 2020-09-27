---
id: personium
title: Personium
sidebar_label: Personium
slug: /personium
---
import useBaseUrl from '@docusaurus/useBaseUrl';

[*Personium*](https://personium.io/) is an open-source Personal Data Store (PDS) server software. Personium aims to empower individuals to take full control of their data and share personal data easily with data-using services. Thanks to its architecture, protocols, and utilities, Data Subjects can distribute or allow data processors to utilize the data with explicit consent in receiving data-driven digital services.

Personium users can be individuals, businesses, or associations. Individuals can use PDS to allow a service provider to access their private data in a sandbox environment to receive a personalized experience. Businesses or associations can use PDS to manage and exchange data with internal users or external business entities. Both user groups need to receive secure and compliant services to provide consent or revoke consent for data processors to access their data assets.

### Decentralized PDS

The name Personium came from the words *Persona* and *-nium*, the founder Akio Shimono envisioning Personium as *“a network of interconnected Personal Data Store and creating complex polymers by bonding atoms”*.

In system-centric data management, shared copies of personal data are managed by a number of digital service providers. As illustrated in the figure below, it is likely your personal data is maintained separately in different data model standards. We rarely have the time to maintain our personal data spread across the web, and have limited knowledge on how data was used to create our digital identities.

<img src={useBaseUrl('images/image4.png')} />


**Figure 3:** *Company A, B* and *C* provide services to *Alice*, *Bob* and *Carol*. All of the three companies could potentially maintain a seperate copy of data from different sources of information via user input (network g) and h)). *Application B1*, owned by *Company B*, could be authorized by *Bob* to access or copy a subset of *Bob’s* personal data managed by Company A via b) service federations. Company B and Company C could share personal information via backend f) because Bob and Carol signed an implicit services agreement. *Carol* receives a personalized service offering derived from data stored by all three companies behind the scenes.

Personium uses the model of centralized data, but it decentralizes the hosting and allows data owners to define how services consume information by explicit consent. This design imposes the decoupling of data ownerships and service providers, at the same time creating new business opportunities for PDS Providers and PDS service integrators.

<img src={useBaseUrl('images/image7.png')} />

**Figure 4:** *Alice* prefers a PDS service hosted by *PDS Provider A*, while *Bob* and *Carol* have received excellent services in the last few years with *PDS Provider B*. Alice is able to switch PDS Providers easily by exporting PDS to other competitive providers.

In this simplified model shown in Figure 4, each individual owns a single copy of the data store. Data owners can choose to store multiple data stores hosted by multiple PDS Providers for the right reason. For example, your personal information, financial information, healthcare information and business identity can be decentralized hosted by purpose-built PDS providers to optimize the data consumption process.

### Architecture and Services Components 

Personium provides a web of three layered architecture which empowers individuals to manage personal data. Additional explanations are available [*here*](https://personium.io/docs/en/introduction/001_Personium_Architecture/).

1.  Unit - server that hosts Cells

2.  Cell - PDS for individuals that can be networked beyond Units

3.  Box - scoped space in a Cell dedicated to each app

<img src={useBaseUrl('images/image11.png')} />

**Figure 5:** Personium Unit is like a cluster of PDSs which we call Cells. Each Cell owned by an individual can save data into different boxes.

There are three features of Personium that allow integrating with decentralised storage like Swarm easy. First, data retrieval from outside sources and access permission of personal data are handled at each Box. Therefore, Personium app developers can implement any app that saves and retrieves data from Swarm. Second, individuals from different Units can share data with each other. Cross-Unit communications with each individual using Swarm are not prohibited technically. Third, individuals can switch from one Unit to another smoothly. Existing services from the previous Unit do not need to be replicated in the destination Unit. That means individuals can keep using Swarm from previous arrangements.

<img src={useBaseUrl('images/image5.png')} />

**Figure 6:** Each application is assigned a secured space so out of scope data access is not allowed by default. Data retrieval of outside sources can be implemented in the process rules component at the Box layer.

Swarm Integration Benefits

As we illustrated in the architecture, Personium is designed to be decentralized. This implies that the PDS Provider needs to have an incentive to host and manage privately owned data. Let us take one step further in considering the hosting implication, storing and managing personal or organisation data can imply greater responsibilities:

-   On average, a general audience would not be able to sufficiently run Personal Data Store for personal use due to technical complexities involved. These users have a direct impact on driving privacy awareness globally.

-   A data owner needs to trust the hosting provider or a Personal Data Store registry.

-   The service providers need to ensure all operators would respect security procedures.

-   By adhering to MyData principles, the data owner needs to find ways to migrate to another services provider with little efforts to ensure interoperability.

-   The PDS provider needs to build a profitable business revenue model in providing services to the personal data store users.

Storing sensitive information on the Swarm ethereum storage network could potentially simplify these concerns:

1.  In a personal data context, assuming a publicly maintained network is available, personal data will be replicated through the Swarm network without a centralised hosting provider. This potentially changes the role of Personium to a data processor and consent management role.

2.  Sensitive data can be encrypted via the Swarm network, this means data encryption can be offloaded to the Swarm storage layer.

3.  With a high-level view, encrypted data is chunked/distributed and only can be decrypted when a decryption key is presented. This is interesting, once data is replicated over the network, the data owner can easily switch hosting providers by exporting the data via the storage network layer rather than PDS layer. This would allow creating multiple hosting models: e.g. configuring hosting connected to a public network, or create private network topologies owned by a group/entity, or a personal owned network.

4.  In the disaster of lost services or data, the network may provide data recovery capabilities with future coming data persistence guarantees.

5.  Hosting at storage level is designed to reward providing popular content, this means the hosting provider could potentially have a commercial reason to serve data or host local swarm nodes for either business or personal use. This incentive would be a key factor to create business hosting motivations.

6.  Enterprise can maintain a private swarm network to limit data replication boundaries.

### Demonstration of the integrations

We took a lean approach, with little knowledge of how Swarm works at the start, refactored a sample Personium application *MyBoard*. The objective is to understand and demonstrate how data is persisted and received with encryption with no modifications to the [*personium-core*](https://github.com/personium/personium-core).

The MyBoard application stores your notes in your Personium Cell. The refactor took us a little over a day while we learned how to configure Swarm Bee and interact with Swarm Public Gateway.

<img src={useBaseUrl('images/image13.png')} />

**Figure 6:** MyBoard application can store encrypted notes data to Swarm decentralized storage local nodes and serve data to a connected cluster.

After the integration, our new MyBoard application would perform requests in the following sequence (letter a-e refers to the requests flow in figure 6):

1.  User makes note save the request to the MyBoard application

2.  The frontend service requests the Personium Engine backend

3.  Backend makes a REST API request to a nearby node, a local swarm node, persisting user MyBoard data. Swarm Bee client would provide a 32 bytes reference response. If the REST API request includes encryption, the Swarm Bee client will provide a 64 bytes response, which includes 32 bytes references and 32 bytes decryption key for data retrieval from the Swarm storage network.

4.  Alternatively, if the local node was not available for operational reasons, MyBoard PDS backend engine can also make requests to other online nodes. In Figure 6, we configured the local node to join the Swarm network, and PDS Engine uses the public Swarm gateway as the recovery endpoint.

5.  When encryption is requested, the Swarm node will encrypt the data on the local node before sharing it with the rest of the network. This ensures that data is well protected - it only can be accessed when both reference and the decryption key are presented.

6.  Personium Engine persists Swarm references to a Personium backing storage for data retrieval from the Swarm network.

### Limitations and Future Potentials

The demonstration we built was to show how easy it was to integrate Swarm storage with Personium applications. Lower level integrations would require to refactor Personium system metadata management into Swarm protocols. However, this would be likely relying on a centralized database solution with potentially SQL or NoSQL capabilities. Alternatively, to enable backward compatibility, a Swarm fuse integration would make the transition easier to existing centralised backing storage.

Common data applications could face complex challenges that both Swarm and Personium should consider:

-   Managing references and decryption keys can be additional overhead for securing the data access.

-   Data replication currently only provides eventual consistency, and pull data from a Swarm cluster of networks is currently in development. Although there are APIs available to check upload progress.

-   Provide an end-to-end user process to switch data hosting providers at the storage network layer if when a user requests.

-   Not all data may suit such integration, preferably application or application data that is immutable representing a historical state with a concrete data retention period - the Swarm Feeds could address such limitations.

-   Allow service providers of Personium to launch their service in a short period if Swarm potentially provides storage network service to Common European data spaces.

-   Using existing decentralized storage allows different parties to concentrate on their expertise. For example, app developers can concentrate on the features while PDS developers can concentrate on any of the nine components described in “[*Understanding MyData Operators*](https://mydata.org/wp-content/uploads/sites/5/2020/04/Understanding-Mydata-Operators-pages.pdf)” white paper.

-   Considering data are immutable, a Personium unit can keep track of which history of personal data is consumed by a data consumer or an application Unit.

### References

Personium PDS server software: [*https://personium.io/*](https://personium.io/)

Sample App Integrated with Swarm: [*https://github.com/personium/app-swarm*](https://github.com/personium/app-swarm)

MyData Operators Awardees information: [*https://mydata.org/operators/*](https://mydata.org/operators/)

Common European Data Spaces: [*https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12491-Legislative-framework-for-the-governance-of-common-European-data-spaces*](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12491-Legislative-framework-for-the-governance-of-common-European-data-spaces)