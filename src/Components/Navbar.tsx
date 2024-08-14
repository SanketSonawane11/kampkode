"use client";
import React from "react";
import { FloatingNav } from "../Components/ui/Floating-nav";
import { link } from "fs";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/",
    },
    {
      name: "Resources",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
