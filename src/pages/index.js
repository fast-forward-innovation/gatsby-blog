import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome to Demo Gatsby Blog!</h1>
      <p>Explore around to see the basic features of this Gatsby Blog.</p>
      <Link to='/blog'>Go to Blog</Link>
    </Layout>
  )
}