import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
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

export default Post;