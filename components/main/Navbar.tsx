import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/profile.jpg"
              alt="logo"
              width={56}
              height={56}
              className="rounded-full w-[40px] h-[40px] md:w-[56px] md:h-[56px] cursor-pointer"
            />

            <span className="font-bold ml-2 hidden md:block text-gray-300">
              Pratham Shrestha
            </span>
          </Link>

          <nav className="flex-1 flex justify-center px-4">
            <div className="w-full max-w-[900px] bg-[#0300145e] border border-[#7042f861] rounded-full px-3 md:px-6 py-2 flex items-center justify-evenly text-gray-200">
              <a href="#about" className="px-4 py-1 text-sm md:text-base font-medium hover:text-white transition">
                About
              </a>
              <a href="#skills" className="px-4 py-1 text-sm md:text-base font-medium hover:text-white transition">
                Skills
              </a>
              <a href="#projects" className="px-4 py-1 text-sm md:text-base font-medium hover:text-white transition">
                Projects
              </a>
              <a href="#education" className="px-4 py-1 text-sm md:text-base font-medium hover:text-white transition">
                Education
              </a>
              <a href="#contact" className="px-4 py-1 text-sm md:text-base font-medium hover:text-white transition">
                Contact
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4">
              {Socials.map((social, index) =>
                social.link ? (
                  <Link href={social.link} key={index} aria-label={social.name}>
                    <Image src={social.src} alt={social.name} width={28} height={28} />
                  </Link>
                ) : (
                  <Image src={social.src} alt={social.name} key={social.name} width={28} height={28} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
