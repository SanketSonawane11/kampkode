import { Navbar } from "@/Components/Navbar";
import { OrbitingCirclesC } from "@/Components/orbiting-circles";
import { StickyScrollReveal } from "@/Components/StickyScroll";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <OrbitingCirclesC />
      <StickyScrollReveal />
    </div>
  );
}

export default page;
