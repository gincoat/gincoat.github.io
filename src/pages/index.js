import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'MVC Like architecture',
    description: (
      <>
        Looks familiar to Laravel fox
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
    title: 'ORM',
    description: (
      <>
        Uses GORM for database
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
    title: 'Let's Encrypt auto certs,
    description: (
      <>
        Let's Encrypt auto certificates manager
      </>
    ),
  },
  {
    title: 'Context Package Integrator',
    description: (
      <>
        Integrate any go package into gin context
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
      </main>
    </Layout>
  );
}
