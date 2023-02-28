import * as React from "react";
import { StaticImage} from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  
  return (
    <Layout>
      <h1>Inspire with design. Empower through experience.</h1>
      <p>Explore around to see the basic features of this Gatsby Blog.</p>
    </Layout>
  )
}