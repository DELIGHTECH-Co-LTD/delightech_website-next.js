import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h3 className="text-5xl text-blue-500 md:text-4xl mb-16">About</h3>
      <div className="glass p-6">
        <p className="text-dark-300 leading-relaxed mb-6  dark:text-gray-300">
          At{" "}
          <span className="text-blue-400  font-semibold">
            Delightech Co,.Ltd
          </span>
          , we are passionate about crafting digital experiences that blend
          creativity, technology, and innovation. Our mission is to help
          businesses grow by delivering high-quality design, development, and
          strategy services that leave a lasting impact.
        </p>
        <p className="text-gray-300 leading-relaxed text-gray-600 dark:text-gray-300">
          With a team of designers, developers, and strategists, we work
          together to create meaningful solutions that connect brands with their
          audiences in powerful ways. We believe in pushing boundaries,
          embracing challenges, and turning ideas into reality.
        </p>
      </div>
    </section>
  );
}
