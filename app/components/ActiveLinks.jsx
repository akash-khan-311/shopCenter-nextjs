"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ActiveLink({ path, children, handleCategoryClick }) {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link
      onClick={(e)=>handleCategoryClick(e,children,path)}
      className={
        active
          ? "border-b border-black  box-border flex mt-5 capitalize"
          : "flex box-border mt-5 capitalize border-b  hover:border-b hover:border-black"
      }
      href={path}
      prefetch={true}
    >
      {children}
    </Link>
  );
}
