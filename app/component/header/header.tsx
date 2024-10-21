import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex fixed w-full justify-end gap-5 text-lg p-3 bg-gray-900 text-white 	">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
