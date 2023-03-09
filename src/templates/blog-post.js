import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function BlogPost ({ data }) {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> On: {post.date} </p>
        <Link to ='/'>
          <p>Back to Blog</p>
        </Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`