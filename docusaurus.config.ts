import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kuromaku Fit-Trak',
  tagline: 'Simple, private workout tracking for iOS',
  favicon: 'img/app-icon.png',

  future: {
    v4: true,
  },

  url: 'https://jmilbery.github.io',
  baseUrl: '/kuromaku-ft-docs/',

  organizationName: 'jmilbery',
  projectName: 'kuromaku-ft-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jmilbery/kuromaku-ft-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/app-icon.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kuromaku Fit-Trak',
      logo: {
        alt: 'Kuromaku Fit-Trak Logo',
        src: 'img/app-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: '/docs/privacy',
          label: 'Privacy',
          position: 'left',
        },
        {
          href: 'https://apps.apple.com/app/kuromaku-fit-trak/id6742313498',
          label: 'App Store',
          position: 'right',
        },
        {
          href: 'https://github.com/jmilbery/Xercise',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Exercise Guide',
              to: '/docs/exercise-guide',
            },
            {
              label: 'Data Export',
              to: '/docs/data-export',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Privacy Policy',
              to: '/docs/privacy',
            },
            {
              label: 'Email Support',
              href: 'mailto:support@kuromaku.com',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'App Store',
              href: 'https://apps.apple.com/app/kuromaku-fit-trak/id6742313498',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jmilbery/Xercise',
            },
          ],
        },
      ],
      copyright: `Copyright \u00a9 ${new Date().getFullYear()} Kuromaku. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
