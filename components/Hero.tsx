import Image from "next/image";
import mockup from "../public/assets/DLT.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex flex-col lg:flex-row items-center justify-center lg:px-20 overflow-hidden gap-20">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-12">
        <div className="w-1/2">
          <p className="text-sm text-gray-400 mb-4">
            At Delightech Co., Ltd., we specialize in creating technology-driven
            financial solutions that make life easier, faster, and more secure.
            Our flagship product, LUYLEUN, is redefining access to instant loans
            in Cambodia.
          </p>
          <h1 className="text-5xl md:text-7xl text-white h1 leading-tight mb-6">
            Everyone can Access{" "}
            <span style={{ color: "var(--accent)" }}>Finances</span>.
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <button className="btn btn-accent glass hover:bg-blue-700">
                Contact Us →
              </button>
            </Link>
          </div>
          <p className="mt-12 text-gray-500">Trusted of Customer 10000000+</p>
        </div>

        <div className="w-1/2">
          <Image
            src={mockup}
            alt="Mockup"
            width={800}
            height={800}
            className="max-w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
