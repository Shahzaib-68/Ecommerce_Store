import Image from "next/image";
import chairphoto from "../component/Image (4).png";
import chairphoto1 from "../component/Image (6).png";
import chairphoto2 from "../component/Image (7).png";

function Main4() {
  return (
    <>
      <div className="w-full lg:w-[1020px] m-auto mt-16 p-4 lg:p-0">
        <h1 className="font-mono text-3xl font-extrabold mb-6 text-center ">
          Top categories
        </h1>
        <div className="flex md:flex-row flex-col justify-center  font-mono ">
          <div className="relative m-2 w-full sm:w-1/2 lg:w-[330px]">
            <Image
              alt="this is chair photo"
              src={chairphoto}
              width={330}
              height={300}
              className="block w-full"
            />
            {/* text bg color div */}
            <div className="bgColor text-[18px] px-5 absolute bottom-0 w-full text-center rounded-lg">
              <h1>Wing Chair</h1>
              <p>
                <b>3,584</b> Products
              </p>
            </div>
            {/* text bg color div */}
          </div>
          <div className="relative m-2 w-full sm:w-1/2 lg:w-[330px]">
            <Image
              alt="this is chair photo"
              src={chairphoto1}
              width={330}
              height={300}
              className="block w-full"
            />
            {/* text bg color div */}
            <div className="bgColor text-[18px] px-5 absolute bottom-0 w-full text-center rounded-lg">
              <h1>Wooden Chair</h1>
              <p>
                <b>157</b> Products
              </p>
            </div>
            {/* text bg color div */}
          </div>
          <div className="relative m-2 w-full sm:w-1/2 lg:w-[330px]">
            <Image
              alt="this is chair photo"
              src={chairphoto2}
              width={330}
              height={300}
              className="block w-full"
            />
            {/* text bg color div */}
            <div className="bgColor text-[18px] px-5 absolute bottom-0 w-full text-center rounded-lg">
              <h1>Desk Chair</h1>
              <p>
                <b>154</b> Products
              </p>
            </div>
            {/* text bg color div */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main4;
