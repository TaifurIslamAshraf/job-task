"use client";

import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
  className: string;
};

const menuList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

const Navlist: FC<Props> = ({ className }) => {
  const selectedSegment = usePathname();

  return (
    <div className={cn(roboto.className, className)}>
      {menuList.map((list, index) => (
        <ul key={index} className="">
          <li
            className={cn(
              selectedSegment === list.path ? "underline text-[#FFB606]" : "",
              "hover:underline hover:text-[#FFB606] "
            )}
          >
            <Link href={list.path}>{list.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navlist;
