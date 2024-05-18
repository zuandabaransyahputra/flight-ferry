"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";

interface CardInfoProps {
  name: string;
  weight: string | number;
  flightNumber: string | number;
  bookingReference: string;
  imgUrl: string;
  tripFrom: string;
  tripTo: string;
  timeFrom: string;
  timeTo: string;
}

const CardInfo = ({
  name,
  weight,
  flightNumber,
  bookingReference,
  imgUrl,
  tripFrom,
  tripTo,
  timeFrom,
  timeTo,
}: CardInfoProps) => {
  return (
    <div className="p-[30px] min-w-[350px] flex flex-col gap-[30px] w-full bg-white shadow-lg rounded-[20px]">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[25px] xl:gap-[82.75px] justify-between">
        <div className="flex gap-[24px]">
          <Image
            src={imgUrl}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px]"
          />
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[#00084F] font-semibold text-lg md:text-xl">
              {name}
            </h4>
            <h6 className="font-semibold text-black text-sm md:text-[16px]">
              Weight availability:{" "}
              <span className="font-normal">{weight}kg</span>
            </h6>
          </div>
        </div>
        <div className="w-[1px] h-[82px] bg-[#6780AB] hidden lg:block" />
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[#00084F] font-semibold text-lg md:text-xl">
            Trip Details:
          </h4>
          <h6 className="font-semibold text-black text-sm md:text-[16px]">
            Flight Number: <span className="font-normal">{flightNumber}</span>
          </h6>
          <h6 className="font-semibold text-black text-sm md:text-[16px]">
            Booking Reference number:{" "}
            <span className="font-normal">{bookingReference}</span>
          </h6>
        </div>
        <div className="w-[1px] h-[82px] bg-[#6780AB] hidden lg:block" />
        <Button color="primary">View Contact</Button>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-[75px] xl:gap-[100px]">
          <div className="flex flex-col gap-1 lg:gap-[8px] lg:items-center">
            <h3 className="text-lg lg:text-2xl text-[#112211] font-semibold">
              {timeFrom} pm
            </h3>
            <p className="text-[#112211] font-medium text-sm lg:text-[16px] text-opacity-60">
              {tripFrom}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-[24px]">
            <div className="flex items-center">
              <div className="h-[4px] w-[4px] rounded-full bg-black" />
              <div className="h-[1px] w-[36px] bg-black" />
            </div>
            <Image
              src="/icons/plane.svg"
              alt="airplane"
              width={48}
              height={48}
            />
            <div className="flex items-center">
              <div className="h-[1px] w-[36px] bg-black" />
              <div className="h-[4px] w-[4px] rounded-full bg-black" />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-[8px] items-end lg:items-center">
            <h3 className="text-lg lg:text-2xl text-[#112211] font-semibold">
              {timeTo} am
            </h3>
            <p className="text-[#112211] font-medium text-sm lg:text-[16px] text-opacity-60">
              {tripTo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
