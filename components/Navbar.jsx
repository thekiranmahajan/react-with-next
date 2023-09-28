import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex bg-green-400 justify-between items-center w-full  h-14 text-white">
      <h2 className="mx-5 text-2xl font-semibold">Logo.</h2>

      <ul className=" flex w-96 items-center justify-center gap-14 mx-5 h-full">
        <li className="py-2 px-4 bg-gray-400 text-center rounded-sm">
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Images</Link>
        </li>
        <li>
          <Link href={"/"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
