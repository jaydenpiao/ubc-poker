import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Inquiries from "./components/Inquiries";
import Gallery from "./components/Gallery";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Inquiries />
      <Gallery />

    </div>
    
  );
}

export default App;
