import React from 'react';

const DownloadCV = () => {
  const openCV = () => {
    const link = document.createElement('a');
    link.href = "/Ubaid_CV.pdf"; // Corrected path for easy reference
    link.download = "Ubaid_CV.pdf"; // This prompts the file to download
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-6">Here, you can view and download my CV.</p>
      <button onClick={openCV} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Download CV
      </button>
    </div>
  );
};

export default DownloadCV;
