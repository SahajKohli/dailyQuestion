module.exports = {
  siteMetadata: {
    title: `Daily Algo Questions`,
    description: `A dose of interview questions per day to keep your skills sharp `,
    author: `Sahaj Kohli`,
  },
  pathPrefix: "/dailyQuestion",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
