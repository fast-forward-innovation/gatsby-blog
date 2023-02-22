import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function Blog() {
  
  return (
    <Layout
      title="Blog"
      description="Blog with all entries"
    >
      <h1>You've reached the Blog</h1>
      <Link to='/first-blog'>Hello World!</Link>
      <br></br>
      <Link to='/another-blog'>Where Am I At?</Link>
    </Layout>
  )
}