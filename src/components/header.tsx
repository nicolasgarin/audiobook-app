"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";
function Header() {
  const router = useRouter();
  return (
    <div>
      <div className="container flex justify-between items-center">
        <img src="/logo.svg" className="my-10 h-12" alt="logo" />
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          <img className="w-6" src="/arrow-left.svg" alt="home" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
