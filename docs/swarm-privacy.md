---
id: swarm-privacy
title: Swarm specific privacy features
sidebar_label: Swarm specific privacy features
slug: /swarm-privacy
---

As a decentralized peer-to-peer storage Swarm provides for unique opportunities described in this Whitepaper. By being cutting-edge technology Swarm presents certain challenges from the regulation perspective. When drafted and enacted, even the most contemporary laws like GDPR have not taken into account blockchain technology and smart contracts. As the experts and regulators worldwide are discussing the routes to apply current rules to these technologies we decided to share our opinion on these matters with regard to Swarm [(*Blockchain and the GDPR*, n.d.)](https://www.zotero.org/google-docs/?f8QFg4).

This section shall not be treated as legal advice, but should rather be seen as an invitation to review the decentralized peer-to-peer storages in general and Swarm, in particular, from a privacy perspective.

*Where the data is located? What rules are applicable to data being stored in Swarm?*

Swarm is a decentralized storage, i.e. the data is stored by the independent nodes *and* no specific node stores all of the data put by a random person, except evidently the node uploading this data to Swarm and the nodes which will download this data by request[1]. When the data is uploaded to Swarm, it is split into chunks (parts of the file, 4Kb each) with each chunk being duplicated several times (to avoid loss of data due to potential unavailability of a specific node in a given time). Then all of these chunks are put on different nodes being chosen using the algorithm embedded in Swarm protocol. Every such node might be located in any country and the use of VPN connection might even hide the actual location of the node, even if we decide to check for it. However, as no node does contain the data in full[2] one can’t choose the law applicable for the personal data being stored on Swarm based on the location of nodes.

Therefore, we believe that the law applicable to the specific data in Swarm should be chosen either depending on the nature of this data (e.g., personal data of the EU citizens is protected by the GDPR dependless on its location), or the person who puts this data to Swarm, or the person who gets access to the data in Swarm.

*What about the cross-border transfer rules?*

As we have already pointed out, currently cross-border transfers of personal data are a hot topic for companies dealing with the data of EU citizens. So this question is definitely on the board when a company considers the place where it stores personal data of its consumers, clients, employees etc.

As mentioned above, the data being put on Swarm doesn’t actually exist in any specific place/on any specific node/ in full, except for the node which uploaded this data to Swarm and the nodes which will download this data by request. Therefore, in our opinion, the mere fact that the data is uploaded to Swarm doesn’t mean that the data has left the country where the uploader is located. Only if (and when) the person located in a third country gains access to this data using Swarm, the data might be treated as transferred to this third country. In our opinion, it means that use of Swarm doesn’t entail mandatory cross-border transfer unless the company allows for downloading the data from Swarm using the nodes located in a different country.

A separate note might be made for the processing of personal data governed by the laws with a localization rule (e.g., Russia, China, Kazakhstan)[3] [(*How to Comply with Data Localization Regulations amid COVID-19’s Impact*, n.d.)](https://www.zotero.org/google-docs/?LEkJYM). We believe that uploading data into Swarm should not be treated as the violation of this rule as the data doesn’t leave the country of its origin unless this company allows access to this data by somebody located in a different country. However, the actual answer to this question heavily depends on the intent and the wording of the specific regulations, so in every specific case one should consult with the local legal advisor.

*Are Swarm nodes the controllers/processors?*

According to the GDPR the controller is the person who determines the purposes and means of the processing of personal data (GDPR Article 4(7) [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?YefPKK)). The processor is the person which processes personal data on behalf of the controller (GDPR Article 4(8) [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?Yg0EwP)). With regard to the blockchain actors there is a debate as to who is who when the personal data is processed using the blockchain (pages 17-18 [(*Blockchain and the GDPR : A Thematic Report*, n.d.)](https://www.zotero.org/google-docs/?LHzhV3)).

Based on the definition of the “controller” it’s difficult to believe that the Swarm nodes are the entities determining the purposes of processing of personal data, if it’s uploaded to Swarm. In our view, the data controllers should rather be the uploaders who ask the uploading node to put certain personal data into Swarm[4].

The Swarm nodes’ status as data processors may depend on the situation. The French data protection authority, Commission Nationale Informatique & Libertés (CNIL), has shared its opinion that the miners in a blockchain and even the smart contract developers may become the data processors in certain cases (pages 3-4 [(*Blockchain and the GDPR*, n.d.)](https://www.zotero.org/google-docs/?F7dca7)). We believe that the Swarm node uploading personal data by request of its client may be treated as the data processor. Similarly, if the Swarm node stores the personal data in a cleartext, i.e. one may reasonably decide that the stored data falls under the personal data definition, such a node should be treated as the data processor. In these cases the nodes shall either include the respective data protection provisions (GDPR Article 28(3) [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?XECRbc)) into their agreements with clients (data controllers), or implement some technical safeguards preventing them from processing personal data at all.

*What Swarm tools help the controllers to comply with the abovementioned GDPR requirements?*

Swarm contains, in particular, the following tools enabling the controller, who decides to use Swarm as the storage of personal data, to comply with the GDPR requirements:

-   Blockchain for keeping records of processing activities, including permissioned, audited, logging access to the personal data stored in Swarm

> Apart from the general public and private blockchain network, permissioned blockchain provides an additional access control layer to allow specific actions to be carried out by identifiable participants. Unlike centralized log and audit systems, blockchain-based logging and auditing systems can reduce the overall storage consumption and improve its trust-worthy auditability with the immutable nature. At high-level, Swarm rewards popular contents and the unpopular contents could be potentially Garbage Collected. It may imply unpopular contents for audit purposes and may need other incentive schemes to be persisted. The experimental SMEAR (Secure Ways of Ensuring ARchival or SWarm Enforcement And Registration) contract allows nodes to register their public key to become accountable participants in the swarm by putting up a deposit. This contract provides an incentive to decrease the risk that the data will be lost, the owner may purchase storage promises from other nodes as a form of insurance.

-   “Garbage collection” tool for erasing, rectifying or restricting the processing of personal data by demand of the data subject

> When files are uploaded to the Swarm Storage network, Swarm splits files into chunks and stores the chunk address in the Pin Index. Swarm also assumes that each of the Swarm nodes will allocate an appropriate percentage of chunks based on the storage pledged. If the storage node reaches to the pledged threshold, Swarm tries to Garbage Collect those least accessed chunks. Eventually these Garbage Collected chunks will disappear from the network. Therefore, data that is not accessed, eventually disappears from the network unless it’s paid for by the data owner.

-   *“dream* protocol” (under development) for erasing, rectifying or restricting the processing of personal data by demand of the data subject

> Primitive property of Immutability implies cost of deletion and access revocation. Even with physical storage devices, removal of information is both unenforceable and impractical. A common assumption is that ordered information removal should make data inaccessible through typical precedent methods of access. The *dream* protocol describes five attributes of storage content access control in Swarm’s implementation, and the protocol is built on top of DISC’s API:
>
> **D**eniable - content uses the dream key as one time pad for decryption. Potentially multiple content chunks can use the same dream key, the key’s association to any content must be deniable.
>
> **R**evocable - access granted by the dream keys is revocable. Revoking access from all parties including oneself is considered deletion.
>
> **E**xpirable - the dream key allows for one-time use only
>
> **A**ddressable - access can be granted to a neighbourhood within permitted storage network range
>
> **M**alleable - resilient to churn and dynamic network size change, must be reusable and upgradable across grantees

-   Feeds data structure for rectifying the erroneous data

> The standard way of maintaining the same pointer to data mutation is using Ethereum Name Service (ENS). However, ENS as an on-chain feature has a few technical limitations for our use-cases. For instance, any updates to ENS resolver will cost energy to execute on-chain; data change rate is bottlenecked by the new block mining rate; ENS resolution requires your node to be synced to the blockchain. Swarm Feeds provide an effective way to persist identifiers for mutable data without using ENS. It is also possible to use Swarm Feeds in combination with ENS when registering the initial feed manifest address , and the ENS key will always resolve to the latest Feed address.

*How does Swarm allow for compliance with the data subject’s right to erasure (“right to be forgotten”)?*

Every data subject has a right to ask for erasure of his/her personal data in case the purpose of processing has been achieved, or there is no more need for the processing of this data. Currently the Swarm protocol includes “garbage collection” procedure, which allows for deletion of the data being stored by the Swarm nodes in the following way:

-   Every node is motivated to support the Swarm protocol and store the data because it is paid for it.

-   If the data owner (which is, by default, the person who puts the data into Swarm) stops paying for the storage of this data in Swarm, the Swarm nodes become demotivated to store it.

-   So, this data is now marked as “garbage” and should basically be replaced by the newer data received by said node for storage.

There are 3 main issues with this “garbage collection” process from the privacy perspective:

1.  There is no control over the time needed for the “garbage” data to be replaced by the new one. It depends on many factors which are relevant to each specific node.

2.  There is no way to guarantee that all the nodes will comply in full with this “garbage collection” process.

3.  If somebody else decides to continue paying for the storage of this “garbage” data, the process doesn’t work.

Therefore, the work is in progress on a completely new protocol called *dream* intended to completely resolve this matter and provide for a verifiable way to delete the data from Swarm, if this data was uploaded to Swarm as “deletable”.

*How does Swarm allow for compliance with the data subject’s right to rectification?*

Currently Swarm only allows to replace the incorrect data by uploading new and correct data and stopping to pay for the old, incorrect data. Although it means that the issues are similar to the ones described re the right to erasure above, such an approach might be viewed as driving towards compliance with GDPR (page 9 [(*Blockchain and the GDPR*, n.d.)](https://www.zotero.org/google-docs/?abgNfN)).

Implementation of the *dream* protocol should definitely help bring this question much closer to full compliance with GDPR.

*How does Swarm allow for compliance with the data subject’s right to restrict the processing?*

The right to restrict the processing of personal data is intended to act as a quick tool to prevent violation of the data subject’s right or minimize the consequences of such violation. However, currently Swarm can’t help exercising this right if the data subject’s personal data is put into Swarm - the main issue once again is with uncontrollable time of reaction of nodes to the “garbage collection” process. We expect this situation to change as soon as the *dream* protocol is implemented, since it will allow for much quicker response from the nodes to the request by the data owner for the stop of the personal data processing.
