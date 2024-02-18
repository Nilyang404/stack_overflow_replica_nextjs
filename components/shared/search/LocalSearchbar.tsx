"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
interface CustomeInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomeInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient 
      flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={20}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={20}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};
export default LocalSearchbar;
