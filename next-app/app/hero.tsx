import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero = ({ imgData, imgAlt, title }: HeroProps) => {
  return (
    <div>
      <Image src={imgData} alt={imgAlt} style={{ width: "500px" }} />
      <div>{title}</div>
    </div>
  );
};

export default Hero;
