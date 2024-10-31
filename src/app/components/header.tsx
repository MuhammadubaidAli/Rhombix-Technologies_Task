'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <header className="text-white fixed top-0 left-0 w-full z-50 p-1 bg-gray-800 text-lavender-web br-2">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold animate-bounce hover:text-[#6a7b76]">
          <Link href="/"><cite>Muhammad Ubaid Ali</cite></Link>
        </h1>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 focus:outline-none hover:text-red"
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`absolute right-0 bg-charcoal md:static md:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-6`}>
          <ul className="flex flex-col md:flex-row gap-6 p-4 md:p-0">
            <li>
              <Link href="/" className=" hover:text-rose-quartz text-2xl hover:text-[#6a7b76]">
               <cite>Home</cite> 
              </Link>
            </li>
            <li>
              <Link href="#about-me" scroll={true} className=" text-2xl hover:text-[#6a7b76]">
                <cite>About Me</cite>
              </Link>
            </li>
            <li>
              <Link href="#education" scroll={true} className=" text-2xl hover:text-[#6a7b76]">
              <cite>Education</cite>
              </Link>
            </li>
            <li>
              <Link href="#skills" scroll={true} className=" text-2xl hover:text-[#6a7b76]">
              <cite>Skills</cite>
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-rose-quartz text-2xl hover:text-[#6a7b76]">
              <cite>Services</cite>
              </Link>
            </li>
            <li>
              <Link href="#Contact" className="hover:text-rose-quartz text-2xl hover:text-[#6a7b76] ">
              <cite>Contact</cite>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}