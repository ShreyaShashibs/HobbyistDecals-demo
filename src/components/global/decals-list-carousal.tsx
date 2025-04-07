"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  list: Array<{ img: string; title: string }>;
};

const DecalListCarousalComponent = ({ title, list }: Props) => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-[300px] p-4 flex flex-col items-start justify-center gap-6 bg-white">
      <h2 className="capitalize text-xl text-black font-semibold">{title}</h2>
  
      {isMobile ? (
        <>
          <div className="w-full flex flex-wrap gap-2 justify-center">
            {list.slice(0, visibleItems).map((item, index) => (
              <div
                key={index}
                className="w-[48%] border border-border rounded-xl overflow-hidden"
              >
                <div className="h-[275px] w-full flex flex-col items-center justify-center gap-2 p-2">
                  <Image
                    src={item.img}
                    alt={index.toString()}
                    width={0}
                    height={0}
                    unoptimized
                    quality={100}
                    draggable="false"
                    className="h-[175px] w-full object-cover rounded-lg"
                  />
                  <p className="flex-1 w-full text-base text-center leading-5 px-2 text-wrap line-clamp-3 truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {visibleItems < list.length && (
            <Button onClick={handleLoadMore} className="mt-4 self-center">
              More Categories ↓
            </Button>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-row items-center justify-center gap-3">
          <Carousel
            opts={{ align: "start" }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full h-full"
          >
            <CarouselContent className="w-full h-full flex gap-4 mx-1">
              {list.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/6 bg-transparent h-full border border-border rounded-xl overflow-clip !p-0"
                >
                  <div className="h-[275px] w-full flex flex-col items-center justify-center gap-2 p-2">
                    <Image
                      src={item.img}
                      alt={index.toString()}
                      width={0}
                      height={0}
                      unoptimized
                      quality={100}
                      draggable="false"
                      className="h-[175px] w-full object-cover rounded-lg"
                    />
                    <p className="flex-1 w-full text-base text-center leading-5 px-2 text-wrap line-clamp-3 truncate">
                      {item.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  );
};  
export default DecalListCarousalComponent;
