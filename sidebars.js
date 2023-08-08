/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docsSidebar: [
    {
      type: 'category',
      label: 'GoCondor Docs',
      items: [
        'installation',
        'getting-started',
        'introduction',
        'environment-variables',
        'routing', 
        'handlers',
        'context',
        'request',
        'response',
        'validation', 
        'middlewares',
        'jwt',
        //'auth',
        'cache', 
        'tls',
        'contribute',
        'database-config',
        'database-models',
        'database-crud',
        'database-relationships'
      ],
    }
  ],
  // docsSidebar: [
  //   'intro',
  //   // 'hello',
  //   // {
  //   //   type: 'category',
  //   //   label: 'Tutorial',
  //   //   items: ['tutorial-basics/create-a-document'],
  //   // },
  // ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
