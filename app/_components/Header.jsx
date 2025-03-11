"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();

  const [open, setOpen] = useState(false);
  const menuItem = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="sticky top-0 w-full h-[72px] flex justify-between items-center px-2 md:px-5 shadow-sm shadow-slate-500 bg-white">
      <div className="flex items-center">
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
        <h1 className="text-2xl font-bold text-blue-500">V-Xpense</h1>
      </div>
      <div className="hidden md:flex items-center space-x-8 ">
        {menuItem.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-base hover:text-blue-500"
          >
            {item.name}
          </Link>
        ))}

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
          <Button
            size="lg"
            className=" bg-sky-600 text-white hover:bg-sky-700 text-lg"
          >
            Get Started
          </Button>
          </Link>
        )}
      </div>
      <div className="md:hidden">
        <Button variant="icon" color="blue" onClick={() => setOpen(!open)}>
          <AlignJustify size={24} />
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end items-center">
          <div className="bg-white w-64 h-full p-4 overflow-auto transition-transform duration-200 ease-in-out transform translate-x-0">
            <Button variant="icon" color="blue" onClick={() => setOpen(!open)}>
              <X size={24} />
            </Button>
            <ul className="space-y-4 mt-4">
              {menuItem.map((item, index) => (
                <li key={index} className="py-2 text-xl">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
             
             {
                isSignedIn ? (
                  <li>
                    <UserButton />
                  </li>
                ) : (
                  <li>
                    <Link href="/sign-in">
                      <Button
                        variant="solid"
                        className=" bg-sky-600 text-white hover:bg-sky-700 text-lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </li>
                )
             }
             
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
