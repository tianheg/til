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
      '/api/': getApiSidebar(),
      '/guide/': getGuideSidebar('Guide', 'Advanced'),
      '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
      '/theme/': getThemeSidebar('Theme', 'Introduction')
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
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
}
