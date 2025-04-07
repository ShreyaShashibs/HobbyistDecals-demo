"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    image: "/images/broimg1.png",
    title: "Hurricane P-40M P-40N Decal",
    price: "$17.99",
    link: "https://hobbyistdecals.com/decal-shop/hurricane-p-40m-p-40n-p47m/",
  },
  {
    id: 2,
    image: "/images/broimg2.png",
    title: "HK Panel Van Car Decals",
    price: "$9.90",
    link: "/product/hk-panel-van",
  },
  {
    id: 3,
    image: "/images/broimg3.png",
    title: "National Heavy Haulage Decal",
    price: "$12.99",
    link: "/product/national-heavy-haulage",
  },
  {
    id: 4,
    image: "/images/broimg4.png",
    title: "Yak-40 Airlines Aircraft Decal",
    price: "$12.99",
    link: "/product/yak40-airlines",
  },
  {
    id: 5,
    image: "/images/broimg5.png",
    title: "Yak-40 Airlines Aircraft Decal",
    price: "$12.99",
    link: "/product/yak40-airlines",
  },
  {
    id: 6,
    image: "/images/broimg6.png",
    title: "Yak-40 Airlines Aircraft Decal",
    price: "$12.99",
    link: "/product/yak40-airlines",
  },
];

function FeaturedDecals() {
  return (
    <div className=" mx-auto px-6 py-8 bg-white w-full">
      <h2 className="text-2xl font-bold text-left mb-6">
        Browse Our Featured Decals – Top Picks for Quality and Design
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={product.link} className="group">
            <div className="  transition hover:shadow-2xl hover:scale-105">
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-sm font-semibold mt-2 group-hover:text-blue-500">
                {product.title || "No Title Available"}
              </h3>
              <p className="text-blue-600 font-bold">
                {product.price || "Price Unavailable"}
              </p>
              <button className="mt-2 w-full  text-gray-600 underline px-4 py-1 rounded hover:bg-blue-600 transition">
                Select Options
              </button>
            </div>
          </Link>
        ))}
      </div>
      

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        
      
        {[1, 2, 3, "...", 52].map((num, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${
              num === 1 ? "bg-gray-800 text-white" : "hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
          
        ))}
        
      </div>
      
    </div>
  );
}

export default FeaturedDecals;
