import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Header(){
  const navigate =useNavigate;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='z-50'>
      <nav className='bg-blue-950 border-b-1 p-4 flex justify-between items-center'>
        <div className="text-white text-2xl font-bold">
          <h1 className=''>Himank Mathur</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {/* three lines icon from Heroicons */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex text-white">
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => navigate('/about')}>About</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => navigate('/contact')}>Contact</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => navigate('/project')}>Project</button>
        </div>

      </nav>

      {/* Sidebar is visible on phone screens when i toggled */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button onClick={toggleSidebar} className="absolute top-4 left-4 text-white focus:outline-none">
          {/* Close icon from Heroicons */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="mt-16">
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/about'); toggleSidebar(); }}>About</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/contact'); toggleSidebar(); }}>Contact</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { navigate('/project'); toggleSidebar(); }}>Project</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;