import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex bg-slate-200 space-x-5 p-5 w-full">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};

export default NavBar;
