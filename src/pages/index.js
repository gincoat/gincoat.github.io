import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Icon from "@material-ui/core/Icon";

const features = [
  {
    title: 'MVC Like architecture',
    description: (
      <>
        Simple directory structure
      </>
    ),
  },
  {
    title: 'Based on Gin Framework',
    description: (
      <>
        You can use all Gin features
      </>
    ),
  },
  {
    title: 'Routing',
    description: (
      <>
        Router with support of all http methods
      </>
    ),
  },{
    title: 'Routing Groups',
    description: (
      <>
        Group all related routes together
      </>
    ),
  },
  {
    title: 'Middlewares',
    description: (
      <>
        Middlewares before and after processing
      </>
    ),
  },
  {
    title: 'JWT tokens',
    description: (
      <>
        Generate JWT tokens and refresh tokens
      </>
    ),
  },
  {
    title: 'Sessions',
    description: (
      <>
        Memstore, Cookie, Redis powered sessions
      </>
    ),
  },
  {
    title: 'ORM',
    description: (
      <>
        Uses GORM for database
      </>
    ),
  },
  {
    title: 'Authentication',
    description: (
      <>
        Users authentication
      </>
    ),
  },
  {
    title: 'Cache',
    description: (
      <>
        Redis for cache
      </>
    ),
  },
  {
    title: 'TLS',
    description: (
      <>
        Easily install ssl certificates
      </>
    ),
  },
  {
    title: 'Let\'s Encrypt auto certs',
    description: (
      <>
        Let's Encrypt auto certificates manager
      </>
    ),
  },
  {
    title: 'Live-Reloading',
    description: (
      <>
        Live-reloading for development
      </>
    ),
  },
  {
    title: 'Features Control',
    description: (
      <>
        Turn on/off features
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>

    <div  className="text--center">
      <div className="text--center">
          <Icon style={{ fontSize: 80, color: 'gray' }}>done</Icon>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>

    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`A golang framework based on Gin for building modern APIs`}
      description="GoCondor is a golang web framework with an MVC like architecture, it's based on Gin framework, it provides you with an easy-to-use directory structure with a development experience similar to Laravel, made for developing modern APIs and microservices.">
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
              to={useBaseUrl('docs/getting-started')}>
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
      </main>
    </Layout>
  );
}
