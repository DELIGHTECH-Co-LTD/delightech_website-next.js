import React from "react";
import { Building2, Globe, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import angkor from "../public/assets/Angkor-Wat.webp";

const OurCorporate: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900 items-center justify-center py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold uppercase">
            Our Corporate
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We are a dynamic and diversified organization committed to
            excellence, innovation, and sustainability — shaping industries and
            empowering communities through responsible growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-800/10 dark:bg-blue-700/10 rounded-2xl p-8 shadow-md hover:bg-blue-700/20 dark:hover:bg-blue-800/30 transition duration-300">
            <Building2
              className="mx-auto text-yellow-400 dark:text-yellow-300 mb-4"
              size={50}
            />
            <h3 className="text-xl text-gray-800 dark:text-white font-semibold mb-2">
              Diversified Business
            </h3>
            <p className="text-gray-800 dark:text-white text-sm">
              From manufacturing and construction to beverages and real estate,
              we operate across multiple sectors with excellence.
            </p>
          </div>

          <div className="bg-blue-800/10 dark:bg-blue-700/10 rounded-2xl p-8 shadow-md hover:bg-blue-700/20 dark:hover:bg-blue-800/30 transition duration-300">
            <Globe
              className="mx-auto text-green-400 dark:text-green-300 mb-4"
              size={50}
            />
            <h3 className="text-xl  text-gray-800 dark:text-white font-semibold mb-2">
              Global Vision
            </h3>
            <p className=" text-gray-800 dark:text-white text-sm">
              Driven by innovation and sustainability, we aim to create a global
              presence while remaining true to our local roots.
            </p>
          </div>

          <div className="bg-blue-800/10 dark:bg-blue-700/10 rounded-2xl p-8 shadow-md hover:bg-blue-700/20 dark:hover:bg-blue-800/30 transition duration-300">
            <Users
              className="mx-auto text-blue-600 dark:text-blue-600 mb-4"
              size={50}
            />
            <h3 className="text-xl text-gray-800 dark:text-white font-semibold mb-2">
              People First
            </h3>
            <p className="text-gray-800 dark:text-white text-sm">
              Our employees and communities are at the heart of everything we
              do, fostering collaboration and shared success.
            </p>
          </div>

          <div className="bg-blue-800/10 dark:bg-blue-700/10 rounded-2xl p-8 shadow-md hover:bg-blue-700/20 dark:hover:bg-blue-800/30 transition duration-300">
            <TrendingUp
              className="mx-auto text-red-400 dark:text-red-400 mb-4"
              size={50}
            />
            <h3 className="text-xl text-gray-800 dark:text-white font-semibold mb-2">
              Sustainable Growth
            </h3>
            <p className="text-gray-800 dark:text-white text-sm">
              We are committed to long-term growth through responsible business
              practices and innovation-driven performance.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={angkor}
              alt="Our Corporate"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl text-blue-600 dark:text-blue-400 font-bold mb-4">
              CORPORATE OVERVIEW
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our corporate philosophy is built on integrity, excellence, and
              innovation. We aim to make a lasting impact through sustainable
              development, customer satisfaction, and community empowerment.
              <br />
              <br />
              With a diversified portfolio and a forward-thinking vision, we
              continue to lead the way in transforming industries and improving
              lives across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCorporate;
