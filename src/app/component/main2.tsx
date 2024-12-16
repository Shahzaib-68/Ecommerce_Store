import Image from "next/image";
import logo from "../component/Logo (1).png";
import logo1 from "../component/Logo (2).png";
import logo2 from "../component/Logo (3).png";
import logo3 from "../component/Logo (4).png";
import logo4 from "../component/Logo (5).png";
import logo5 from "../component/Logo (6).png";
import logo6 from "../component/Logo.png";

function Main2() {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-[1120px] m-auto p-4">
        <Image alt="Logo 1" src={logo} width={100} height={100} className="m-2" />
        <Image alt="Logo 2" src={logo1} width={100} height={100} className="m-2" />
        <Image alt="Logo 3" src={logo2} width={100} height={100} className="m-2" />
        <Image alt="Logo 4" src={logo3} width={100} height={100} className="m-2" />
        <Image alt="Logo 5" src={logo4} width={100} height={100} className="m-2" />
        <Image alt="Logo 6" src={logo5} width={100} height={100} className="m-2" />
        <Image alt="Logo 7" src={logo6} width={100} height={100} className="m-2" />
      </div>
    </>
  );
}

export default Main2;
