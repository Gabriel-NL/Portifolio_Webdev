import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <br />
      
      <br />
    </>
  );
}
