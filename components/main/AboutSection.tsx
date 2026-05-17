import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="flex items-start justify-center py-20 px-8 md:px-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text content */}
        <div className="text-left">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            ABOUT ME
          </h2>
          <div className="w-28 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded mt-3" />

          <div className="text-gray-300 mt-6">
            <p className="text-lg leading-relaxed">
              I&apos;m Pratham Shrestha, a software developer based in Kathmandu,
              Nepal. I craft performant, accessible, and beautiful web and mobile
              experiences with a focus on delightful interactions and clean
              architecture.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              My work sits at the intersection of design and engineering,
              building interfaces that are both visually compelling and
              technically sound.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href="mailto:shresthanikhil16@gmail.com"
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-4 text-sm"
            >
              shresthanikhil16@gmail.com
            </a>

            <a
              href="https://github.com/shresthanikhil16"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border border-[#7042f88b] text-white rounded-lg text-sm"
            >
              View GitHub
            </a>

            <Link href="/about" className="py-2 px-4 text-white underline text-sm">
              Read more
            </Link>
          </div>
        </div>

        {/* Right: Skills grid */}
        <div className="flex justify-center md:justify-end items-center md:mt-6">
          <div className="grid grid-cols-3 gap-6">
            <Image src="/react.png" alt="React" width={48} height={48} />
            <Image src="/ts.png" alt="TypeScript" width={48} height={48} />
            <Image src="/tailwind.png" alt="Tailwind" width={48} height={48} />
            <Image src="/node-js.png" alt="Node.js" width={48} height={48} />
            <Image src="/mongodb.png" alt="MongoDB" width={48} height={48} />
            <Image src="/framer.png" alt="Framer Motion" width={48} height={48} />
          </div>
        </div>

      </div>
    </section>
  );
}