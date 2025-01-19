import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const BrowsePanelComponent = () => {
  return (
    <div className="min-h-fit w-full py-3 flex items-center justify-center bg-white">
      <div className="w-[85%] h-full flex flex-row items-center justify-center gap-12 flex-nowrap">
        <div className="group flex flex-col items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-about-us.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="w-full flex flex-row items-center justify-center gap-1">
            <p className="capitalize font-semibold text-black text-base text-center transform transition-all duration-300 group-hover:text-link">
              about us
            </p>
            <ChevronDown className="w-5 h-5 text-black transform transition-all duration-300 group-hover:text-link group-hover:rotate-180" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-custom-decal-design.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            custom decal design
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-decal-shop.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            decal shop
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-bulk-decals.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            bulk decals
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-decal-print.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            decal print
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-blogs.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            blogs
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-contact-us.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <p className="capitalize font-semibold text-black text-base text-center">
            contact us
          </p>
        </div>
        <div className="group flex flex-col items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-95">
          <Image
            src={"/images/home-browse-panel-categories.png"}
            alt="category_1_img"
            quality={100}
            unoptimized
            width={0}
            height={0}
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="w-full flex flex-row items-center justify-center gap-1">
            <p className="capitalize font-semibold text-black text-base text-center transform transition-all duration-300 group-hover:text-link">
              categories
            </p>
            <ChevronDown className="w-5 h-5 text-black transform transition-all duration-300 group-hover:text-link group-hover:rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePanelComponent;
