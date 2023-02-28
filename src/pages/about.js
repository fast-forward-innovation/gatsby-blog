import * as React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import Layout from '../components/layout.js';

import { imageWrapper } from '../styles/index.module.css';

export default function AboutPage() {
  return (
    <Layout
      title="About Fast Forward"
      description="More information about Fast Forward."
    >
      <div className={imageWrapper}>
        <StaticImage
          src="../images/icon.png"
          alt="gatsby.js logo"
          placeholder="dominantColor"
          width={100}
          height={100}
        />
      </div>
      <h1>About This Blog</h1>
      <p>This blog is made of a Gatsby front-end with no back-end.</p>
      <Link to='/'>Back to Home</Link>
    </Layout>
  );
}