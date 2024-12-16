import Image from "next/image";
import orangeChair from "../component/Image (2).png";
import whiteChair from "../component/Image.png";
import brownChair from "../component/item-category-2.png";
import chair from "../component/Image (5).png"

function Main5() {
  return (
    <>
      <div className="w-full lg:w-[1345px] m-auto box-border relative mt-28 p-3">
        <h1 className="rotate-90 font-mono font-bold text-[20px] absolute left-0 text-center top-56">
          Explore new and popular styles
        </h1>
        <div className="w-full lg:w-[1000px] m-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <Image alt="this chair image" width={600} height={500} src={orangeChair} className="w-full h-auto"/>
            </div>
            <div>
              <Image alt="this chair image" width={300} height={200} src={brownChair} className="w-full h-auto"/>
            </div>
            <div>
              <Image alt="this chair image" width={300} height={200} src={whiteChair} className="w-full h-auto"/>
            </div>
            <div>
              <Image alt="this chair image" width={300} height={200} src={chair} className="w-full h-auto"/>
            </div>
            <div>
              <Image alt="this chair image" width={300} height={200} src={whiteChair} className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main5;
