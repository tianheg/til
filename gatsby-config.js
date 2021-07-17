module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `Think Tech`,
  },
}