import Image from "next/image";
import React from "react";

const SubscribeInput = () => {
  return (
    <div className="h-[50px] w-[248px] border-[1px] border-[#00007C33] border-opacity-20 rounded-[6px] flex items-center">
      <input
        type="text"
        className="border-0 h-full w-[198px] p-[15px] rounded-tl-[6px] rounded-bl-[6px] focus:border-0 focus:outline-none"
        placeholder="Get updates"
      />
      <button className="flex items-center justify-center bg-[#4744FF] w-[50px] h-[49px] rounded-tr-[6px] rounded-br-[6px]">
        <Image src="/icons/arrowGo.svg" alt="icons" width={13} height={15.28} />
      </button>
    </div>
  );
};

export default SubscribeInput;
