import React from "react";

const Footer = () => (
  <footer style={{ padding: "1rem", background: "#f5f5f5", marginTop: "2rem", textAlign: "center" }}>
    &copy; {new Date().getFullYear()} My Store. All rights reserved.
  </footer>
);

export default Footer;