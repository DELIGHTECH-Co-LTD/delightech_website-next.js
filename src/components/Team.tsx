import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function Team() {
  const t = useTranslations("Team");

  const teamMembers = [
    {
      id: 1,
      name: t("members.vila.name"),
      position: t("members.vila.position"),
      image: "/assets/teams/vila.png",
      linkedin: "#",
    },
    {
      id: 2,
      name: t("members.krisna.name"),
      position: t("members.krisna.position"),
      image: "/assets/teams/krisna.png",
      linkedin: "#",
    },
    {
      id: 3,
      name: t("members.reaksa.name"),
      position: t("members.reaksa.position"),
      image: "/assets/teams/reaksa.png",
      linkedin: "/#",
    },
    {
      id: 4,
      name: t("members.chenda.name"),
      position: t("members.chenda.position"),
      image: "/assets/teams/chenda.png",
      linkedin: "#",
    },
    {
      id: 5,
      name: t("members.pengsea.name"),
      position: t("members.pengsea.position"),
      image: "/assets/teams/pengsea.png",
      linkedin: "/#",
    },
    {
      id: 6,
      name: t("members.kimsrun.name"),
      position: t("members.kimsrun.position"),
      image: "/assets/teams/kimsrun.png",
      linkedin: "#",
    },
    {
      id: 7,
      name: t("members.leabheng.name"),
      position: t("members.leabheng.position"),
      image: "/assets/teams/leabheng.png",
      linkedin: "#",
    },
    {
      id: 8,
      name: t("members.kimsrorng.name"),
      position: t("members.kimsrorng.position"),
      image: "/assets/teams/kimsrorng.png",
      linkedin: "#",
    },
  ];
  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* LinkedIn Button */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-blue-600 dark:bg-blue-500 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/50"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
