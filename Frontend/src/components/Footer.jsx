import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 flex justify-center items-center">
      <div className="container flex flex-col gap-4 text-center justify-center items-center">
        <p>Email: <a href="mailto:amangupta65734@gmail.com" className="text-white underline">amangupta65734@gmail.com</a></p>
        <p>&copy; {new Date().getFullYear()} Aman Kumar Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;