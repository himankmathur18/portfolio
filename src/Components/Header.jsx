import { useState } from 'react';

function Header(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element){
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

  return (
    <div className='z-50 fixed w-[100%] '>
      <nav className='bg-blue-950 border-b-1 p-4 flex justify-between items-center'>
        <div className="text-white text-3xl font-bold">
          <h1>Himank Mathur</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex text-white">
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => scrollTo('about')}>About</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => scrollTo('skills')}>Skills</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => scrollTo('experience')}>Experience</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => scrollTo('education')}>Education</button>
          <button className='m-3 hover:underline font-bold cursor-pointer' onClick={() => scrollTo('project')}>Project</button>

        </div>
      </nav>
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button onClick={toggleSidebar} className="absolute top-4 left-4 text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="mt-16">
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { scrollTo('about'); toggleSidebar(); }}>About</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { scrollTo('skills'); toggleSidebar(); }}>Skills</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { scrollTo('experience'); toggleSidebar(); }}>Experience</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { scrollTo('education'); toggleSidebar(); }}>Education</button>
          <button className='block w-full text-left p-3 hover:bg-gray-700' onClick={() => { scrollTo('project'); toggleSidebar(); }}>Project</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;