import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { CopyBlock, dracula, a11yDark } from "react-code-blocks";


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const code = `router.Get("/", func(c *core.Context) *core.Response {
		JsonString := \`{\"message\": \"hello world\"}\`
		return c.Response.Json(JsonString)
	})`
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      <div class="row">
        <div class="col col--6">
          <div class="">


        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>


          </div>
        </div>
        <div class="col col--6">
          <div class="code-show">

            <CopyBlock
              text={code}
              language={"go"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
              wrapLines={true}
            />





          </div>
        </div>
      </div>


      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | a Golang Framework`}
      description="GoCondor is a Golang Framework for building APIs">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
