import React from 'react';
import Image from 'next/image';
import chair from "../../component/Image (1).png";
import chair2 from "../../component/Image.png";
import chair3 from "../../component/Image (5).png";
import chair4 from "../../component/Image (6).png";
import chairImage2 from "../../component/Image (2).png";
import chairImage4 from "../../component/Image (8).png";
import chairImage5 from "../../component/Image (4).png";
import chairImage6 from "../../component/Image (7).png";
import chairImage7 from "../../component/item-category-2.png";

function ProdctComponent() {
  const imageContent = [
    {
      image: chair,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chair2,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chair3,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chair4,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage2,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chair2,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage4,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage5,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chair,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage6,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage2,
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      image: chairImage7,
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto mt-11 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageContent.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <Image
                alt="this is chair image"
                src={item.image}
                width={250}
                height={250}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-[18px] font-semibold text-[#029FAE]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* section 2: Newsletter */}
      <div className="w-full h-auto p-5 bg-[#1E28320D] mt-28 ">
        <div className="md:w-[1200px] w-full mx-auto p-5 space-y-8">
          <div className="text-2xl font-bold text-center ">
            <h1>Or subscribe to the newsletter</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Email address..."
              className="border-b-2 border-solid border-black w-full md:w-[400px] py-2 focus:outline-none"
            />
            <button className="bg-[#029FAE] text-white px-6 py-2 rounded-full font-bold">
              SUBMIT
            </button>
          </div>
          <div className="font-extrabold text-3xl text-center">
            <h1>Follow products and discounts on Instagram</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto">
            <Image
              alt="this is chair image"
              src={chair}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              alt="this is chair image"
              src={chair4}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              alt="this is chair image"
              src={chairImage5}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              alt="this is chair image"
              src={chair2}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              alt="this is chair image"
              src={chairImage2}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image
              alt="this is chair image"
              src={chairImage6}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
       
    </>
  );
}

export default ProdctComponent;
