import React, { ReactNode } from "react";
import { FaMap, FaWind } from "react-icons/fa";
import { RiListUnordered } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { link } from "fs";
import Link from "next/link";

export default function Aside() {
  type AsideLinks = {
    label: string;
    icon: ReactNode;
    href: string;
  };

  const links = [
    {
      label: "Weather",
      icon: <TiWeatherPartlySunny />,
      href: "/weather",
    },
    {
      label: "Cities",
      icon: <RiListUnordered />,
      href: "/cities",
    },
    {
      label: "Map",
      icon: <FaMap />,
      href: "/map",
    },
    {
      label: "Settings",
      icon: <IoSettingsSharp />,
      href: "/settings",
    },
  ] satisfies AsideLinks[];
  return (
    <aside className="flex items-center flex-col m-6 py-6 rounded-container bg-primary w-28">
      <FaWind className="w-8 h-8 bg-blue-400/30 fill-blue-100 p-2 box-content rounded-logo" />
      <nav className="mt-16 flex flex-col gap-8">
        {links.map(({href, icon, label}, id)=>{
            return (<Link href={href} key={id} className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:mx-auto text-center [&>svg]:mb-2">{icon}{label}</Link>)
        })}
      </nav>
    </aside>
  );
}
