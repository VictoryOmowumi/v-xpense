"use client";
import React from "react";
import {
  LayoutGrid,
  PiggyBank,
  AlignJustify,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Budget",
      icon: PiggyBank,
      link: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      link: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Report",
      icon: ShieldCheck,
      link: "/dashboard/report",
    },
  ];
  const params = usePathname();

  return (
    <div className="relative w-full h-full flex flex-row md:flex-col gap-5">
      <div className="flex gap-2 items-center">
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            class="ccompli1"
            fill="#007AFF"
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            class="ccustom"
            fill="#312ECB"
          ></path>
        </svg>
        <h1 className="text-2xl  font-bold text-blue-500">V-Xpense</h1>
      </div>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <div
              className={`flex gap-3 mb-2 items-center text-gray-500  py-5 px-2 cursor-pointer rounded
                        hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out
                        ${params === menu.link ? "bg-blue-100 text-blue-500" : ""}
                        `}
            >
              <menu.icon size="24" />
              <span className="text-lg">{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="flex w-full gap-3 items-center text-gray-500  p-5 cursor-pointer rounded
                        hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out absolute bottom-0"
      >
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNav;
