import React from "react";
import { Link } from "react-router-dom";


const navStyle = {
  display: "flex",
  justifyContent: "center", // Centers the links horizontally
  alignItems: "center",     // Centers them vertically (optional)
  gap: "20px",              // Adds spacing between links (replaces the | symbols)
  padding: "10px",
  width: "100%",            // Ensures the nav takes full width of the screen
};

export default function Layout() {
  return (
    <>
      <nav style={navStyle}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/education">Education</Link>|
        <Link to="/project">Project</Link>|
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
    </>
  );
}
