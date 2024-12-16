import Image from "next/image";
import logo from "./Logo (7).png";
import image from "./Group 13.png";
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="w-full border-t-2 border-slate-300">
      <div className="w-full lg:w-[1200px] m-auto h-auto lg:h-[347px] flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="font-mono space-y-6 mt-14 w-full sm:w-1/2 lg:w-1/4 px-4">
          <Image alt="this is logo" src={logo} width={200} height={60} />
          <p className="text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF className="text-[#007580] border-2 border-[#007580] p-1 rounded-full" />
            <FaInstagramSquare className="text-[#007580] border-2 border-[#007580] p-1 rounded-full" />
            <FaPinterest className="text-[#007580] border-2 border-[#007580] p-1 rounded-full" />
            <FaYoutube className="text-[#007580] border-2 border-[#007580] p-1 rounded-full" />
            <FaTwitter className="text-[#007580] border-2 border-[#007580] p-1 rounded-full" />
          </div>
        </div>
        {/* Category */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mt-14 px-4">
          <h1 className="text-2xl font-extrabold mb-7 text-[#9A9CAA]">Category</h1>
          <ul className="space-y-2">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>
        {/* Support */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mt-14 px-4">
          <h1 className="text-2xl font-extrabold mb-7 text-[#9A9CAA]">Support</h1>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mt-14 px-4">
          <h1 className="text-2xl font-extrabold mb-7 text-[#9A9CAA]">Newsletter</h1>
          <div className="flex flex-col sm:flex-row items-center">
            <input type="text" placeholder="Your email" className="w-full sm:w-[200px] h-[46px] px-4 mb-4 sm:mb-0 sm:mr-4 border-2 border-slate-300 rounded-md"/>
            <button className="bg-[#007580] text-white px-6 py-2 rounded-md">Subscribe</button>
          </div>
          <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
      {/* main footer */}
      <div className="border-t-2 border-slate-300 font-mono text-[18px] mt-8">
        <div className="w-full lg:w-[1000px] m-auto h-16 flex flex-wrap justify-between items-center px-4">
           <p className="text-[#9A9CAA] w-full sm:w-auto text-center sm:text-left">@ 2021 - Blogy - Designed & Developed by <span className="text-black">Zakirsoft</span></p>
           <Image alt="this payment method image" src={image} className="w-full sm:w-auto mt-4 sm:mt-0" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
