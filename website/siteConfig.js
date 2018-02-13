/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'React Native Elements' /* title for your website */,
  tagline: 'Cross Platform React Native UI Toolkit',
  url: 'https://facebook.github.io' /* your website url */,
  baseUrl: '/test-site/' /* base url for your project */,
  projectName: 'test-site',
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { doc: 'overview', label: 'Component API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  disableHeaderTitle: true,
  /* colors for website */
  colors: {
    primaryColor: '#2089dc',
    secondaryColor: '#212121',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: '',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  editUrl:
    'https://github.com/react-native-training/react-native-elements/edit/master/docs/',
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/react-native-training/react-native-elements',
};

module.exports = siteConfig;
