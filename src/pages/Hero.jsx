// Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VID from '../assets/hero-vid.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ galleryRef }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-heading', { opacity: 0, x: -100 }, {
        opacity: 1, x: 0, duration: 1,
        scrollTrigger: { trigger: '.hero-heading', start: 'top 80%' },
      });

      gsap.fromTo('.hero-subtext', { opacity: 0, x: 100 }, {
        opacity: 1, x: 0, duration: 1, delay: 0.2,
        scrollTrigger: { trigger: '.hero-subtext', start: 'top 80%' },
      });

      gsap.fromTo('.hero-buttons', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, delay: 0.4,
        scrollTrigger: { trigger: '.hero-buttons', start: 'top 80%' },
      });

      gsap.fromTo('.hero-video', { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 1.2,
        scrollTrigger: { trigger: '.hero-video', start: 'top 90%' },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 👇 Function to scroll to gallery
  const scrollToGallery = () => {
    if (galleryRef?.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="w-full min-h-screen px-6 md:px-12 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl text-[#81E4AD] font-bold">
            Premium UPVC <br />Windows & Doors for <br />Modern Living
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="hero-subtext text-[#81E4AD] text-base md:text-lg mt-4">
            Transform your home with our exquisite UPVC windows and doors. <br />
            Experience unmatched quality and elegance that enhance modern living.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            {/* 👇 View Products Button */}
            <button
              onClick={scrollToGallery}
              className="border border-[#81e4ad] px-6 py-2 rounded-lg text-[#81e4ad] transition-all duration-300 hover:bg-[#81e4ad] hover:text-zinc-900"
            >
              View Products
            </button>

            {/* Get Quote */}
            <button className="bg-[#81e4ad] text-zinc-900 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#81e4ad] hover:border hover:border-[#81e4ad]">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="hero-video flex justify-center mt-16">
        <video
          autoPlay loop muted src={VID}
          className="w-full md:w-[85%] h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
