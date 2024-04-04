"use client";
import { IoMdHome } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";

export const navLinks = [
  { name: "home", path: "/", icon: <IoMdHome /> },
  {
    name: "cryptocurrencies",
    path: "/cryptocurrencies",
    icon: <SiBitcoinsv />,
  },
  { name: "exchanges", path: "/exchanges", icon: <BsCurrencyExchange /> },
  { name: "news", path: "/news", icon: <GiNewspaper /> },
];
