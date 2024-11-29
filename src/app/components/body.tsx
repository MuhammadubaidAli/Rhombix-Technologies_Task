'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';  
import uniLogo from '../public/uni logo.png';  
import bodyPic from '../public/Pic.png';
import college from '../public/college.png';
import uniqueLogo from '../public/DALL_E_2024-10-05_21.45.23_-_A_modern_and_professional_school_logo_for__Unique_Primary_and_Secondary_School_._The_logo_features_a_bold_and_clean_typography_for_the_school_name__wi-removebg-preview(1).png';
import AnimatedText from './Animated';
import ContactForm from './contactForm';
import Footer from './footer';
import downloadCV from './downloadCV';

export default function Body() {

  return (
    
    
<div className="w-full h-full bg-[#6a7b76] relative">
  {/* Main Content */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-5 md:p-7 lg:p-10 text-black">
    {/* Left Section */}
    <div className="space-y-6 text-center sm:text-left">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black mt-9">
        <cite>Muhammad Ubaid Ali</cite>
      </h1>
      {/* Animated Text */}
      <div className="text-center text-lg sm:text-xl md:text-3xl lg:text-3xl">
        <cite><AnimatedText /></cite>
      </div>
      {/* Paragraph */}
      <p className="text-center sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-snug">
        A graphic frontend web developer with a passion for blending design and technology.
        <br /> I love turning creative ideas into clean, visually stunning websites that are easy to use and perform beautifully across all devices.
        <br /> My skills range from designing eye-catching graphics to building responsive, user-friendly web interfaces with tools like HTML, CSS, JavaScript, React, and Next.js.
      </p>
      {/* Download CV Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadCV}
          className="px-6 py-3 bg-gray-800 font-bold text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
        >
          Read CV
        </button>
      </div>
    </div>

    {/* Right Section: Round Image */}
    <div className="flex justify-center sm:justify-end items-center">
      <Image
        src={bodyPic}
        alt="My Pic"
        width={350}
        height={350}
        className="slide-in-bck-left rounded-lg object-cover shadow-lg"
      />
    </div>
  </div>



      


      {/* About Me Section */}
      <div id="about-me" className="about-me mb-10 p-10 text-left">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gray-800 rounded-lg text-center text-white py-2 my-20">
    About Me
  </h1>
  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 mt-7 text-center">
    Web Developer | Frontend Developer
  </h3>
  <p className="leading-relaxed px-4 mb-10 text-lg md:text-xl lg:text-2xl mt-10">
    I'm really passionate about building intuitive and responsive front-end solutions. 
    With my skills in HTML, CSS, JavaScript, TypeScript, React, and Next.js, 
    I love turning design ideas into real, user-friendly experiences. 
    My goal is to write clean, maintainable code while optimizing performance.
  </p>
  <div className="about-section text-center my-5">
  <span className="space-x-4">
    <a href="https://github.com/MuhammadUbaidAli" target="_blank" rel="noopener noreferrer">
      <button className="mr-2 jello-horizontal text-lg md:text-xl lg:text-2xl footer-button px-4 md:px-6 py-2 bg-gray-800 italic text-white rounded hover:bg-blue-600">
        <cite>Github</cite>
      </button>
    </a>
    <a href="https://www.linkedin.com/in/muhammad-ubaid-ali-b7794928b/" target="_blank" rel="noopener noreferrer">
      <button className="jello-horizontal text-lg md:text-xl lg:text-2xl footer-button px-4 md:px-6 py-2 bg-gray-800 text-white rounded hover:bg-blue-600">
        <cite>LinkedIn</cite>
      </button>
    </a>
  </span>
</div>


      </div>

      {/* Education Section */}
      <div id="education" className="education mb-12 p-5 md:p-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left pt-2 bg-gray-800 rounded-lg text-center text-white py-2 my-10 md:my-20">
    Education
  </h1>
  <div className="relative flex flex-col md:flex-row items-center justify-center">
    <div className="space-y-8">
      {/* First Education - Sindh Madarsatul Islam University */}
      <div className="flex items-center">
        <div className="text-lg md:text-xl lg:text-2xl font-bold mr-4">1.</div>
        <Image src={uniLogo} alt="University Logo" width={30} height={30} className="mr-2 rounded-lg" />
        <span className="text-lg md:text-xl lg:text-2xl bg-yinmn-blue rounded-full px-3 py-1 font-semibold">
          <cite>Sindh Madarsatul Islam University</cite>
        </span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full px-4 py-2 text-sm md:text-base lg:text-lg">
        <cite>Bachelor's of Science in Computer Science (Present)</cite>
      </p>

      {/* Second Education - P.E.C.H.S Education Foundation College */}
      <div className="flex items-center">
        <div className="text-lg md:text-xl lg:text-2xl font-bold mr-4">2.</div>
        <Image src={college} alt="College Logo" width={30} height={30} className="mr-2" />
        <span className="text-lg md:text-xl lg:text-2xl bg-yinmn-blue rounded-full px-3 py-1 font-semibold">
          <cite>P.E.C.H.S Education Foundation College</cite>
        </span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full px-4 py-2 text-sm md:text-base lg:text-lg">
        <cite>Intermediate in Pre-Engineering (2022)</cite>
      </p>

      {/* Third Education - Unique Primary and Secondary School */}
      <div className="flex items-center">
        <div className="text-lg md:text-xl lg:text-2xl font-bold mr-4">3.</div>
        <Image src={uniqueLogo} alt="Unique Logo" width={40} height={40} className="mr-2" />
        <span className="text-lg md:text-xl lg:text-2xl bg-yinmn-blue rounded-full px-3 py-1 font-semibold">
          <cite>Unique Primary & Secondary School</cite>
        </span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full px-4 py-2 text-sm md:text-base lg:text-lg">
        <cite>Matriculation in Science (2020)</cite>
      </p>
    </div>
  </div>
</div>

        

      {/* Skills Section */}
      <div id="skills" className="skills mb-12 p-5 md:p-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gray-800 text-center rounded-lg text-white py-2 my-10 md:my-20">
    Skills
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* HTML */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        HTML
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        HTML (HyperText Markup Language) helps structure and display content on the web.
      </p>
    </div>
    {/* CSS */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        CSS
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        CSS (Cascading Style Sheets) styles HTML elements, enhancing the layout and appearance.
      </p>
    </div>
    {/* JavaScript */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        JavaScript
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        JavaScript adds interactivity to web content, making it dynamic and engaging.
      </p>
    </div>
    {/* TypeScript */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        TypeScript
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        TypeScript is a superset of JavaScript that catches errors early and improves code quality.
      </p>
    </div>
    {/* React */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        React
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        React is a library for building user interfaces using components, making UIs efficient.
      </p>
    </div>
    {/* Next.js */}
    <div className="skill-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        Next.js
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        Next.js is a framework that enables server-side rendering and static site generation.
      </p>
    </div>
  </div>
</div>

      {/* Services Section */}
      <div id="services" className="services p-5 md:p-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gray-800 text-center rounded-lg text-white py-2 my-10 md:my-20">
    Services
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Frontend Development */}
    <div className="service-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        Frontend Development
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        I create visually appealing and user-friendly web interfaces with the latest technologies.
      </p>
    </div>
    {/* Responsive Design */}
    <div className="service-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        Responsive Design
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        My designs ensure a seamless experience across all devices, from desktops to smartphones.
      </p>
    </div>
    {/* SPA Applications */}
    <div className="service-card bg-yinmn-blue p-4 md:p-6 rounded-lg">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">
        SPA Applications
      </h2>
      <p className="text-sm md:text-base lg:text-lg my-4 md:my-6">
        I build Single Page Applications that provide a smooth user experience without constant reloading.
      </p>
    </div>
    </div>

        <div id="Contact">
      <h1 className="text-3xl font-bold mb-4 bg-gray-800 br-15 text-center rounded-lg  text-white py-3 my-20">Contact Us</h1>
      <ContactForm />
    </div>
    <div>
      <Footer />
    </div>
         
        </div>
        </div>
      
     
  );
 }

