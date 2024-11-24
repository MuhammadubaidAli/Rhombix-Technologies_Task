'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';  
import uniLogo from '../public/uni logo.png';  
import bodyPic from '../public/image.png';
import college from '../public/college.png';
import uniqueLogo from '../public/DALL_E_2024-10-05_21.45.23_-_A_modern_and_professional_school_logo_for__Unique_Primary_and_Secondary_School_._The_logo_features_a_bold_and_clean_typography_for_the_school_name__wi-removebg-preview(1).png';
import AnimatedText from './Animated';
import ContactForm from './contactForm';
import Footer from './footer';





export default function Body() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "/Ubaid's CV (1).pdf"; // Ensure this path is correct
    link.download = "Ubaid's CV.pdf"; // This will set the name for the downloaded file
    document.body.appendChild(link); // Append link to body
    link.click(); // Simulate click to download
    document.body.removeChild(link); // Remove the link after download
  }

  return (
    
    
    <div className="w-full h-full bg-[#6a7b76] relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-5 md:p-7 lg:p-10 text-black">
   
  
  <div className="space-y-4 text-center sm:text-left">
    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black mt-9"> {/* Add margin-bottom for the gap */}
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
  </div>

  {/* Right Section: Round Image */}
  <div className="flex justify-center sm:justify-end item-center">
    <Image
      src={bodyPic}
      alt="My Pic"
      width={350}
      height={350}
      className="slide-in-bck-left rounded-lg object-cover shadow-lg"
    />
  </div>

        {/* Download CV button */}
        <ul> 
          <li>
            <button 
              onClick={handleDownloadCV} 
              className="p-5 jello-horizontal text-2xl mt-2 py-2 bg-gray-800 items-center justify-center text-white rounded-lg hover:bg-[#040303] transition-all sm:px-6 md:px-2 lg:px-2"
            >
              <cite>Open CV</cite>
            </button>             
          </li>
        </ul>
      </div>

      {/* About Me Section */}
      <div  id="about-me" className='about-me mb-10 p-10 text-left' >
        <h1 className="text-3xl font-bold mb-4 bg-gray-800 br-15 text-center rounded-lg text-white py-2 my-20">About Me</h1>
        <h3 className="text-2xl mb-4 mt- text-center mt-7">Web Developer | Frontend Developer</h3>
        <p className="leading-relaxed px-4 mb-10 text-2xl mt-10 font-">
          I'm really passionate about building intuitive and responsive front-end solutions. 
          With my skills in HTML, CSS, JavaScript, TypeScript, React, and Next.js, 
          I love turning design ideas into real, user-friendly experiences. 
          My goal is to write clean, maintainable code while optimizing performance.
        </p>
        <div className="about-section text-center my-5">
  <span className="space-x-4">
    <a href="https://github.com/MuhammadUbaidAli" target="_blank" rel="noopener noreferrer">
      <button className="mr-2 jello-horizontal text-2xl footer-button px-4 py-2 bg-gray-800 text-italic text-white rounded hover:bg-blue-600">
         <cite>Github</cite>
      </button>
    </a>

    
    <a href="https://www.linkedin.com/in/muhammad-ubaid-ali-b7794928b/" target="_blank" rel="noopener noreferrer">
      <button className="jello-horizontal text-2xl footer-button px-4 py-2 bg-gray-800  text-white rounded hover:bg-blue-600">
         <cite>LinkedIn</cite>
      </button>
    </a>
  </span>
</div>

      </div>

      {/* Education Section */}
      <div id="education" className="education mb-12 p-10">
  <h1 className="text-3xl font-bold text-left pt-2 bg-gray-800 br-15 text-center rounded-lg text-white py-2 my-20">
    Education
  </h1>
  <div className="relative flex flex-col md:flex-row items-center justify-center">
    <div className="space-y-8">
      {/* First Education - Sindh Madarsatul Islam University */}
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-4">1.</div>
        <Image src={uniLogo} alt="University Logo" width={40} height={40} className="mr-2 rounded-lg" />
        <span className="text-2xl bg-yinmn-blue rounded-full p-2 text-bold"><cite>Sindh Madarsatul Islam University</cite></span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full p-3"><cite>Bachelor's of Science in Computer Science (Present)</cite></p>

      {/* Second Education - P.E.C.H.S Education Foundation College */}
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-4">2.</div>
        <Image src={college} alt="College Logo" width={40} height={40} className="mr-2" />
        <span className="text-2xl bg-yinmn-blue rounded-full p-3"><cite>P.E.C.H.S Education Foundation College</cite></span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full p-3"><cite>Intermediate in Pre-Engineering (2022)</cite></p>

      {/* Third Education - Unique Primary and Secondary School */}
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-4">3.</div>
        <Image src={uniqueLogo} alt="Unique Logo" width={50} height={50} className="mr-2" />
        <span className="text-2xl bg-yinmn-blue rounded-full p-2"><cite>Unique Primary & Secondary School</cite></span>
      </div>
      <p className="text-center text-white bg-gray-800 rounded-full p-3"><cite>Matriculation in Science (2020)</cite></p>
    </div>
  </div>
</div>
        

      {/* Skills Section */}
      <div id="skills" className="skills mb-12 p-10">
        <h1 className="text-3xl font-bold mb-4 bg-gray-800 br-15 text-center rounded-lg text-white py-2 my-20">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">HTML</h2>
            <p className='text-2xl my-7'>HTML (HyperText Markup Language) helps structure and display content on the web.</p>
          </div>
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">CSS</h2>
            <p className='text-2xl my-7'>CSS (Cascading Style Sheets) styles HTML elements, enhancing the layout and appearance.</p>
          </div>
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">JavaScript</h2>
            <p className='text-2xl my-7'>JavaScript adds interactivity to web content, making it dynamic and engaging.</p>
          </div>
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">TypeScript</h2>
            <p className='text-2xl my-7'>TypeScript is a superset of JavaScript that catches errors early and improves code quality.</p>
          </div>
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">React</h2>
            <p className='text-2xl my-7'>React is a library for building user interfaces using components, making UIs efficient.</p>
          </div>
          <div className="skill-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">Next.js</h2>
            <p className='text-2xl my-7'>Next.js is a framework that enables server-side rendering and static site generation.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services  p-10">
        <h1 className="text-3xl font-bold mb-4 bg-gray-800 br-15 text-center rounded-lg text-white py-2 my-20">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="service-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">Frontend Development</h2>
            <p className='text-2xl my-7'>I create visually appealing and user-friendly web interfaces with the latest technologies.</p>
          </div>
          <div className="service-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl font-semibold bg-gray-800 text-white text-center rounded-lg py-1">Responsive Design</h2>
            <p className='text-2xl my-7'>My designs ensure a seamless experience across all devices, from desktops to smartphones.</p>
          </div>
          <div className="service-card bg-yinmn-blue p-4 rounded-lg">
            <h2 className="text-xl text-white text-center rounded-lg font-semibold bg-gray-800 py-1">SPA Applications</h2>
            <p className='text-2xl my-7'>I build Single Page Applications that provide a smooth user experience without constant reloading.</p>
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

