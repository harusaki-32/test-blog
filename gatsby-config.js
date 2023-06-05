/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Dev Blog",
    description: "Gatsbyで作成したブログです。",
    author: "Engineer K",
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID, // ContentfulのSpace ID
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY, // ContentfulのAPI Key
      },
    },
    `gatsby-plugin-image`,
  ],
}
