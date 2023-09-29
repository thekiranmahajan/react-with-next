import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex bg-green-400 justify-between items-center w-full  h-14 text-white">
      <h2 className="mx-5 text-2xl font-semibold">PikaPic.</h2>

      <ul className=" flex w-[50%] items-center justify-center gap-14 mx-5 h-full">
        <li className="py-2 px-4 bg-gray-200 text-center rounded-md text-black font-bold">
          Home
        </li>
        <li className="text-lg hover:text-blue-600">
          <Link href="./Images">Images</Link>
        </li>
        <li className="text-lg hover:text-blue-600">
          <Link href="./About">About Us</Link>
        </li>
        <li className="text-lg hover:text-blue-600">
          <Link href="./Counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
