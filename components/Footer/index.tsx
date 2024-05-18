import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubscribeInput from "../Input/SubscribeInput";

const links = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    id: 3,
    label: "About",
    link: "/about",
  },
  {
    id: 4,
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] lg:px-[100px] px-6 xl:px-[144px] py-[80px] flex flex-col gap-[67px]">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[140px] xl:gap-x-[190px]">
        <div className="flex flex-col gap-[30px]">
          <Image src="/images/logo.png" alt="logo" width={177} height={28} />
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-lg text-[#0A142F]">+1 (7635) 547-12-97</h5>
            <h6 className="text-[#0A142F] text-lg">support@flightf.com</h6>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h4 className="text-xl font-bold text-[#0A142F]">Quick Links</h4>
          <ul className="flex flex-col md:flex-row gap-x-[140px] gap-y-[39px] flex-wrap md:items-center">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.link} className="text-[#44424E] text-[16px]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h4 className="text-xl font-bold text-[#0A142F]">Subscribe</h4>
          <SubscribeInput />
        </div>
      </div>
      <div className="flex flex-col gap-[48px]">
        <div className="h-[1px] bg-[#0A142F] w-[95%] mx-auto" />
        <div className="flex flex-wrap gap-y-6 justify-center items-center md:justify-between">
          <div className="flex items-center gap-[15px]">
            <div className="w-[35px] h-[35px] border-[#4744FF] border-[1.5px] rounded-full border-opacity-10"></div>
            <div className="w-[35px] h-[35px] border-[#4744FF] border-[1.5px] rounded-full border-opacity-10"></div>
            <div className="w-[35px] h-[35px] border-[#4744FF] border-[1.5px] rounded-full border-opacity-10"></div>
          </div>
          <p className="font-normal text-[16px] text-[#0A142F]">
            © 2024 Flight Ferry All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
