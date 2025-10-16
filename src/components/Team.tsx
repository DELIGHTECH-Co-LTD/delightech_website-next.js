import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    id: 1,
    name: "Lay Vila",
    position: "CEO & Founder",
    image: "/assets/teams/vila.png",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Ke Chankrisna",
    position: "CTO",
    image: "/assets/teams/krisna.png",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Pheng Reaksa",
    position: "Business Advisor",
    image: "/assets/teams/reaksa.png",
    linkedin: "/#",
  },
  {
    id: 4,
    name: "Ly Chenda",
    position: "Credit Assessment Supervisor",
    image: "/assets/teams/chenda.png",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Ly Pengsea",
    position: "Account Supervisor",
    image: "/assets/teams/pengsea.png",
    linkedin: "/#",
  },
  {
    id: 6,
    name: "Chun Kimsrun",
    position: "Marketing Supervisor",
    image: "/assets/teams/kimsrun.png",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Meth Leabheng",
    position: "Human Resource",
    image: "/assets/teams/leabheng.png",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Taing Kimsrorng",
    position: "Collection Supervisor",
    image: "/assets/teams/kimsrorng.png",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Pattern - Same as FAQ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            Leadership Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Meet Our{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Leadership Team
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our team of visionary leaders brings together decades of experience,
            innovation, and passion — driving our company to new heights.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* LinkedIn Button */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-blue-600 dark:bg-blue-500 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 uppercase text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.position}
                </p>
                <div className="mt-4 w-12 h-[2px] bg-blue-600 dark:bg-blue-400 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}