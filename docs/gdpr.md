---
id: gdpr
title: GDPR
sidebar_label: GDPR requirements (Draft)
slug: /gdpr
---

Swarm is built as a global peer-to-peer storage based on blockchain and smart contracts. From a legal perspective, it means that its operations will be subject to many different national laws depending on the citizenship of the person whose personal data is stored on Swarm or, for example, the location of the company processing personal data using Swarm. In such cases the common approach for a lawyer is to choose the strictest applicable regulation and ensure that the solution under development complies with it. In the privacy area GDPR [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?XSdvd7) is viewed by most of the experts as one of the leading regulations worldwide with a special focus on the interests of the people whose personal data is being processed. So we decided to choose GDPR as a compass in the privacy ocean. Below we will briefly describe the essence of the GDPR regulations and in the following chapters of this Whitepaper we will also share our view on how Swarm helps to comply with different GDPR rules or how it should be treated from GDPR perspective itself.

### The scope of GDPR

GDPR defines personal data as any information relating to an identified or identifiable natural person (Article 4(1)). This is in line with the Council of Europe’s Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data No. 108 (Article 2(a) [(*Details of Treaty No. 108*, n.d.)](https://www.zotero.org/google-docs/?PcEhCO)). This is quite a broad definition, in particular, when it comes to the meaning of the words “identifiable” and “relating to”. The local data protection authorities put specific focus on that in their guidelines [(*What Is Personal Data?*, 2020)](https://www.zotero.org/google-docs/?CCTf83) indicating that the personal data should not necessarily include the name of the person: e.g. “the holder of line number 01 53 73 22 00 often makes calls to Senegal” [(*Personal Data : Definition | CNIL*, n.d.)](https://www.zotero.org/google-docs/?9Ub8R9).

GDPR’s material and geographical scope is defined in its Articles 2 and 3. It basically covers most of the processing of personal data relating to individuals in the European Union with the exception of processing of personal data by natural persons in the course of a purely personal or household activity, processing of personal data in relation to criminal proceedings and some other cases (GDPR Article 2(2), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?K0uX8w)). GDPR should be taken into account for the companies who plan to process the personal data of EU citizens or market their goods and services in the European Union.

### The main roles under GDPR

**Data subject** is the natural person whose personal data is being processed (GDPR Article 4(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?nNuIzL)). GDPR broadly defines the rights of the data subject (GDPR Chapter III, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?mWh7ds)) some of which we mention here below.

**Controller** is the person who determines the purposes and means of the processing of data subject’s personal data (GDPR Article 4(7), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?Qc1GPs)). It might be a natural or legal person, public authority, agency or other body. The controller is the main counterparty with the data subject under GDPR. It is obliged to have proper legal ground for processing personal data, to provide the data subject with specific information about processing of the personal data and to ensure confidential and safe processing (GDPR Articles 6, 12-14. 24 and others, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?FTCJmr)).

**Processor** is the person appointed by the controller which processes personal data on behalf of the controller (GDPR Article 4(8), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?iNO2na)). It might also be a natural or legal person, public authority, agency or other body. The main obligation of the processor is to ensure safe and confidential processing (GDPR Article 28, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?RTY1Fq)).

The controller is a very important person from the GDPR perspective. However, it is not always easy to identify a data controller in the blockchain world[6].

### Main principles of processing

GDPR lays out six main principles of processing as the foundation for protection of data subject’s rights related to personal data (GDPR Article 5(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?hVhBh4)):

-   **Lawfulness, fairness and transparency**

> By “lawfulness” GDPR means that every processing of personal data should be based on a certain legal ground. In brief, these grounds are: 1) data subject’s consent; 2) contract with the data subject; 3) the legal regulation requiring processing of personal data; 4) vital interests of the data subject or other natural person; 5) public interests; 6) controller’s legitimate interests (GDPR Article 6(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?teVJr2)). There are many aspects which need to be taken into account when choosing the right legal ground for processing. European Data Protection Board has published several guidelines regarding this topic which we would recommend to study, if necessary [(Smith, 2018)](https://www.zotero.org/google-docs/?Ci1E3N).
>
> If the personal data under processing reveals racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership of the data subject it is subject to specific rules mentioned in Article 9 of the GDPR. Same is true regarding genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation.
>
> “Fairness” is basically the controller’s obligation to make nothing unlawful with personal data and not to cheat with the data subject.
>
> The transparency obligation means that the controller should provide the data subject with the relevant information about the processing before it starts, and this should be done in the language easily understandable by the data subject (GDPR Article 12(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?1ZHw1U)). It also correlates with the data subject’s right to obtain from the controller some specific information during the processing (GDPR Article 15, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?9m64RK)).

-   **Purpose limitation**

> Processing of personal data shall in all cases be limited to the purpose for which it was collected. In case the controller desires to extend the purpose of processing or change it, it should ask for the respective consent from the data subject except for some cases specified in the GDPR (e.g., archiving purposes in the public interest or for scientific or historical research) (GDPR Article 5(1)(b), 89(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?3FuFeP)).

-   **Data minimization**

> The controller shall limit the processing only to the amount of personal data necessary to achieve the desired purpose. The personal data shall not be processed by the controller unless the controller has strong arguments that it’s necessary to do so.

-   **Accuracy**

> This principle means that the controller should both actively ensure that the personal data is accurate when it’s collected (either directly from the data subject or from other sources) and that it is rectified or deleted soon after the error is found.

-   **Storage limitation**

> The controller shall store the personal data only for the amount of time necessary to achieve the purpose of processing. As soon as the purpose is achieved (or the controller understands that there is no longer need in processing of personal data) the personal data shall be deleted. The exception is made for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) of GDPR.

-   **Integrity and confidentiality**

> GDPR puts a strong emphasis on protection of personal data itself, so both the controller and the processor should ensure technical and organizational measures to process the personal data confidentially and safely (GDPR Articles 24, 28, 32 and others, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?FYLEHl)). And here, in particular, Swarm may help companies complying with the legal requirements.

One other requirement for the controller which needs to be mentioned is maintenance of records of processing activities (principle of accountability) (GDPR Article 30, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?txcj9S)). Currently this might be one of the headaches for the organizations, but the blockchain might be the perfect solution for the future.

### Data subject rights

Further to the abovementioned principles the GDPR provides for the data subject rights regarding processing of their personal data. In view of the topic of this whitepaper the main rights to be reviewed are:

-   **Right of access (GDPR Article 15, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?iM2TB4))**

> The data subject has a right to ask the controller for the specific information about processing his/her personal data, including purposes of processing, the envisaged period of processing (if it’s possible to determine it), the recipients of the personal data (if transferred to third parties) etc. The GDPR also introduced specific timeline for the controller to answer data subject access request[7]. Currently this is one of the hardest tasks for the large companies to comply with[8].

-   **Right to erasure (“right to be forgotten”) (GDPR Article 17, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?neFfz7))**

> The data subject has a right to ask the controller for deleting his/her personal data in case the personal data is no longer necessary for the purposes it was collected, or the data subject withdraws its consent for processing (when the processing is based on data subject’s consent), or there is other ground stated by the GDPR. This right is of particular interest with regard to Swarm in case somebody decides to store personal data there.

-   **Right of rectification (GDPR Article 16, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?bnCHlJ))**

> If the data subject finds out that his/her personal data being processed by the controller is inaccurate, he/she has a right to ask for its correction without undue delay. The experts regularly discuss the implications of exercising this right in the blockchain world, and up-to-date there are different views on this subject[9].

-   **Rights related to automatic processing (**GDPR Article 22, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?3oUh6r)**)**

> If the controller exercises automated decision making, including profiling, based on people’s personal data, every such person has a right to object to it and the controller must at least provide the data subject with an ability to ask for the human intervention to such automated process so that the data subject may express his/her point of view and contest the decision.

### Controller’s obligations

Obviously, all data subject rights correspond with the respective obligations on the side of the controller and/or processor. However, there are certain other controller’s obligations which are important in view of the topic of this whitepaper.

The concepts of “privacy by design” and “privacy by default” (GDPR Article 25, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?njMKwr)) require the controller to think of the personal data protection far before it starts processing personal data. Regarding IT products it envisages that the personal data compliance measures shall be implemented into the product at the design phase already, and that the personal data to be processed within the product is limited to the amount strictly necessary for functioning of the product.

From technical perspective the GDPR puts an obligation on the controller and the processor to implement the necessary measures to ensure the right level of security and confidentiality of the personal data being processed (GDPR Article 32, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?rE30bV)). As stated in GDPR, the measures shall be determined “taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons” (GDPR, op. cit., Article 32(1), [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?cUNmC9)). As the news about personal data leakages pop up every month, this is definitely one of the hot topics for every organization in the personal data compliance area.

The controllers also have some organizational and operational obligations, including the need to establish the data protection officer (DPO) position and to conduct the data protection impact assessments (DPIA), when required by the GDPR (GDPR Articles 35, 37-39, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?qitvrv)). The European Data Protection Board maintains the register of cases where the DPIA is necessary under the decisions of the national data protection authorities [(*Register for Decisions Taken by Supervisory Authorities and Courts on Issues Handled in the Consistency Mechanism*, n.d.)](https://www.zotero.org/google-docs/?wsfJwz).

And finally there is the concept of cross-border transfer (GDPR Articles 44-49, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?eQIcEj)), which is actually one of the important topics to think of in the context of Swarm. As the data protection rules differ from country to country, the GDPR introduces specific regulations governing transfer of personal data from EU to third countries in order to protect the rights of the data subjects. By default, the transfer is allowed to the countries with so-called “adequate” personal data regime (GDPR Article 45, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?Vly805)) meaning that this country ensures a similar level of protection for the rights of data subjects. In order to transfer personal data to other countries the controllers should implement appropriate safeguards like binding corporate rules, standard data protection clauses etc. (GDPR Article 46, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?2oltCf)).

Non-compliance with the abovementioned principles, rights and obligations by the controllers and processors may lead to quite heavy fines up to 20 million euros or 4% of the total worldwide annual turnover of the organization in the preceding financial year (GDPR Article 83, [(*EUR-Lex - 32016R0679 - EN - EUR-Lex*, n.d.)](https://www.zotero.org/google-docs/?EszR65)).