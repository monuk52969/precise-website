import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/logo.png';
import Whatsapp from '../assets/w-icon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef([]);

  // GSAP Hover animation
  useEffect(() => {
    linksRef.current.forEach((link) => {
      gsap.fromTo(
        link,
        { color: '#ffffff' },
        {
          color: '#81E4AD',
          duration: 0.3,
          paused: true,
          overwrite: 'auto',
        }
      );

      link.addEventListener('mouseenter', () => {
        gsap.to(link, { color: '#81E4AD', duration: 0.3 });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, { color: '#ffffff', duration: 0.3 });
      });
    });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="nav w-full py-4 px-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="w-28 object-contain" />
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Links + Mobile Button */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-5 items-center absolute md:static top-full left-0 w-full md:w-auto bg-slate-950 md:bg-transparent px-8 py-4 md:p-0 transition-all duration-300 z-10`}
      >
        {['Home', 'Works', 'About', 'Contact'].map((text, idx) => (
          <a
            key={text}
            ref={(el) => (linksRef.current[idx] = el)}
            href={`#${text.toLowerCase()}`}
            className="text-white text-sm md:text-base font-medium"
          >
            {text}
          </a>
        ))}

        {/* Mobile Button */}
        <div className="md:hidden mt-4 w-full">
          <button className="w-full border border-[#81e4ad] py-2 rounded-lg text-[#81e4ad] transition-all duration-300 hover:bg-[#81e4ad] hover:text-zinc-900">
            Call
          </button>
        </div>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a
  href="https://wa.me/917417367376"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-[#81e4ad] px-6 py-1 rounded-lg text-[#81e4ad] transition-all duration-300 hover:bg-[#81e4ad] hover:text-zinc-900 flex items-center justify-center"
>
  <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
</a>


      </div>
    </div>
  );
};

export default Navbar;
