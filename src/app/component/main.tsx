import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import chair from "../component/Product Image.png";
// import '../styles/ButtonAnimation.css';  // Ensure to import the CSS file

function Main() {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1120px] m-auto h-auto lg:h-[650px] bg-[#F0F2F3] rounded-lg p-4 lg:p-0">
      <div className="relative lg:left-12 lg:top-[30%] basis-[50%] space-y-4 lg:space-y-9 text-center lg:text-left">
        <h1 className="text-2xl font-thin font-sans">Welcome to chairy</h1>
        <p className="text-3xl lg:text-5xl font-bold">Best Furniture Collection for your interior.</p>
        <button className="awesome-bounce bg-[#029FAE] w-36 h-12 rounded-lg flex items-center justify-center mx-auto lg:mx-0 space-x-2">
          Shop Now <span className="ml-2"><FaArrowRight /></span>
        </button>
      </div>
      <div className="flex justify-center lg:justify-end items-center lg:items-start mt-6 lg:mt-0">
        <Image alt="this chair image" src={chair} className="w-full lg:w-auto p-7" />
      </div>
    </div>
  );
}

export default Main;
