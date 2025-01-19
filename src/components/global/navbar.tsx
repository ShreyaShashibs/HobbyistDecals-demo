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
import React from "react";

const NavbarComponent = () => {
  return (
    <div className="min-h-fit w-full py-2 flex items-center justify-center bg-white">
      <div className="w-[95%] h-fit flex flex-row items-center justify-between gap-8">
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
            className="h-[3.5rem] w-auto object-contain transform transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="flex-1 flex flex-row items-center justify-center border border-border bg-primary px-3 py-1 rounded-xl">
          <Search />
          <input
            type="text"
            placeholder="Search for Products, Brand and More..."
            className="w-full px-4 py-1 border-none focus:outline-none focus:ring-0 bg-primary text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <CircleUserRound className="text-black w-6 h-6" />
          <p className="text-black capitalize text-lg">login</p>
          <ChevronDown className="text-black h-6 w-6" />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <ShoppingCart className="text-black w-6 h-6" />
          <p className="text-black capitalize text-lg">cart</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Store className="text-black w-6 h-6" />
          <p className="text-black capitalize text-lg">become a seller</p>
        </div>
        <div>
          <EllipsisVertical className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
