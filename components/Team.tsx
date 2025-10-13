import React from "react";
import Image, { StaticImageData } from "next/image";
import { Linkedin } from "lucide-react";
import team1 from "../public/assets/3.png";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: StaticImageData;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sok Vannara",
    position: "Chief Executive Officer",
    image: team1,
    linkedin: "/#",
  },
  {
    id: 2,
    name: "Chan Dara",
    position: "Chief Operating Officer",
    image: team1,
    linkedin: "#",
  },
  {
    id: 3,
    name: "Ly Sophea",
    position: "Chief Financial Officer",
    image: team1,
    linkedin: "#",
  },
  {
    id: 4,
    name: "Kim Serey",
    position: "Head of Marketing",
    image: team1,
    linkedin: "#",
  },
];

const Teams: React.FC = () => {
  return (
    <section className="relative  text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-cover bg-center opacity-5"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Meet Our Leadership Team
        </h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed">
          Our team of visionary leaders brings together decades of experience,
          innovation, and passion — driving our company to new heights.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0  to-transparent opacity-90"></div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-blue-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-white text-sm">{member.position}</p>
                <div className="mt-4 w-12 h-[2px] bg-blue-600 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400/10 via-white/5 to-blue-400/10 blur-2xl transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
