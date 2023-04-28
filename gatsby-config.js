/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://htslabs.com`,
    title: `Thomson Solutions At Work`,
    company: {
      company: `Thomson`,
      tag: `Solutions At Work\u2122`,
      address: `1121 S. Cleveland St.`,
      city: `Oceanside`,
      state: `CA`,
      zip: `92054`,
      phone: `+1(760) 757-8080`,
      tollfree: `(800) 541-4792`,
      email: `info@htslabs.com`,
    },
    brand: {
      standard: `Standard|Filter Vial`,
      lowevap: `Low Evap|Filter Vial`,
      nano: `nano|Filter Vial\u00AE`,
      extreme: `eXtreme|FV\u00AE`,
      extractor: `eXtractor3D|FV\u00AE`,
      og: `Optimum Growth\u2122`,
      rc: `Rapid Clear\u00AE`,
      uyf: `Ultra Yield\u00AE`,
      plasmid: `Plasmid+\u00AE`,
      airotop: `AirOtop\u2122`,
      singlestep: `SINGLE StEP\u00AE`,
    },
  },
  /* Your site config here */
  flags: { FAST_DEV: true },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://htslabs.com",
        sitemap: "https://htslabs.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/form/login"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomson Solutions At Work`,
        short_name: `Thomson`,
        start_url: `/`,
        icon: `static/favicons/favicon.png`,
        background_color: `#ffcc33`,
        theme_color: `#1c4a73`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/json/`,
      },
    },

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
          options: {
            props: {
              className: "",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
}
