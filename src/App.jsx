import React, { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Touch from './pages/Touch';
import Footer from './pages/Footer';

const App = () => {
  const galleryRef = useRef(null);

  // 🌀 Lenis Scroll Effect
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden text-stone-300">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero galleryRef={galleryRef} />
        <Experience />
        <Gallery ref={galleryRef} />
        <Testimonials />
        <Touch />
        <Footer />
      </div>
    </div>
  );
};

export default App;
