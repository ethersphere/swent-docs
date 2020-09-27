---
id: fairdrive
title: Fairdrive 
sidebar_label: Fairdrive - personal data store
slug: /fairdrive
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The current data economy allows large corporations to make profits by leveraging the private data of consumers, while the respect for their privacy is under question. Users willingly hand over their own, generated data in order to receive services and emotional wellbeing. We can enable users to experience the same services and emotional feedback without handing over the control over their being. Encryption and decentralized infrastructure give way to a future where people are truly free in choice and expression. In order to easily manage one’s digital avatars and their earnings, Fairdrive is being created.

Fairdrive is a dApp that enables decentralized storage on Swarm. It consists of a typical “Drive” interface with files and folders, and a BZZ wallet to manage token balances and keypairs. Under the hood, an engine is running a filesystem on top of Ethereum Swarm.

Fairdrive consists of these parts:

-   Fairdrive &gt; a dapp

-   Fairdrive.js &gt; a lightweight javascript library enabling (d)apps to use Fairdrive Connect

-   Fairdrive Engine &gt; a filesystem running on Swarm

### Fairdrive features

Fairdrive offers basic feature comparable to some well known more centralized solutions, but with some important differences:

-   Data is encrypted out-of-the box

-   Data is controlled by the user of Fairdrive

-   Data is stored in Swarm decentralized network

The layer immediately below Fairdrive is FairOS-dfs, providing file system functionality. A layer below is Swarm chunk storage.

A user account can be opened or restored by using a 12 word mnemonic seed phrase. A password is used to protect the generated private key.


<img src={useBaseUrl('images/image3.png')} />

Fairdrive presents a folder structure in a user interface.

### Future possibilities

Fairdrive is open source and will be maintained as the interface to the underlying FairOS-dfs.

The possibilities for upgrades are many, but the direction will be in enabling easy sharing to individual accounts and groups - in the sense of teams.

### References

Fairdrive github page: [*https://github.com/fairDataSociety/Fairdrive*](https://github.com/fairDataSociety/Fairdrive)