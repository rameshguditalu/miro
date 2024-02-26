"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">Search</div>
      <div className="block lg:hidden flex-1"></div>
      <UserButton />
    </div>
  );
};
