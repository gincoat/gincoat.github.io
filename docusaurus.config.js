/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  title: 'GoCondor',
  tagline: 'A Golang Web Framework For Building APIs',
  url: 'https://gocondor.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gocondor', // Usually your GitHub org/user name.
  projectName: 'gocondor.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GoCondor',
      logo: {
        alt: 'GoCondor Logo',
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
          href: 'https://github.com/gocondor/gocondor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} GoCondor.`,
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
            'https://github.com/gocondor/gocondor.github.io/edit/source',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
