const path = require("path")

module.exports = {
  title: "TIL",
  description: "Today I Learned",
  theme: "vuepress-theme-book",
  themeConfig: {
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "tianheg/til",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    nav: require('./nav/nav'),
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
    ]
  ],
  extraWatchFiles: [
    '.vuepress/nav/nav.js'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
}

function getFrontendSidebar() {
  return[
    ''
  ]
}

function getBackendSidebar() {
  return [
    ''
  ]
}

function getOthersSidebar() {
  return [
    ''
  ]
}
