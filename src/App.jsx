import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Hero/></>
    },
    {
      path: "/projects",
      element:<><Navbar /><Projects/></> 
    },
    {
      path: "/about",
      element:<><Navbar /><About/></> 
    },
    {
      path: "/contact",
      element:<><Navbar /><Contact/></> 
    },
    
  ])

  return (
    <div className="font-sans text-gray-900">
      
      
      <RouterProvider router={router}/>
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
    </div>
  );
}

export default App;
