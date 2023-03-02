// import * as React from "react";
// import { StaticImage} from 'gatsby-plugin-image';
// import Layout from '../components/layout.js';

// import { imageWrapper } from '../styles/index.module.css';

// export default function IndexPage() {
  
//   return (
//     <Layout>
//       <h1>Inspire with design. Empower through experience.</h1>
//       <p>Explore around to see the basic features of this Gatsby Blog.</p>
//     </Layout>
//   )
// }

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      {/* <SEO title="home" /> */}
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <Link to={node.slug}>
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
    allWpPost(sort: { fields: [date] }) {
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