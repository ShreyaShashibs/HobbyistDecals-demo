"use client";
import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 p-4 md:p-6 bg-white w-full">
      {/* Left Banner */}
      <div className="relative flex items-center bg-[#EA580C] text-white p-6 md:p-10 rounded-2xl w-full md:w-3/4 min-h-[150px]">
        <div className="absolute left-4 md:left-6">
          <Image src="/images/mascot.png" alt="Mascot" width={250} height={250} className="w-[30vw] max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-auto" />
        </div>
        <div className="pl-24 md:pl-32 lg:pl-40 xl:pl-48 ml-20 md:ml-32 lg:ml-40 xl:ml-56">
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">
            PRECUT HOBBYIST DECAL SHOP
          </h2>
          <p className="text-sm md:text-xl mt-1 text-center md:text-left">
            <a href="#" className="underline hover:text-[#2563EB]">
              Up to 30% Off | SHOP NOW →
            </a>
          </p>
        </div>
      </div>

      {/* Right Banner */}
      <div className="flex items-center justify-between bg-[#2563EB] text-white p-4 md:p-6 rounded-2xl w-full md:w-1/4 min-h-[150px] text-center">
        <div>
          <h3 className="text-md md:text-lg font-bold">BULK DECALS</h3>
          <p className="text-xs md:text-sm mt-1">UP TO 50% OFF</p>
          <a href="#" className="text-xs underline mt-1 block">
            Get a Quote →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
