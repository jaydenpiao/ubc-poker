import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Inquiries from "./components/Inquiries";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="inquiries"><Inquiries /></div>
      <div id="gallery"><Gallery /></div>
      <Footer />

    </div>
    
  );
}

export default App;
