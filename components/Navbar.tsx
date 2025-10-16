import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Moon, Sun } from "lucide-react";
import logo from "../public/assets/DLT (2).png";
import { useTheme } from "../hooks/UseTheme";
const Navbar: FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  return (
    <nav className="w-full  fixed nav-gradient top-0 left-0  z-50">
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

          <ul className="hidden md:flex space-x-4 items-center gap-6 text-sm font-semibold tracking-wide text-gray-200">
            <li>
              <Link
                href="about"
                className="hover:text-blue-700 transition-colors"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className="hover:text-blue-700 transition-colors"
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                href="investor"
                className="hover:text-blue-700 transition-colors"
              >
                INVESTORS
              </Link>
            </li>
            <li>
              <Link
                href="career"
                className="hover:text-blue-700 transition-colors"
              >
                CAREERS
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-3xl bg-white dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-blue-600" />
              )}
            </button>
          )}
          <Link
            href="/stores"
            className="flex items-center gap-2 text-sm text-white cursor-pointer hover:text-gray-300"
          >
            <MapPin size={18} />
            <span className="text-white hover:text-gray-300 font-semibold">
              Find Us
            </span>
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
