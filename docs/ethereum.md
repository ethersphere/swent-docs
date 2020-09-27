---
id: ethereum
title: Ethereum ecosystem role
sidebar_label: Ethereum ecosystem role
slug: /ethereum
---
**Key takeaways:**

-   **Ethereum ecosystem has a need for storage of data consistent with decentralisation principles.**

-   **Swarm offers solution for several problems inherent in blockchain.**

-   **Solutions of the ecosystem must have interoperability in mind.**

The Ethereum ecosystem plays a large role in enabling the Fair data society. Its values have always been about decentralization, in the sense that “intermediaries” could no longer control the society, removing the dependence the individuals have on them and moving towards a Web 3.0 vision.

The initial vision for Swarm was that it would be one of the three pillars needed by Ethereum network to build the world computer - the storage part. In this regard it would enable Dapps to store their data in a decentralized and trustless way, enabling full decentralization. Another use case would be that blockchain data would be stored in Swarm, as the storage is immutable and allows for faster synchronization of state for nodes.

The Ethereum Enterprise Alliance Mainnet working group conducted a study in early 2020 to reveal the major barriers and challenges to development on the Ethereum Mainnet [(The EEA Mainnet Working Group Use Case Task Force, 2020)](https://www.zotero.org/google-docs/?DPNzU3). Among the top most barriers were noisy neighbours (network congestion), data locality problems and data privacy problems with unpredictability of (gas) costs also ranking high. The benefits of using Mainnet (or other public permissionless blockchain) were the security/immutability, potential for interoperability with network effects. The major concern was privacy and leaking of sensitive data.

Although not completely solving all the problems, Swarm storage addresses these issues while at the same time retaining the mentioned benefits of a public permissionless blockchain. We will describe how Swarm handles these issues in its network.

Swarm is designed to have mechanisms for efficient routing of traffic, to avoid its own problems of congestion as much as possible - acting as a content distribution network with load balancing. Data should travel between nodes in a most efficient way ensured by proper design of the incentive systems. Scalability is achieved by nodes reacting to popularity of content and hosting it, as it is worthwhile for them to do so. By leveraging the Swarm network for certain data storage instead of Ethereum Mainnet, the latter would have decreased traffic and **less problems with network congestion**.

The **compliance issues of data locality** and KYC/**identity** can be solved by using special pools of resources that have been through the KYC process and are identified as being in a certain locality and having a certain identity. Although this is not a core Swarm solution, it can be built on a layer above it. One can imagine these pools still being a part of the public permissionless network or even completely separate. Certain kinds of traffic would be only allowed to travel within these pools of resources.

**Data privacy** is ensured by the fact that data is not easily reconstructed and nodes do not see what data they are storing. Additionally, the data should and can always be encrypted. The problems present by the fact of immutability of the blockchain are being addressed on Swarm with work in progress on enabling deletion of data, if the data is uploaded to the network with that option specifically enabled. Otherwise, data is deleted as part of the garbage collection for unpopular data.

The primary audience for Swarm still remains the Ethereum community, and **Swarm can offer the third pillar needed for the world computer** and even more than that. For example, the features it offers include private messaging using the Swarm network.

Furthermore, it is the energy, motivation and pursued values of the Ethereum ecosystem that should spearhead the efforts towards a fairer data economy, leading by example and empowering individuals. As the enterprise ecosystem is maturing, **the solutions must cater for interoperability** in mind, lest the efforts could be in vain and trust of users lost.

