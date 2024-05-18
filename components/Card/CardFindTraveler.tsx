"use client";
import { parseDate } from "@internationalized/date";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const weightOptions = [
  { label: "Up to 10kg", value: 1 },
  { label: "Up to 20kg", value: 2 },
  { label: "Up to 30kg", value: 3 },
];

const CardFindTraveler = () => {
  return (
    <div className="absolute px-6 md:px-[30px] py-6 md:py-[30.5px] flex flex-col xl:flex-row gap-[50px] items-center xl:h-[117px] w-[88%] left-1/2 transform -translate-x-1/2 -bottom-[150px] xl:-bottom-[50px] rounded-[20px] shadow-lg bg-white">
      <div className="flex flex-col xl:flex-row gap-[30px] items-center">
        <div className="flex gap-[30px] w-full">
          <Input
            classNames={{
              base: "md:min-w-[218px] min-h-[56px] bg-white",
              inputWrapper: "bg-white border border-[#BCBCBC]",
              label: "top-[3px] bg-white",
              input: "h-full",
            }}
            type="text"
            label="From"
            width={218}
            height={56}
            value={"Coimbatore"}
            endContent={
              <Image
                src="/icons/swap.svg"
                alt="swap icon"
                width={24}
                height={24}
                className="flex items-center justify-center h-full"
              />
            }
          />
          <Input
            type="text"
            label="To"
            classNames={{
              base: "md:min-w-[218px] min-h-[56px] bg-white",
              inputWrapper: "bg-white border border-[#BCBCBC]",
              label: "top-[3px] bg-white",
              input: "h-full",
            }}
            value={"Chennai"}
            endContent={
              <Image
                src="/icons/swap.svg"
                alt="swap icon"
                width={24}
                height={24}
                className="flex items-center justify-center h-full"
              />
            }
          />
        </div>
        <div className="hidden xl:block h-[26px] w-[1px] bg-[#6780AB]" />
        <div className="flex gap-[30px] w-full">
          <DatePicker
            label="Date"
            classNames={{
              base: "datepicker-custom",
            }}
            defaultValue={parseDate("2024-11-11")}
            className="md:min-w-[218px] min-h-[56px]"
          />
          <div className="hidden xl:block h-[26px] w-[1px] bg-[#6780AB]" />
          <Select
            label="Weight"
            classNames={{
              trigger: "bg-white border border-[#BCBCBC]",
              label: "top-[3px] bg-white",
              innerWrapper:
                "flex items-center h-full group-data-[has-label=true]:pt-0",
            }}
            defaultSelectedKeys={[1]}
            disableSelectorIconRotation
            className="md:min-w-[218px] lg:min-w-[198px] min-h-[56px]"
            selectorIcon={
              <Image
                src="/icons/caret.svg"
                alt="caret icon"
                width={20}
                height={20}
              />
            }
          >
            {weightOptions.map((weight) => (
              <SelectItem key={weight.value} value={weight.value}>
                {weight.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Button color="primary" className="w-[181px]">
        Find the traveler
      </Button>
    </div>
  );
};

export default CardFindTraveler;
