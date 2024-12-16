import React from 'react';
import Image from 'next/image';
import chairImage from "../../component/Image (1).png";
import chairImage2 from "../../component/Image (2).png";
import chairImage3 from "../../component/Image.png";
import chairImage4 from "../../component/Image (8).png";
import chairImage5 from "../../component/Image (4).png";
import chairImage6 from "../../component/Image (7).png";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function PageComponent() {
  return (
    <>
      <div className='md:w-[1120px] m-auto mt-11 w-full flex md:flex-row flex-col p-4 px-5'>
        <div className='flex justify-center mb-4 md:mb-0'>
          <Image alt='this is chair Image' width={350} height={350} src={chairImage} className='rounded-lg shadow-md'/>
        </div>
        <div className='w-full md:w-[500px] md:ml-20 space-y-4'>
          <h1 className='font-bold text-4xl'>Library Stool Chair</h1>
          <b className='inline-block text-[20px] bg-gradient-to-r from-[#029FAE] to-[#02D8AE] text-white rounded-full px-6 py-2 h-10 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>$20.00 USD</b>
          <p className='text-[#272343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <button className='flex justify-center items-center text-[18px] font-bold bg-gradient-to-r from-[#029FAE] to-[#02D8AE] text-white w-[180px] rounded-full py-2 h-10 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'> 
            <HiOutlineShoppingCart className='mx-2'/>Add To Cart 
          </button>
        </div>
      </div>

      <div className='md:w-[1120px] m-auto mt-11 w-full flex justify-between items-center font-bold'>
        <h1 className='text-2xl'>Featured Products</h1>
        <p className='border-b-2 border-solid border-[#272343] cursor-pointer'>View all</p>
      </div>

      <div className='md:w-[1350px] m-auto mt-11 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-5'>
        {[chairImage2, chairImage3, chairImage4, chairImage5, chairImage6].map((img, index) => (
          <div key={index} className='bg-slate-50 rounded-lg shadow-md p-4'>
            <Image alt='this is chair Image' width={250} height={250} src={img} className='w-full h-auto rounded-lg'/>
            <div className='flex justify-between font-mono mt-4'>
              <p>Library Stool Chair</p>
              <b>$99</b>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PageComponent;
