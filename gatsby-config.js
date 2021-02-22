module.exports = {
  siteMetadata: {
    title: `John Hartnett`,
    description: `My portfolio site`,
    author: `John Hartnett`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Hartnett's Portfolio Site`,
        short_name: `JJHV`,
        start_url: `/`,
        background_color: `#5f355ae8`,
        theme_color: `#5f355ae8`,
        display: `minimal-ui`,
        icon: `src/images/j-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pacifico`, `overpass`],
        display: 'swap',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
