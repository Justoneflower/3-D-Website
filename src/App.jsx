import React from 'react'
import Navbar from "./components/Navbar.jsx";
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.jsx";
gsap.registerPlugin(ScrollTrigger)

const App =()=> {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* page content */}
        
        <Showcase/>
      </main>
    </>
  );
}

export default App;

