import chair from "../../component/Image.png";
import Image from "next/image";
import logo from "../../component/Checkmark--outline.png";
import logo1 from "../../component/Delivery.png";
import logo2 from "../../component/Purchase.png";
import logo3 from "../../component/Sprout.png";
import sofaImage from "../../component/Large.png";
import chairImage from "../../component/Parent (1).png";
import chair2Image from "../../component/Parent.png";

function AboutUS() {
  return (
    <>
      <div className="w-full px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:mt-14 mt-24 md:space-x-8 space-y-8 md:space-y-0">
          <div className="bg-[#007580] text-neutral-50 flex flex-col justify-between max-w-lg md:w-[600px] w-full h-auto md:h-[400px] rounded-lg p-6 md:p-11 space-y-4 md:space-y-8">
            <div>
              <h1 className="text-2xl md:text-[28px] font-bold">
                About Us - Comforty
              </h1>
              <p className="text-sm md:text-base mt-4">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
            </div>
            <div className="pt-6 md:pt-11 bg-[#F9F9F926] h-12 w-40 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#F9F9F949]">
              <h2 className="text-base md:text-lg md:mb-11 mb-6">
                View collection
              </h2>
            </div>
          </div>

          <div className="w-full md:w-[500px] h-[400px] flex items-center justify-center">
            <Image
              alt="this is chair image"
              src={chair}
              width={800}
              layout="responsive"
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* What makes our Brand Different */}
        <div className="max-w-6xl mx-auto mt-16 px-4 md:px-0">
          <h1 className="text-center text-2xl font-mono font-bold mb-8">
            What makes our Brand Different
          </h1>
          <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5">
            <div className="text-[#007580] bg-[#F9F9F9] p-5 space-y-5 rounded-lg shadow-md">
              <Image alt="this is logo" src={logo1} width={34} height={34} />
              <h1 className="font-bold text-[18px]">Next day as standard</h1>
              <p>
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
            <div className="text-[#007580] bg-[#F9F9F9] p-5 space-y-5 rounded-lg shadow-md">
              <Image alt="this is logo" src={logo} width={34} height={34} />
              <h1 className="font-bold text-[18px]">Made by true artisans</h1>
              <p>
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
            <div className="text-[#007580] bg-[#F9F9F9] p-5 space-y-5 rounded-lg shadow-md">
              <Image alt="this is logo" src={logo2} width={34} height={34} />
              <h1 className="font-bold text-[18px]">Unbeatable prices</h1>
              <p>
                For our materials and quality, you won't find better prices
                anywhere.
              </p>
            </div>
            <div className="text-[#007580] bg-[#F9F9F9] p-5 space-y-5 rounded-lg shadow-md">
              <Image alt="this is logo" src={logo3} width={34} height={34} />
              <h1 className="font-bold text-[18px]">Recycled packaging</h1>
              <p>
                We use 100% recycled packaging to ensure our footprint is more
                manageable.
              </p>
            </div>
          </div>
        </div>
        {/* our papular product  */}

        <div className="w-full lg:w-[1120px] m-auto py-20">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Our Popular Products
          </h1>
          <div className="font-mono grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Image
                alt="this is sofa image"
                src={sofaImage}
                width={600}
                height={300}
                className="w-full h-[375px] rounded-lg"
              />
              <p className="mt-2 text-center">The Poplar suede sofa</p>
              <b className="block text-center">$99.00</b>
            </div>
            <div>
              <Image
                alt="this is chair image"
                src={chair2Image}
                width={300}
                height={300}
                className="w-full h-[375px] rounded-lg"
              />
              <p className="mt-2 text-center">The Dandy chair</p>
              <b className="block text-center">$99.00</b>
            </div>
            <div>
              <Image
                alt="this is chair image"
                src={chairImage}
                width={300}
                height={300}
                className="w-full h-[375px] rounded-lg"
              />
              <p className="mt-2 text-center">The Dandy chair</p>
              <b className="block text-center">$99.00</b>
            </div>
          </div>
        </div>

        {/* our papular product  */}
      </div>
    </>
  );
}

export default AboutUS;
