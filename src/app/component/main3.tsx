import Image from "next/image";
import chairImage from "../component/Image (1).png";
import chairImage1 from "../component/Image (2).png";
import chairImage2 from "../component/Image (5).png";
import chairImage3 from "../component/Image.png";

function Main3() {
  return (
    <>
      <div className="w-full lg:w-[1020px] m-auto mt-3 p-4 lg:p-0">
        <div>
          <h1 className="text-2xl font-bold text-center lg:text-left">Featured Products</h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between mt-8 font-mono">
          <div className="w-full sm:w-1/2 md:w-1/4 p-2">
            <Image alt="chair Image" src={chairImage} width={250} height={312} className="w-full" />
            <p className="space-y-2 mt-2 text-[#029FAE] text-center lg:text-left">Library Stool Chair</p>
            <b className="block text-center lg:text-left">$20</b>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 p-2">
            <Image alt="chair Image" src={chairImage1} width={250} height={312} className="w-full" />
            <p className="space-y-2 mt-2 text-center lg:text-left">Library Stool Chair</p>
            <b className="block text-center lg:text-left">$20</b>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 p-2">
            <Image alt="chair Image" src={chairImage2} width={250} height={312} className="w-full" />
            <p className="space-y-2 mt-2 text-center lg:text-left">Library Stool Chair</p>
            <b className="block text-center lg:text-left">$20</b>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 p-2">
            <Image alt="chair Image" src={chairImage3} width={250} height={312} className="w-full" />
            <p className="space-y-2 mt-2 text-center lg:text-left">Library Stool Chair</p>
            <b className="block text-center lg:text-left">$20</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main3;
