module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/index`,
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'duotone-dark', // night-owl,dracula,duotone-dark,duotone-light,github，night-owl-light，oceanic-next,prism-coy,prism-dark,prism-funky,prism-okaidia,prism-solarizedlight,prism-tomorrow,prism-twilight(didn't work),prism,shades-of-purple,vs-dark
      },
    },
  ],
  siteMetadata: {
    title: `Think Tech`,
  },
}