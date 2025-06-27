import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full px-4 py-10 text-stone-300 bg-[#0f0f0f]"
    >
      <div className="footer-section max-w-7xl mx-auto border border-[#81E4AD] p-8 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div className="space-y-6">
          <img src={Logo} alt="Logo" className="w-36 h-auto" />
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#81E4AD] mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Address:</h2>
              <p className="text-sm">Lakshmipur, Sahaspur, Dehradun - 248197 (U.K)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhone className="text-[#81E4AD] mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Phone:</h2>
              <p className="text-sm">+91 7895965373</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#81E4AD] mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Email:</h2>
              <p className="text-sm">monuk52069@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-[#81E4AD] hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-[#81E4AD] hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-[#81E4AD] hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-[#81E4AD] transition">About Us</a>
            <a href="#" className="hover:text-[#81E4AD] transition">Our Services</a>
            <a href="#" className="hover:text-[#81E4AD] transition">Contact Us</a>
            <a href="#" className="hover:text-[#81E4AD] transition">FAQs</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-[#81E4AD] transition">Testimonials</a>
            <a href="#" className="hover:text-[#81E4AD] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#81E4AD] transition">Terms of Use</a>
            <a href="#" className="hover:text-[#81E4AD] transition">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
