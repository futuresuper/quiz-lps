module.exports = {
  siteMetadata: {
    title: `Future Super Quiz`,
    description: `Are you and Future Super a good ethical fit? Take the quiz and find out`,
    author: `@myfuturesuper`,
    image:
      "https://uploads-ssl.webflow.com/5eaa3738ce9b1d45bce6230a/5ec22200ab934f2bf1b0f5af_wanted_fb-min.png",
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
        name: `Future Super | Quiz`,
        short_name: `Future Super | Quiz`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-51449872-1`,
        head: false,
        anonymize: false,
      },
    },
  ],
}
