import * as React from 'react';
import { Link } from 'gatsby';

export default function BottomHeader() {

  return (
    <nav>
      <Link to="/about">ABOUT</Link>
      <Link to="/about">WORK</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/about">LABS</Link>
      <Link to="/about">CAREERS</Link>
    </nav>
  )
}