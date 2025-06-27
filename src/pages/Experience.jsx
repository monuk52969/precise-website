import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import G1 from '../assets/g1.jpg';
import G2 from '../assets/g2.jpg';
import G3 from '../assets/g3.jpg';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const expRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".exp-heading",
          start: "top 90%",
        },
      });

      gsap.utils.toArray(".exp-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, expRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      img: G3,
      title: "Transform Your Home with Elegant and Durable Solutions",
      desc: "Our PVC windows and doors offer exceptional durability and styles.",
      btn: "Learn More",
    },
    {
      img: G2,
      title: "Energy Efficiency Meets Modern Design for Ultimate Comfort",
      desc: "Enjoy superior insulation that keeps your home cozy year-round.",
      btn: "Discover",
    },
    {
      img: G1,
      title: "Weatherproof Solutions for All Seasons and Conditions",
      desc: "Our products are designed to withstand the elements effortlessly.",
      btn: "Explore",
    },
  ];

  return (
    <div ref={expRef} className="exp w-full min-h-screen px-4 md:px-20 py-16">
      {/* Heading */}
      <div className="head flex items-center justify-center mb-16">
        <h1 className="text-3xl md:text-5xl text-center text-[#81e4ad] exp-heading font-bebas  leading-snug">
          Experience Unmatched Quality with Our <br />
          Premium UPVC Windows and Doors
        </h1>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, idx) => (
          <div key={idx} className="exp-card bg-zinc-800 p-4 rounded-xl text-white flex flex-col items-center shadow-md">
            <img
              src={item.img}
              alt={`feature-${idx}`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-2">{item.title}</h2>
            <p className="text-sm text-center mb-4">{item.desc}</p>
            <button className="border border-[#81e4ad] px-4 py-2 rounded-lg text-[#81e4ad] transition duration-300 hover:bg-[#81e4ad] hover:text-black">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
