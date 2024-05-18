"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import Profile from "../Profile";
import SignUp from "../SignUp";

const menus = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Post Your Trip",
    link: "/post-your-trip",
  },
];

const NavbarFlight = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState("");
  const pathname = usePathname();

  return (
    <>
      {isOpen && type === "profile" && (
        <Profile isOpen={isOpen} onClose={onClose} setType={setType} />
      )}
      {isOpen && type === "signup" && (
        <SignUp isOpen={isOpen} onClose={onClose} setType={setType} />
      )}
      <Navbar
        position="static"
        className="px-6 lg:px-[135px]"
        classNames={{
          wrapper:
            "w-full h-[90px] lg:px-[30px] bg-white shadow-lg rounded-3xl",
          menu: "mx-auto bg-white shadow-lg mt-6",
        }}
        height={"120px"}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <Image src="/images/logo.png" alt="Logo" width={177} height={28} />
        </NavbarBrand>

        <NavbarContent className="hidden lg:flex gap-[50px]" justify="center">
          {menus.map((menu) => (
            <div
              className="flex flex-col justify-start items-center"
              key={menu.id}
            >
              <NavbarItem>
                <Link
                  className={[
                    "hover:text-[#4744FF]",
                    pathname === menu.link
                      ? "text-[#4744FF]"
                      : "text-[#44424E]",
                  ].join(" ")}
                  href={menu.link}
                >
                  {menu.label}
                </Link>
              </NavbarItem>
              {pathname === menu.link ? (
                <div className="bg-[#4744FF] h-[4px] w-[4px] rounded-full" />
              ) : (
                <div className="bg-white h-[4px] w-[4px] rounded-full" />
              )}
            </div>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {menus.map((item, index) => (
            <NavbarMenuItem key={item.id}>
              <Link
                className="w-full"
                // color={
                //   index === 2
                //     ? "warning"
                //     : index === menus.length - 1
                //     ? "danger"
                //     : "foreground"
                // }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent as="div" justify="end" className="flex">
          <NavbarMenuToggle
            className="flex lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://s3-alpha-sig.figma.com/img/f5f4/2a0b/c99515d5479c3694783485675f112652?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUKXWTkPjjuvx7UdFI-GHPwap3o3oomcDmj3Q6ato0d95QFUakVIg0BOTADGOF5qChHydOaytI82kW8FMApWJeFF0KcoheKqGirocFPFW~zpvFVBncKmxb-ncHPJoXZpA~jmuheiouBSCpJAfaj8919VbLNP449b33gyrKwoXKoj1LBZex~PxF3HFjocAA9mEKRZqtcaPwB8auBeMhvd0o7RANM0QNdDk-lQFwrlEWJy~z68aHmjgUK3xXbcdzp1L0aXB1Jl4d-OTc6T7o93rRciX2PhF9OUFOMbvvXb-v0Fl81qv5aaGnnV3PExuD5qGu2GOOIsAo5bSATTOe6dYA__"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="settings"
                onClick={() => {
                  setType("profile");
                  onOpen();
                }}
              >
                My Profile
              </DropdownItem>
              <DropdownItem
                variant="flat"
                onClick={() => {
                  setType("signup");
                  onOpen();
                }}
              >
                Sign Up
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarFlight;
