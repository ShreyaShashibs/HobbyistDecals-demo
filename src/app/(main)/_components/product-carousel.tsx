"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      image: "/images/product1.png",
      title: "Doolan Ballast Box – 1/50 – Water Decal",
      price: "$9.90",
    },
    {
      id: 2,
      image: "/images/product2.png",
      title: "Terminator 2 – Freightliner FLA 9664 Wrecker – Water Decal",
      price: "$15.99",
    },
    {
      id: 3,
      image: "/images/product3.png",
      title: "SCHUTT Truck Decals – 1/25 – Water Decal",
      price: "$9.90",
    },
    {
      id: 4,
      image: "/images/product4.png",
      title: "UHLENBERG Haulage Peterbilt 359 Truck Decals – Water Decal",
      price: "$15.99",
    },
    {
      id: 5,
      image: "/images/product5.png",
      title: "HVH Truck & Trailer Decal – High Volume Haulage",
      price: "$15.90",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-orange to-[#2563EB] py-6 w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 bg-gray-100 rounded-xl">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 md:p-12 rounded-br-[80px] md:rounded-br-[120px] rounded-tr-[80px] md:rounded-tr-[120px] text-center md:text-left">
          <h4 className="text-3xl md:text-4xl font-bold text-[#2563EB] font-sans">Premium Decals Collection</h4>
          <img
            src="https://hobbyistdecals.com/wp-content/uploads/al_opt_content/IMAGE/hobbyistdecals.com/wp-content/uploads/2024/06/Hobbiyst-Logo-Icon-3-300x96.png.bv_resized_desktop.png.bv.webp"
            alt="Mascot"
            className="w-full max-w-[400px] md:max-w-[500px] mx-auto mt-4"
          />
          <p className="text-[#EA580C] font-semibold text-lg md:text-xl mt-4 ml-12">Quality You Can Trust</p>
        </div>

        {/* Right Section - Product Carousel */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-xl font-bold text-center text-black mb-4 ">
            Quantity Discount up to 30% Off
          </h2>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="p-2 md:p-4">
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 md:h-40 object-cover rounded"
                  />
                  <h3 className="text-xs md:text-sm font-semibold mt-2">{product.title}</h3>
                  <p className="text-md md:text-lg font-bold text-blue-800">{product.price}</p>
                  <button className="bg-gray-300 px-3 py-1 mt-2 text-xs md:text-sm font-medium rounded-md">
                    SELECT OPTIONS
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
