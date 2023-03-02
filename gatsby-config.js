/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Demo Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Testing Blog with Gatsby front-end, no backend`,
    image: `https://media.licdn.com/dms/image/sync/C4E22AQE3zABK-RNkbg/feedshare-shrink_800/0/1674585293922?e=1679529600&v=beta&t=7VPxsnRkiPLJgsjgaH7b5Qw9D_nij0FYQrTiObiEG2M`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    // This set of plugins is to enable creating MDX blog posts from the src/posts/folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
    },
    //when we want to import images into components
    //help transform images and make diff images for diff sizes of screen/res
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        // defaultLayouts: { //insert layout into mdx files
        //   posts: require.resolve('./src/components/post-layout.js'),
        // },
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludeRoutes: ['/wp/v2/users/**', '/wp/v2/settings*'],
        url: `https://wpgatsbydemo.wpengine.com/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
        // Specify the URL of the WordPress source
        // Replace baseUrl w/ GraphQL endpoint if using locally hosted site
        baseURL: 'live-gatsby-wordpress-demo.pantheonsite.io/wp/graphql',
        protocol: 'https',
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // Specify which URL structures to fetch
        // includedRoutes: [
        //   '**/posts',
        //   '**/tags',
        //   '**/categories'
        // ]
        // useACF: true, //Advanced Custom Field
        // searchAndReplaceContentUrls: {
        //   sourceUrl: 'http://live-gatsby-blog.appa.pantheon.site/',
        //   replacementUrl: '',
        // },
      },
    },
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-prefetch-google-fonts',
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Teko',
    //         variants: ['200', '400', '500', '600', '700'],
    //       },
    //     ],
    //   },
    // },
  ],
}
