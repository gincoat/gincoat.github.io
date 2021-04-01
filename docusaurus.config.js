/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gincoat',
  tagline: 'A Golang Web Framework For Building APIs',
  url: 'https://gincoat.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gincoat', // Usually your GitHub org/user name.
  projectName: 'gincoat.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gincoat',
      logo: {
        alt: 'gincoat Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/gincoat/gincoat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Gincoat.`,
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
            'https://github.com/gincoat/gincoat.github.io/tree/master/src',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
