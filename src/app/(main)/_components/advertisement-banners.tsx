"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { advertisementBannerImageUrls } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const AdvertisementBannersComponent = () => {
  return (
    <div className="w-full ">
      <Carousel
        className="w-full relative  z-[10]"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full !m-0">
          {advertisementBannerImageUrls.map((imgUrl, index) => (
            <CarouselItem key={index} className="w-full !p-0">
              <div className="relative w-full aspect-[3/1] md:aspect-[5/2]  lg:aspect-[16/8] xl:aspect-[16/2] ">
                <Image
                  src={imgUrl}
                  alt={`img ${index}`}
                  fill
                  unoptimized
                  quality={100}
                  className="object-cover "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AdvertisementBannersComponent;
