import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between gap-6">

          {/* LEFT — profile image + name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/profile.jpg"
              alt="logo"
              width={44}
              height={44}
              className="rounded-full w-[38px] h-[38px] md:w-[44px] md:h-[44px] object-cover cursor-pointer"
            />
            <span className="hidden md:block font-semibold text-sm text-gray-300">
              Pratham Shrestha
            </span>
          </Link>

          {/* CENTER — nav links pill */}
          <nav className="flex-1 flex justify-center">
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-full px-2 py-1.5 flex items-center gap-1 text-gray-300">
              {[
                { label: "About",     href: "#about"     },
                { label: "Skills",    href: "#skills"    },
                { label: "Projects",  href: "#projects"  },
                { label: "Education", href: "#education" },
                { label: "Contact",   href: "#contact"   },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* RIGHT — social icons */}
          <div className="flex items-center gap-3 shrink-0">
            {Socials.map((social, index) =>
              social.link ? (
                <Link
                  href={social.link}
                  key={index}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </Link>
              ) : (
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                  className="opacity-50"
                />
              )
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;