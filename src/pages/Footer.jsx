import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-4">
      &copy; {new Date().getFullYear()} My Store. This is a product of Jadress.
    </footer>
  );
}

export default Footer;