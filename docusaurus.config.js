/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Condor',
  tagline: 'A Golang Web Framework For Building APIs',
  url: 'https://condor.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gocondor', // Usually your GitHub org/user name.
  projectName: 'condor.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Condor',
      logo: {
        alt: 'Condor Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/gocondor/condor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Condor.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gocondor/condor.github.io/edit/source',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
