"use client";

import { NavItems, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4">
      <div className="w-full h-full flex items-center justify-between m-auto py-4 px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="w-[500px] h-full hidden lg:flex flex-row items-center justify-between ml-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            {NavItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons on Desktop */}
        <div className="hidden lg:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              className="opacity-80 hover:opacity-100"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button aria-label="Open Navigation Menu" onClick={toggleMobileMenu}>
            <Image
              src={"icons/hamburger.svg"}
              alt={"hamburger menu"}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 h-screen w-full lg:hidden"
          initial={{ translateX: `${isMobileMenuOpen ? "100%" : "0%"}` }}
          animate={{ translateX: `${isMobileMenuOpen ? 0 : 100}` }}
          exit={{ translateX: `${isMobileMenuOpen ? "0%" : "100%"}` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
          <motion.div className="fixed right-0 top-0 z-[30] h-full w-3/4 bg-[#15053a] drop-shadow-lg md:w-1/2 ">
            <div className="w-full flex flex-1 justify-end">
              <button
                aria-label="Close Navigation menu"
                onClick={toggleMobileMenu}
                className="py-4 pr-14 pe-auto"
              >
                <Image
                  src={"/icons/close.svg"}
                  alt={"close menu"}
                  width={25}
                  height={25}
                />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 mt-36">
              {NavItems.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="cursor-pointer text-white text-xl font-normal mb-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 transition-colors"
                >
                  <p className="flex flex-col">
                    <span className="text-md text-center text-purple-500 mb-2">
                      {item.number}
                    </span>
                    {item.name}
                  </p>
                </a>
              ))}
            </div>

            <div className="flex flex-row justify-center items-center gap-5 mt-48">
              {Socials.map((social) => (
                <a
                  href={social.href}
                  key={social.name}
                  className="opacity-80 hover:opacity-100"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={25}
                    height={25}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
