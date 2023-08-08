import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Routing
// Middlewares
// Validation
// Databases ORM (GORM integrated)
// Emails
// JWT tokens
// Caching (Redis)
// HTTPS (TLS)

const FeatureList = [
  {
    title: 'Routing',
    Svg: require('@site/static/img/routing.svg').default,
    description: (
      <>
        Define your routes in a very simple way and map them their handlers.
      </>
    ),
  },
  {
    title: 'HTTPS (TLS)',
    Svg: require('@site/static/img/tls.svg').default,
    description: (
      <>
       Add your TLS certificates and run your app in https mode..
      </>
    ),
  },
  {
    title: 'Let\'s Encrypt auto certs',
    Svg: require('@site/static/img/letsencrypt.svg').default,
    description: (
      <>
        Fully managed let's encrypt certificates supported with auto renewal.
      </>
    ),
  },
  {
    title: 'Databases (GORM)',
    Svg: require('@site/static/img/database.svg').default,
    description: (
      <>
        GORM is fully integrated to help you query your MYSQL, Postgres, and SQlite databases.
      </>
    ),
  },
  {
    title: 'Middlewares',
    Svg: require('@site/static/img/middleware.svg').default,
    description: (
      <>
        Assign middlewares per-route or globally, before the processing the request or after.
      </>
    ),
  },
  {
    title: 'Validation',
    Svg: require('@site/static/img/validation.svg').default,
    description: (
      <>
        Simplified data validation with over 30 validation rules suppored.
      </>
    ),
  },
  {
    title: 'Emails',
    Svg: require('@site/static/img/emails.svg').default,
    description: (
      <>
       Simple way to send emails via SMTP, SparkPost, SendGrid or MailGun.
      </>
    ),
  },
  {
    title: 'JWT tokens',
    Svg: require('@site/static/img/jwt.svg').default,
    description: (
      <>
        Generate, decode, and check the expiry of JWT tokens to easily manage users authentication.
      </>
    ),
  },
  {
    title: 'Caching (Redis)',
    Svg: require('@site/static/img/cache.svg').default,
    description: (
      <>
        Redis integration to cache your data in simple way with control over TTL.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
