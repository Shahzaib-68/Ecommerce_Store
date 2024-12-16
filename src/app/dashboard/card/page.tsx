import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import image from "../../component/Image (2).png";
import image2 from "../../component/Image (4).png";

function CardComponent() {
  return (
    <div className="w-full lg:w-[1120px] m-auto py-20 px-4">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row justify-between mb-8 border-b-2 border-[#E5E5E5] pb-8">
        <div className="flex flex-col lg:flex-row">
          <div className="pr-7 mb-4 lg:mb-0">
            <Image alt="Library Stool Chair" src={image} width={300} height={200} className="w-full h-auto rounded-lg" />
          </div>
          <div className="space-y-4 text-gray-700 lg:pl-4">
            <h1 className="text-black text-2xl font-bold">Library Stool Chair</h1>
            <p>Ashen Slate/Cobalt Bliss</p>
            <p>Size L • Quantity 1</p>
            <div className="flex space-x-4 text-2xl text-black mt-4">
              <CiHeart className="cursor-pointer hover:text-red-500" />
              <RiDeleteBin6Line className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="text-right text-xl font-bold mt-4 lg:mt-0">$99</div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row justify-between mb-8 border-b-2 border-[#E5E5E5] pb-8">
        <div className="flex flex-col lg:flex-row">
          <div className="pr-7 mb-4 lg:mb-0">
            <Image alt="Library Stool Chair" src={image2} width={300} height={200} className="w-full h-auto rounded-lg" />
          </div>
          <div className="space-y-4 text-gray-700 lg:pl-4">
            <h1 className="text-black text-2xl font-bold">Library Stool Chair</h1>
            <p>Ashen Slate/Cobalt Bliss</p>
            <p>Size L • Quantity 1</p>
            <div className="flex space-x-4 text-2xl text-black mt-4">
              <CiHeart className="cursor-pointer hover:text-red-500" />
              <RiDeleteBin6Line className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="text-right text-xl font-bold mt-4 lg:mt-0">$99</div>
      </div>
      {/* Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-[#F7F7F7] rounded-lg p-4 lg:py-8 lg:px-16">
        <div className="w-full lg:w-auto mb-4 lg:mb-0">
          <h1 className="font-bold font-mono text-2xl mb-4">Summary</h1>
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <b>$198.00</b>
          </div>
          <div className="flex justify-between py-2">
            <span>Estimated Delivery & Handling</span>
            <b>Free</b>
          </div>
          <div className="flex justify-between border-t-2 border-b-2 py-2">
            <span>Total</span>
            <b>$198.00</b>
          </div>
        </div>
        <button className="bg-[#029FAE] text-white rounded-full w-full lg:w-[200px] h-11 font-bold text-[18px]">
          Member Checkout
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
