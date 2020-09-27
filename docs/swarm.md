---
id: swarm
title: Swarm in a nutshell  
sidebar_label: Swarm in a nutshell 
slug: /swarm
---
import useBaseUrl from '@docusaurus/useBaseUrl';


"***What is certain in today’s digital society is that to be sovereign and in control of our destinies, nations and individuals alike must retain access and control over their data and communication.***" [(Viktor Tron, 2020)](https://www.zotero.org/google-docs/?iCqnRS)

**Key takeaways:**

-   **Swarm is the storage and communication medium for the Ethereum network.**

-   **Future proof web infrastructure provides scalability and self-sustainability as well as anonymity and privacy.**

-   **Peer-to-peer network spreads the load and compensates participants adding guarantees for performance and availability.**

Swarm is aiming to be the **future proof web infrastructure** that will support the Information Society and its Data Economy. The generic properties for this are: **stability, scalability, security, self-sustainability**.

In the light of the original Ethereum goal of building the world computer [(*What Is Ethereum?*, n.d.)](https://www.zotero.org/google-docs/?dTIrqM), needing compute, storage and communication, **Swarm is set out to provide the storage and communication medium for the Ethereum network**.

But not only that, Swarm aims to recreate the otherwise seamless Web 2.0 experience on Web 3.0 technology, both for the developers as well as the users. This means covering scenarios for a whole range of applications - from large file sizes and low frequencies of retrieval to small file sizes and high frequencies of retrieval.
But Web 2.0 shortcomings must also be addressed so Swarm is at its core also aiming for **anonymity and privacy** for the users of the network, providing an incentive layer for its sustainability and therefore **establishing trust in the network**. Also, by removing the middlemen between content creators and consumers, the benefits are spread throughout the network.

Swarm is a peer-to-peer network, meaning each node in the network is treated equally. There is no one central node controlling the network. A peer joining the network just has to know the address of some other node already in the network, after which they can exchange information about other peers and a stable network can be achieved after some time.

Each node gets an address that is randomly generated in the form of a long string. Each chunk of data that is to be stored by the network is also addressable over the network via such a string, also called a hash. Nodes that addresses are close to the address of the chunk of data are assigned to keep that chunk stored and available for the network. As a chunk is distributed to more than one node, a level of redundancy is achieved.

The routing of request for and the transmission of the chunks themselves is done via a method called forwarding Kademlia routing.

<img src={useBaseUrl('images/image15.png')} />


**Figure 1**: The requestor node (+) sends a message to the destination. In step 1, the message goes to a peer that is known to be nearest to the destination. The recipient peer forwards it in the same way in step 2, etc., each time getting closer to the destination. Source: The Book of Swarm [(Viktor Tron, 2020)](https://www.zotero.org/google-docs/?MUHyWz).

This kind of communication strategy has the added benefit of **anonymity for both the sender as well as the receiver**. A zero leak communications network can be established as well as anonymous publishing and browsing.

Chunk is the basic unit of storage in the Swarm network and should be encrypted by default. Data blobs larger in size than one chunk (4096 bytes) are split into chunks and those get distributed to nodes in the network, depending on their address. To reconstruct the data, the addresses of the chunks are “hashed” and stored in other chunks and so on, until just one address remains - the Swarm root hash.


<img src={useBaseUrl('images/image2.png')} />


**Figure 2**: Hashes of chunks are packaged into intermediate chunks and those hashed and stored on a higher level and so on, until a single chunk remains above level n - the Swarm root hash. Source: The Book of Swarm [(Viktor Tron, 2020)](https://www.zotero.org/google-docs/?hrfFuy).

A node receiving a chunk to be stored is oblivious of the fact that more chunks might exist that are needed for reconstruction of the whole data. The data can be reconstructed iteratively however, if the Swarm root hash is known.

**An incentive layer makes sure that nodes are compensated for transmission, storage and availability of data.**

The workings of the network could be compared to a BitTorrent network [(“BitTorrent,” 2020)](https://www.zotero.org/google-docs/?sCDQ2F), from the peer-to-peer perspective. BitTorrent has proven that peer-to-peer sharing of files is feasible and even economic. But it is not suitable for providing the interactive and responsive experience expected from a web application, as there is initial latency present. Or even conceived with economics in mind, rewarding seeders for their services. Finally, it does not tackle issues of privacy, as all nodes advertise the content they are seeding. It was, however, conceived before the era of blockchains, cryptocurrency and incentivisation. Swarm addresses all these issues with an added incentive layer providing certain guarantees of performance and availability while its architecture allows for unprecedented levels of privacy and anonymity using the network.