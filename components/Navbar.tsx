"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import logo from "../public/assets/DLT.png";

const Navbar: FC = () => {
  return (
    <nav className="w-full  glass bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide text-gray-200">
            <li>
              <Link
                href="/menu"
                className="hover:text-blue-700 transition-colors"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/rewards"
                className="hover:text-blue-700 transition-colors"
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                href="/gift-cards"
                className="hover:text-blue-700 transition-colors"
              >
                CAREERS
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/stores"
            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-blue-700"
          >
            <MapPin size={18} />
            <span className="font-semibold">Find a store</span>
          </Link>

          <Link
            href="/signin"
            className="border border-gray-800 rounded-full px-4 py-1 text-sm font-semibold hover:bg-blue-700 transition"
          >
            Sign in
          </Link>

          <Link
            href="/join"
            className="bg-white text-blue-700 rounded-full px-4 py-1 text-sm font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Join now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
