import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Touch = () => {
  const touchRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".touch-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".touch-heading",
          start: "top 85%",
        },
      });

      gsap.from(".touch-box", {
        opacity: 0,
        x: -60,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".touch-box",
          start: "top 90%",
        },
      });

      gsap.from(".touch-map", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: ".touch-map",
          start: "top 85%",
        },
      });
    }, touchRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={touchRef} className="w-full min-h-screen bg-transparent border-t border-zinc-700 px-4 py-16">
      <div className="flex flex-col lg:flex-row p-4 gap-10">
        {/* Left Text Section */}
        <div className="left lg:w-1/2 mt-5 lg:ml-10 touch-heading">
          <h3 className="mb-3 text-stone-500 text-lg md:text-xl">Connect</h3>
          <h1 className="text-3xl md:text-5xl text-[#81e4ad] font-bold">Get in Touch</h1>
          <p className="mt-4 text-stone-400 text-base md:text-lg">
            We’re here to assist you with any inquiries or product selections you may have.
          </p>
        </div>

        {/* Contact Info */}
        <div className="right lg:w-1/2 flex flex-col gap-6 mt-6 touch-box text-stone-300">
          <div className="box-1">
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-stone-300 underline">monuk52069@gmail.com</p>
          </div>
          <div className="box-2">
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-stone-300 underline">+91 7895965373</p>
          </div>
          <div className="box-3">
            <p className="text-sm text-gray-400">Office</p>
            <p className="text-stone-300">
              Lakshmipur, Sahaspur, Dehradun - 248197 (U.K)
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="touch-map mt-16 flex justify-center px-4">
        <iframe
          className="w-full max-w-8xl h-96 rounded-2xl border border-zinc-700"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0155781481435!2d78.00807467546692!3d30.40233790105427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a248c31e1b%3A0x4a30223a63c4bfe3!2sSahaspur%2C%20Uttarakhand%20248197!5e0!3m2!1sen!2sin!4v1719500000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Touch;
