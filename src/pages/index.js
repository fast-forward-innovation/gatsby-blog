import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';

const IndexPage = ({ data }) => {
  // client is object with url, requestConfig, and rawRequest (to get post?)
  // const client = new GraphqlClientFactory(
  //   'my.wordpressbackend.com/wp/graphql',
  // ).create();

  return (
    <Layout>
      {/* <SEO title="home" /> */}
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <Link to={`/blog/${node.slug}`}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { date: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage;