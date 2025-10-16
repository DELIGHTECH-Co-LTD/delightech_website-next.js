import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/DLT.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700/20 footer-gradient text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-90"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Company Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
            <span className="font-semibold text-lg">DELIGHTECH</span>
          </Link>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Building sustainable growth through innovation, leadership, and
            excellence across industries.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-lg mb-2 uppercase tracking-wide">
            Company
          </h3>
          <Link
            href="/services"
            className="text-gray-300 hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-blue-600 transition"
          >
            Portfolio
          </Link>
          <Link
            href="/careers"
            className="text-gray-300 hover:text-blue-600 transition"
          >
            Careers
          </Link>
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-lg mb-2 uppercase tracking-wide">
            Support
          </h3>
          <Link
            href="/store"
            className="text-gray-300 hover:text-blue-600 transition"
          >
            Find Us
          </Link>

          <Link
            href="/join"
            className="text-gray-300 hover:text-blue-600 transition"
          >
            Join Now
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg mb-2 uppercase tracking-wide">
            Stay Connected
          </h3>
          <p className="text-gray-300 text-sm">
            Subscribe to receive updates and insights from our latest projects.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg w-full bg-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Delightech . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
