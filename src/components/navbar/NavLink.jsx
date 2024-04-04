"use client";
import { navLinks } from "@/lib/navlinks";
import Link from "next/link";

const NavLink = () => {
  return navLinks.map((item) => {
    return (
      <li
        key={item.name}
        className="capitalize mb-5 flex items-center gap-2 font-semibold p-2 rounded-full transition hover:bg-primary hover:scale-105"
      >
        <span className="text-xl">{item.icon}</span>
        <Link href={item.path} className="block w-full ">
          {item.name}
        </Link>
      </li>
    );
  });
};
export default NavLink;
