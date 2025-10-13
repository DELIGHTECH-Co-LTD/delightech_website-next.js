import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Moon, Sun } from "lucide-react";
import logo from "../public/assets/DLT.png";
import { useTheme } from "../hooks/UseTheme";
const Navbar: FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  return (
    <nav className="w-full glass">
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
                href="portfolio"
                className="hover:text-blue-700 transition-colors"
              >
                PORTFOLIO
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
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          )}
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
