const path = require("path");
const pathPrefix = "/";
// Change me
const siteMetadata = {
  title: "Devwocky",
  shortName: "devwocky",
  description: "Twas brillig, and the slithy devs.",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://devwock.github.io",
};
const contentFolder = "../foam";

module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["latest", "tag"],
        nav: [
          {
            title: "Github",
            url: "https://github.com/devwock/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/devwock",
          },
        ],
        editUrl:
          "https://github.com/devwock/devwock.github.io/tree/main/",
        lastUpdatedTransformer: (isoString) => {
          const dateObj = new Date(isoString);
          const date = dateObj.toLocaleString("ko-KR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          return date;
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        // path: `${__dirname}/..`,
        path: path.resolve(`./${contentFolder}`),
        ignore: [`**/\.*/**/*`],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
