import React from "react";
import CardInfo from "../Card/CardInfo";

const Info = () => {
  return (
    <section className="mt-[139px] w-full px-6 lg:px-[100px] xl:px-[144px] flex flex-col gap-[61px]">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[#00084F] font-bold text-2xl md:text-3xl lg:text-5xl">
          Coimbatore - Chennai
        </h2>
        <p className="text-[#44424E] font-normal text-sm md:text-medium">
          Coimbatore, Tamil Nadu, India → Chennai, Tamil Nadu, India:
        </p>
        <div className="w-[141px] h-[36px] px-[16px] py-[6px] bg-[#3633F71A] bg-opacity-10 rounded-full flex items-center justify-center">
          <p className="text-[14px] font-medium text-[#4744FF]">
            2 trips available
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-[30px] overflow-auto lg:overflow-visible">
        {[0, 1].map((item) => (
          <CardInfo key={item} />
        ))}
      </div>
    </section>
  );
};

export default Info;
