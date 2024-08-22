import React from "react";
import Hero from "./hero";
import flower from "../public/flower.jpg";

export default function Home() {
  return (
    <div>
      <Hero imgData={flower} imgAlt="kid" title="Kid" />
    </div>
  );
}
