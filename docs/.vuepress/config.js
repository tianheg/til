const path = require("path")

module.exports = {
  title: "TIL",
  description: "Today I Learned",
  theme: "book",
  themeConfig: {
    repo: "tianheg/til",
    searchPlaceholder: "Search...",
    docsDir: "docs",
    docsBranch: 'main',
    editLinks: true,
    editLinkText: "Edit this page on Github",
    nav: require('./nav/nav'),
    smoothScroll: true,
    sidebar: {
      '/front-end/': getFrontendSidebar(),
      '/back-end/': getBackendSidebar('Guide', 'Advanced'),
      '/others/': getOthersSidebar('Plugin', 'Introduction', 'Official Plugins')
    }
  },
  plugins: [
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/"
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  extraWatchFiles: [
    '.vuepress/nav/nav.js'
  ],
  markdown: {
    lineNumbers: true
  }
}

function getFrontendSidebar() {
  return [
    '',
    'html',
    'css',
    'javascript',
    'vscode'
  ]
}

function getBackendSidebar() {
  return [
    '',
    'ubuntu'
  ]
}

function getOthersSidebar() {
  return [
    '',
    'resilio-sync'
  ]
}
