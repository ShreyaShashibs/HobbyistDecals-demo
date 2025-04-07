import Image from "next/image";
import React from "react";

const UserBenefitsComponent = () => {
  return (
    <div className="w-full h-fit bg-white py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
      <div className="flex flex-row md:flex-1 w-full md:w-auto h-full items-center justify-start gap-4">
        <Image
          src={"/images/home-user-benefits-custom-decal-design.png"}
          alt="Custom Decal Designs"
          width={40}
          height={40}
          unoptimized
          quality={100}
          className="h-10 w-10 object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="text-sm uppercase text-black">Custom Decal Designs</h2>
          <p className="text-sm text-grey">$25 / Hr</p>
        </div>
      </div>
      <div className="hidden md:block h-[2.5rem] w-[0.5px] bg-border"></div>
      <div className="flex flex-row md:flex-1 w-full md:w-auto h-full items-center justify-start gap-4">
        <Image
          src={"/images/home-user-benefits-hd-printing.png"}
          alt="HD Printing"
          width={44}
          height={44}
          unoptimized
          quality={100}
          className="h-11 w-11 object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="text-sm uppercase text-black">HD Printing (1440DPI)</h2>
          <p className="text-sm text-grey">(CMYKLcLm + Metallic + White)</p>
        </div>
      </div>
      <div className="hidden md:block h-[2.5rem] w-[0.5px] bg-border"></div>
      <div className="flex flex-row md:flex-1 w-full md:w-auto h-full items-center justify-start gap-4">
        <Image
          src={"/images/home-user-benefits-precut-decals.png"}
          alt="Precut Decals"
          width={48}
          height={48}
          unoptimized
          quality={100}
          className="h-12 w-12 object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="text-sm uppercase text-black">Precut Decals</h2>
          <p className="text-sm text-grey">0.7mm ~</p>
        </div>
      </div>
      <div className="hidden md:block h-[2.5rem] w-[0.5px] bg-border"></div>
      <div className="flex flex-row md:flex-1 w-full md:w-auto h-full items-center justify-start gap-4">
        <Image
          src={"/images/home-user-benefits-payments.png"}
          alt="Payment Method"
          width={48}
          height={48}
          unoptimized
          quality={100}
          className="h-12 w-12 object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="text-sm uppercase text-black">Payment Method</h2>
          <p className="text-sm text-grey">Paypal</p>
        </div>
      </div>
    </div>
  );
};

export default UserBenefitsComponent;
