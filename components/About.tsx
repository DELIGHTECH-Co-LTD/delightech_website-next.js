import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center "
      style={{
        backgroundImage: "url('/assets/Angkor-Wat.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">
          ABOUT US
        </h2>

        <h1 className="text-white text-2xl md:text-4xl font-bold leading-relaxed">
          “AS WE LOOK TO THE YEARS AHEAD, WE MUST REMAIN COMMITTED TO
          EXCELLENCE, KEEP ABREAST OF CHANGES AND INNOVATIONS, ADOPT BETTER
          MANAGEMENT PRACTICES AND SUCCESSFULLY OVERCOME ALL CHALLENGES BEFORE
          US.”
        </h1>

        <a
          href="/about"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-3xl transition"
        >
          FIND OUT MORE ABOUT US
        </a>
      </div>
    </section>
  );
};

export default About;
