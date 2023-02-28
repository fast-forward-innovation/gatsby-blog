import * as React from 'react';
import TopHeader from './TopHeader.js';
import BottomHeader from './BottomHeader.js';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo.js';
import { StaticImage } from 'gatsby-plugin-image';

import { header, footer, content } from '../styles/layout.module.css';
import '../styles/global.css';

export default function useLayoutEffect({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className="top-header">
        <TopHeader/>
      </header>
      <header className={header}>
        <Link to="/">
          <StaticImage
            src="../images/ff-logo.jpg"
            alt="fast forward logo"
            placeholder="dominantColor"
            width={75}
            height={75}
          />
        </Link>
        <BottomHeader/>
      </header>
      <main className={content}>{children}</main>
      <footer className={footer}>
        <StaticImage
          src="../images/ff-logo.jpg"
          alt="fast forward logo"
          placeholder="dominantColor"
          width={75}
          height={75}
        />
        © Fast Forward 2023
      </footer>
    </>
  );
}