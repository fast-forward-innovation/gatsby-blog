import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="About Karen"
      description="More information about Karen."
    >
      <h1>About This Blog</h1>
      <p>This blog is made of a Gatsby front-end with no back-end.</p>
      <Link to='/'>Back to Home</Link>
    </Layout>
  );
}