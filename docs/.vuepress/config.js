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
            ["/html/what-is-html-and-html5", "What Is HTML And HTML5?"],
            ["/html/use-hx-tag-write-helloworld", "Use Hx Tag Write Helloworld"],
            ["/html/use-p-tag-add-paragraph", "Clothes 👚"],
            ["/basics/sleep", "Sleep 😴"]
          ]
        },
        {
          title: "Extras",
          collapsable: false,
          children: [
            ["/extras/energy", "Energy ⚡️"],
            ["/extras/goods", "Goods 🔧"],
            ["/extras/books", "Books 📚"],
            ["/extras/hygiene", "Hygiene 🚿"],
            ["/extras/activities", "Activities 🎨"],
            ["/extras/transport", "Transport 🚆"],
            ["/extras/internet", "Internet 📶"]
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
