"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TbDirection } from "react-icons/tb";
import { PiTrolleySuitcaseDuotone } from "react-icons/pi";
import { RiArmchairFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full h-12 bg-[#272343] flex items-center justify-between text-neutral-50 px-4 md:px-10">
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaCheck className="text-green-500" />
          <h3>Free shipping on all orders over $50</h3>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center space-x-4 md:space-x-7 text-sm md:text-base">
            <li className="flex items-center space-x-1">
              <span>Eng</span>
              <TbDirection className="text-[16px] md:text-[20px]" />
            </li>
            <Link href="/dashboard/faq">Faqs</Link>
            <li>Need Help</li>
          </ul>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full h-20 bg-[#F0F2F3] flex items-center justify-between px-4 md:px-24">
        <div className="flex items-center space-x-2 md:space-x-3 text-xl md:text-3xl">
          <RiArmchairFill className="text-[#209FAE] text-3xl md:text-4xl font-bold" />
          <h1>Comforty</h1>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4 text-lg md:text-2xl font-mono font-bold bg-white p-2 md:p-3 rounded-md">
          <PiTrolleySuitcaseDuotone className="text-lg md:text-2xl" />
          <h1><Link href="/dashboard/card">Card</Link></h1>
        </div>
        <button onClick={() => setShow(!show)} className="text-4xl md:hidden ml-4">
          <IoMenu />
        </button>
      </div>
      {/* Section 3 */}
      <div className={`md:flex ${show ? "block" : "hidden"} bg-[#F0F2F3]  md:m-6 md:bg-transparent md:w-full w-auto h-full md:px-28 items-center font-bold md:text-black  md:bg-[#fff]`}>
        <div className="flex flex-col md:flex-row p-4 w-auto md:p-0">
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 cursor-pointer">
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/dashboard/">Shop</Link></li>
            <li> <Link href="/dashboard/product">Product</Link></li>
            <li> <Link href="/dashboard/page">Page</Link></li>
            <li> <Link href="/dashboard/about">About</Link></li>
          </ul>
          <div className="md:pl-4 mt-4 md:mt-0">
            <ul className="cursor-pointer">
              <li><Link href="/dashboard/contactUs">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
