/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`)
const webpack = require(`webpack`)
const { slash } = require(`gatsby-core-utils`)

// webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
      plugins: [
          new webpack.ProvidePlugin({
              Buffer: [require.resolve("buffer/"), "Buffer"],
          }),
      ],
      resolve: {
          fallback: {
              "http": false,
              "url": false
          },
      },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: '/blog/' + edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        slug: edge.node.slug,
      },
    })
  })
} 
