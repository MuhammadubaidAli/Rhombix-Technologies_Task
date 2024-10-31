// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm md:text-base lg:text-xl">
        <div className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Muhammad Ubaid Ali. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.linkedin.com/in/muhammad-ubaid-ali-ali-b7794928b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MuhammadubaidAli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Github
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
