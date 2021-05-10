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
      '/front-end/': getFrontendSidebar('HTML', 'CSS', 'JavaScript', 'Tools'),
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

function getFrontendSidebar(groupA, groupB, groupC, groupD) {
  return [
    '',
    {
      title: groupA,
      collapsable: false,
      children: [
        'html/basic-html'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'css/basic-css'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'javascript/basic-javascript'
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        'tools/vscode'
      ]
    }
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
