
"use client";
import {
  ChevronDown,
  CircleUserRound,
  EllipsisVertical,
  Search,
  ShoppingCart,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-fit w-full py-2 flex items-center justify-center bg-white">
      <div className="w-[95%] h-fit flex flex-row items-center justify-between gap-4 md:gap-8 flex-wrap">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={
              "https://hobbyistdecals.com/wp-content/uploads/al_opt_content/IMAGE/hobbyistdecals.com/wp-content/uploads/2024/06/Hobbiyst-Logo-Icon-3-300x96.png.bv_resized_desktop.png.bv.webp"
            }
            alt="logo"
            width={0}
            height={0}
            quality={100}
            unoptimized
            draggable={false}
            className="h-[2.5rem] md:h-[3.5rem] w-auto object-contain transform transition-transform duration-300 hover:scale-105"
          />
        </Link>
        {/* Search Bar */}
        <div className="flex-1 flex flex-row items-center justify-center border border-border bg-primary px-3 py-1 rounded-xl max-w-xs md:max-w-lg lg:max-w-xl">
          <Search className="w-5 h-5 md:w-6 md:h-6" />
          <input
            type="text"
            placeholder="Search for Products, Brand and More..."
            className="w-full px-2 md:px-4 py-1 border-none focus:outline-none focus:ring-0 bg-primary text-sm md:text-lg"
          />
        </div>
        {/* Login Always Visible */}
        <div className="flex flex-row items-center justify-center gap-2">
          <CircleUserRound className="text-black w-5 h-5 md:w-6 md:h-6" />
          <p className="text-black capitalize text-sm md:text-lg">login</p>
          <ChevronDown className="text-black h-5 w-5 md:h-6 md:w-6" />
        </div>
        {/* Cart & Become a Seller - Desktop Only */}
        <div className="hidden md:flex flex-row items-center justify-center gap-2">
          <ShoppingCart className="text-black w-5 h-5 md:w-6 md:h-6" />
          <p className="text-black capitalize text-sm md:text-lg">cart</p>
        </div>
        <div className="hidden md:flex flex-row items-center justify-center gap-2">
          <Store className="text-black w-5 h-5 md:w-6 md:h-6" />
          <p className="text-black capitalize text-sm md:text-lg">become a seller</p>
        </div>
        {/* More Options for Mobile */}
        <div className="md:hidden flex items-center relative">
          <EllipsisVertical className="h-6 w-6 cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <div className="fixed top-0 left-0 h-full w-48 bg-white shadow-lg flex flex-col p-4 transition-transform transform translate-x-0">
              <button className="self-end mb-4 text-xl" onClick={() => setShowMenu(false)}>&times;</button>
              <div className="flex flex-row items-center gap-2 py-2 border-b cursor-pointer">
                <ShoppingCart className="text-black w-5 h-5" />
                <p className="text-black capitalize text-sm">cart</p>
              </div>
              <div className="flex flex-row items-center gap-2 py-2 cursor-pointer">
                <Store className="text-black w-5 h-5" />
                <p className="text-black capitalize text-sm">become a seller</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
