// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Himank Mathur.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/himankmathur18" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/himank-mathur-26b63a261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:himankmathur6@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;