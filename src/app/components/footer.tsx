// src/components/Footer.tsx
import React from 'react';
import GithubLogo from '../public/Github logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm md:text-base lg:text-xl">
        <div className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Muhammad Ubaid Ali. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-6 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
  <a
    href="https://www.linkedin.com/in/muhammad-ubaid-ali-ali-b7794928b/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 flex items-center hover:bg-blue-600"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      alt="LinkedIn"
      className="w-6 h-6"
    />
  </a>
  <a
    href="https://github.com/MuhammadubaidAli"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 flex items-center hover:bg-blue-600"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="GitHub"
      className="w-6 h-6"
    />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 flex items-center hover:bg-blue-600"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      className="w-6 h-6"
    />
  </a>
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 flex items-center hover:bg-blue-600"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
      alt="Facebook"
      className="w-6 h-6"
    />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
