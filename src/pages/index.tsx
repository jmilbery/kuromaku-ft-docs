import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="img/app-icon.png"
          alt="Kuromaku Fit-Trak"
          style={{width: 120, height: 120, borderRadius: 24, marginBottom: 16}}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginLeft: 12}}
            href="https://apps.apple.com/app/kuromaku-fit-trak/id6742313498">
            App Store
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Score-Based Calendar',
    description: 'Days colored by your daily score across 5 tiers. Rewards variety across strength, cardio, stretching, and hydration.',
  },
  {
    title: '30 Exercises, 3 Categories',
    description: 'Strength training with weight tracking, cardio with minutes, and stretching with set checkboxes. Rename any exercise to fit your routine.',
  },
  {
    title: 'Private by Design',
    description: 'No accounts, no servers, no analytics. All data stays on your device. Export to CSV anytime.',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Kuromaku Fit-Trak — simple, private workout tracking for iOS">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            <div className="row">
              {features.map((feature, idx) => (
                <div key={idx} className={clsx('col col--4')} style={{marginBottom: '1rem'}}>
                  <div className="text--center padding-horiz--md">
                    <Heading as="h3">{feature.title}</Heading>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
