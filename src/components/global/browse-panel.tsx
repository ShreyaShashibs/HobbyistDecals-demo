"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const BrowsePanelComponent = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[isetIsOurpolicyOpen,setIsOurpolicyOpen]=useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const menuItems = [
    { name: "HD Decals", img: "/images/home-browse-panel-hd-decals.jpg" },
    {
      name: "About Us",
      img: "/images/home-browse-panel-about-us.png",
      dropdown: true,
      subItems: [
        {name:" HobbyistDecals",path:"/hobbyistDecals"},
        { name: "Our gallery", path: "/our-story" },
        { name: "Our Media", path: "/our-team" },
        { name: "FAQ", path: "/mission-vision" },
        {
          name: "Our Policy",
          dropdown: true,
          subItems: [
            { name: "Shipping & Return Policy", path: "/shipping-return-policy" },
            { name: "Privacy Policy", path: "/privacy-policy" },
            { name: "Terms & Conditions", path: "/terms-conditions" },
          ],
        },
      ],
    },
    { name: "Custom Decal Design", img: "/images/home-browse-panel-custom-decal-design.png" },
    { name: "Decal Shop", img: "/images/home-browse-panel-decal-shop.png",path:"/Shop" },
    { name: "Bulk Decals", img: "/images/home-browse-panel-bulk-decals.png", path: "/bulk-decals" },
    { name: "Decal Print", img: "/images/home-browse-panel-decal-print.png", path: "/decal-print" },
    
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
        setIsCategoriesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full py-3 bg-white">
      {/* Desktop Menu */}
      <div className="relative z-[50]">
      <div className="hidden md:flex justify-center items-center gap-6 lg:gap-12">
        
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-1 cursor-pointer hover:scale-95 transition-all duration-300 overflow-visible "
            onClick={() => item.path && router.push(item.path)}
            onMouseEnter={() => item.dropdown && setIsAboutDropdownOpen(true)}
            onMouseLeave={() => item.dropdown && setIsAboutDropdownOpen(false)}
          >
            <Image src={item.img} alt={item.name} width={50} height={50} className="object-contain" />
            <p className="capitalize font-semibold text-black text-xs sm:text-sm md:text-base text-center hover:text-blue-600">
              {item.name}
            </p>
            {item.dropdown && <ChevronDown className={`w-4 h-4 text-black ${isAboutDropdownOpen ? "rotate-180 text-blue-600" : ""}`} />}
            {item.dropdown && isAboutDropdownOpen && (
              
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-60 bg-white border-[rgb(29,78,216)] shadow-lg border border-gray-200 rounded-lg z-[9999999]  p-2 ">
                <ul className="flex flex-col gap-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-sm text-gray-700 relative group">
                      {subItem.dropdown ? (
                        <>
                          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            {subItem.name}
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform" />
                          </div>
                          
                          <ul className="absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 shadow-lg rounded-lg p-2 hidden group-hover:block z-50">
                            {subItem.subItems.map((nestedItem, nestedIndex) => (
                              <li
                                key={nestedIndex}
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b"
                                onClick={() => router.push(nestedItem.path)}
                              >
                                {nestedItem.name}
                              </li>
                            ))}
                          </ul>
                         
                        </>
                      ) : (
                        <div
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b"
                          onClick={() => router.push(subItem.path)}
                        >
                          {subItem.name}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
            )}
          </div>
        ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-4">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu */}
{isMobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 z-50">
    {menuItems.map((item, index) => (
      <div key={index} className="w-full px-6">
        <div
          className="text-black text-base font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => {
            if (!item.dropdown && item.path) {
              router.push(item.path);
              setIsMobileMenuOpen(false);
            } else {
              setIsAboutDropdownOpen((prev) => !prev);
            }
          }}
        >
          {item.name}
          {item.dropdown && <ChevronDown className="w-4 h-4" />}
        </div>

        {/* First Level Submenu */}
        {item.dropdown && isAboutDropdownOpen && (
          <div className="pl-4 mt-2">
            {item.subItems?.map((subItem, subIndex) => (
              <div key={subIndex} className="text-sm text-gray-800 py-1">
                {subItem.dropdown ? (
                  <>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setIsOurpolicyOpen(
                          (prev) => !prev
                        )
                      }
                    >
                      {subItem.name}
                      <ChevronDown className="w-4 h-4" />
                    </div>

                    {/* Second Level Submenu */}
                    {isetIsOurpolicyOpen && (
                      <div className="pl-4 mt-1">
                        {subItem.subItems?.map((nested, nestedIndex) => (
                          <div
                            key={nestedIndex}
                            className="text-sm text-gray-600 py-1 cursor-pointer"
                            onClick={() => {
                              router.push(nested.path);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {nested.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      router.push(subItem.path);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {subItem.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}

{/* Always Visible Categories & Join To Earn */}
<div className="flex justify-center items-center gap-6 mt-6 md:mt-5">
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <Image src="/images/home-browse-panel-joinus.png" alt="JoinToEarn" width={50} height={50} className="object-contain" />
          <button className="capitalize font-semibold text-white text-xs sm:text-sm md:text-base bg-[rgb(29,78,216)] rounded-2xl p-3">
            Join To Earn
          </button>
        </div>
        
        <div
          className="relative flex flex-col items-center justify-center gap-2 cursor-pointer"
          onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
          onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
        >
          <Image src="/images/home-browse-panel-categories.png" alt="Categories" width={50} height={50} className="object-contain" />
          <div className="w-full flex flex-row items-center justify-center gap-1 bg-[rgb(29,78,216)] rounded-2xl p-3">
            <button className="capitalize font-semibold text-white text-xs sm:text-sm md:text-base text-center hover:text-blue-600">
              Categories
            </button>
            <ChevronDown className={`w-5 h-5 text-black ${isCategoriesDropdownOpen ? "rotate-180 text-blue-600" : ""}`} />
          </div>
          
          {isCategoriesDropdownOpen && (
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg z-50 p-2">
              <ul className="flex flex-col gap-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Truck Decals for Scale Models</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Armor Decals for Model Enthusiasts</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Car Decals for Every Enthusiast</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Logo & Symbol Decals</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Military Decals</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-gray-700 border-b">Others</li>
              </ul>
            </div>
          )}
        </div>
        </div>
      
    </div>
  );
};

export default BrowsePanelComponent;

