const path = require("path")

module.exports = {
  title: "TIL",
  description: "Today I Learned",
  theme: "vuepress-theme-book",
  themeConfig: {
    logo: "/logo.svg",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "tianheg/til",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    nav: [
      { text: "Home", link: "/" },
      { text: "Front-end", link: "/front-end/" },
      { text: "Back-end", link: "/back-end/" },
      { text: "Others", link: "/others/" }
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]]
        },
        {
          title: "Front-end",
          collapsable: false,
          children: [
            ["/html/what-is-html-and-html5", "HTML"],
            ["/css/what-is-css", "CSS"],
            ["/javascript/what-is-javascript", "JavaScript"]
          ]
        },
        {
          title: "Back-end",
          collapsable: false,
          children: [
            ["/go/install-go-on-ubuntu", "Go"]
          ]
        },
        {
          title: "Others",
          collapsable: false,
          children: [
            ["/docker/add-registry-mirrors-for-ubuntu", "Add Registry Mirrors For Ubuntu"]
          ]
        }
      ]
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
