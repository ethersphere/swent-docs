---
id: fairos
title: FairOS decentralized file storage
sidebar_label: FairOS - decentralized file storage
slug: /fairos
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## FairOS-dfs motivation

We can define the Internet operating system as “any type of operating system designed to run all of its applications and services through an Internet client …” [(“Internet OS,” 2019)](https://www.zotero.org/google-docs/?ikiHo2) . The advantages being thin clients, and the user’s applications, documents and preferences placed in the Internet cloud - the perfect platform for software as a service. FairOS will provide such an operating system.

Swarm by itself does provide for the concept of files, although is in essence a more low level provider of storage for chunks (among other possible uses). Layers have to be built on top of it, to provide functionality similar to established cloud services, such as filesystems.

FairOS-dfs is an open source project of the Fair data society. It can be used by other projects to easily have a filesystem layer available on top of Swarm, working with files similarly to a local filesystem. The logical drive structure can be used as a data store or an application store, for example.

## FairOS-dfs features

FairOS-dfs is a layer on top of Swarm that provides the filesystem layer. It connects to a Bee node to interface with Swarm and has an HTTP API exposed, as well as a read-eval-print (REPL) console available. It can be used as a standalone personal data drive or in conjunction with other layers as a data provider.

FairOS-dfs abstracts the underlying Swarm chunk store to make higher level concepts available to users.

When a new user account is opened, a 12 word random mnemonic key is generated. This key enables the user to login to his account from anywhere (any computer running FairOS) and get access to the same contents. Everything is stored on Swarm, the key is the only thing that needs to be moved around systems.

To use FairOS-dfs, the user has to create at least one pod. A pod is like a logical drive on top of Swarm. Inside the pod, folders can be created, like on a “desktop” filesystem. Folders can contain multiple files.

If the user wants to share a file, he can do so by making it sharable and sharing a reference to it with another user. The other user can receive the file into a specific folder in their pod.

The key to access a user account can be considered as a single sign on option for accessing all the data of a specific user - stored data, apps data, etc.


<img src={useBaseUrl('images/image10.png')} />


## Future possibilities

The idea behind FairOS-dfs is to offer functionalities to build on top of Swarm to the community via the Fair data society initiative. The needs are many, but we list some most pressing issues that would need to be addressed as first steps.

Besides filesystem abstraction, other data structures will need to be supported to cover the full needs of development, specifically for Dapps and other use cases, for example as a compute layer data provider.

A more elaborate system for permission management will have to be implemented, allowing for sharing on different levels of granularity and also revoking sharing permissions.

## References

FairOS-dfs github page: [*https://github.com/fairDataSociety/fairOS-dfs*](https://github.com/fairDataSociety/fairOS-dfs)