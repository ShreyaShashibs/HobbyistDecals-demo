"use client";
import { useState } from "react";
import BrowsePanel from "@/components/global/browse-panel";

const HobbyistDecalsPage = () => {
  const [selectedService, setSelectedService] = useState("Decal Design");

  const services = [
    { name: "Decal Design", description: "Whether you need a custom design or have your own, we bring your ideas to life with precision and care." },
    { name: "Decal Print", description: "High-quality decal printing services using premium materials and eco-friendly solvent inks." },
    { name: "Stock Decals", description: "Choose from a wide variety of pre-made decals for different hobbies and industries." },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center">
      {/* Browse Panel */}
      <div className="w-full">
        <BrowsePanel />
      </div>

      <div className="w-full max-w-6xl py-16 px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-black text-center mb-4">
          Welcome to HobbyistDecals!
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-4 leading-relaxed">
          At HobbyistDecals, we believe that every hobbyist deserves to see their creative visions come to life 
          in the most vibrant and precise way possible. Whether you're a seasoned modeler or just starting out, 
          our mission is to provide you with the highest quality decals that add the perfect finishing touch to your projects.
        </p>
        <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed">
          We transform your creative visions into vibrant, high-quality decals. Although we are a new brand, 
          our team brings over 10 years of experience in the decal design and print industry. We pride ourselves on delivering 
          exceptional products and unparalleled customer service.
        </p>

        {/* Stats Section */}
        <div className=" max-w-xl text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    {[
      { value: "3K+", label: "UNIQUE PRODUCTS" },
      { value: "2K+", label: "HAPPY CUSTOMERS" },
      { value: "500+", label: "FB FOLLOWERS" },
      { value: "5K+", label: "PROJECT COMPLETED" },
    ].map((stat, index) => (
      <div
        key={index}
        className="bg-white p-7 rounded-md shadow border border-gray-300 "
      >
        <h2 className="text-2xl font-bold text-[#004080]">{stat.value}</h2>
        <p className="text-gray-600 uppercase font-medium text-sm">{stat.label}</p>
      </div>
    ))}
  </div>
</div>


        {/* Services Section */}
        <div className="mt-12 w-full">
          <h2 className="text-3xl font-extrabold text-black mb-4">Our Services:</h2>
          <div className="bg-white shadow-md rounded-lg border border-gray-300">
            <div className="flex border-b">
              {services.map((service) => (
                <button
                  key={service.name}
                  className={`flex-1 py-3 text-lg font-semibold transition-all ${
                    selectedService === service.name
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedService(service.name)}
                >
                  {service.name}
                </button>
              ))}
            </div>
            <p className="p-6 text-gray-700">{services.find(s => s.name === selectedService)?.description}</p>
          </div>
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { title: "OUR MISSION..", content: "At HobbyistDecals, our mission is to inspire creativity and elevate every project with our high-quality, custom decals." },
            { title: "OUR COMMITMENT..", content: "We are dedicated to providing top quality decals and exceptional customer service, using state-of-the-art printing techniques." },
            { title: "OUR BENEFITS..", content: "We offer a range of benefits, including precut decals, vibrant colors, versatile media options, and no minimum order requirements." },
          ].map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="mt-2 text-gray-600">{info.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyistDecalsPage;
