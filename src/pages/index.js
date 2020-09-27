import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Enterprise collaboration as driver of fair data economy',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
      The problems we see today, arise mostly out of existing business models and misaligned incentives.<br></br> <br></br> Moreover, Swarm enables new fair data business models and ethical services that respect human rights and enable fair distribution of value. Adoption by enterprise is thus key to facilitate paradigm change.
      </>
    ),
  },
  {
    title: 'Interoperability, privacy and regulatory compliance',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
      Questions like how should an enterprise deal with GDPR and Swarm are common for many businesses. These are common challenges and it only makes sense the enterprise ecosystem collaborates.<br></br> <br></br> Clear answers and best practices related to satisfying regulatory requirements, make the decision to build on Swarm easier, but even more importantly, faster, cheaper and safer.
      </>
    ),
  },
  {
    title: 'Zero-cost hosting infrastructure that generates revenues not costs',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      Swarm’s incentive model creates unique economic model that enables zero-cost hosting and revenues generation through providing services and hardware to the Swarm network.
      <br></br> <br></br>Enterprises get a self-sovereign cloud that offers DDOS-resistance, zero-downtime, scalability and privacy-by-design out of the box while they keep full control over their data.  Swarm enables enterprises to reclaim their role and sovereignty within the emerging fair data economy.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="disclaimer">
        <p>Disclaimer: This document is not intended to constitute legal advice; instead, all information, content, and materials available in it are for general informational purposes only. The descriptions of technical implementations / integrations should not be considered technical advice; they are provided for informational purposes only and not as production ready software implementations.**
</p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
