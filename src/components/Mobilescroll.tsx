"use client";
import React from "react";
import { ContainerScroll } from "./ui/mobile";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Introducing Your New <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Mobile Companion
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/courses/homemobile.png`}
          alt="hero"
          height={1000}
          width={1400}
          className="rounded-2xl object-cover h-full object-left-top"
        />
      </ContainerScroll>
    </div>
  );
}
