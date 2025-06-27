import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IMG from '../assets/Testimg.jpg'
import { IoStar } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.test-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.test-heading',
          start: 'top 85%',
        },
      });

      gsap.utils.toArray('.test-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });
    }, testRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={testRef} className="w-full min-h-screen px-4 py-20 bg-transparent">
      <div className="test-heading text-center">
        <h1 className="text-4xl md:text-5xl text-[#81e4ad] font-semibold mb-4">
          Customer Testimonials
        </h1>
        <p className="text-md text-gray-300">Our clients love the quality and service we provide.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="test-card group border border-[#81e4ad] p-6 rounded-xl text-stone-300 transition duration-300 hover:bg-[#81e4ad] hover:text-zinc-900"
          >
            <h1 className="text-xl font-bold flex gap-2 mb-4"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></h1>
            <p className="mb-6">
              "The windows transformed our home into a modern masterpiece!"
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img src={IMG} alt="user" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h2 className="font-semibold">Monu Kumar</h2>
                <p className="text-sm">Hometown, Dehradun</p>
              </div>
            </div>
            <button className="mt-6 border border-[#81e4ad] px-6 py-1 rounded-lg text-[#81e4ad] transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white">
              Great
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
