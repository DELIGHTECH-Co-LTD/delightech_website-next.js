"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Particles } from "./ui/shadcn-io/particles";

export default function Team() {
  const t = useTranslations("Team");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: t("members.vila.name"),
      position: t("members.vila.position"),
      image: "/assets/teams/vila.png",
      linkedin: "https://www.linkedin.com/in/layvila168/",
      bio: t("members.vila.bio"),
    },
    {
      id: 2,
      name: t("members.krisna.name"),
      position: t("members.krisna.position"),
      image: "/assets/teams/krisna.png",
      linkedin: "https://www.linkedin.com/in/kechankrisna/",
      bio: t("members.krisna.bio"),
    },
    {
      id: 3,
      name: t("members.reaksa.name"),
      position: t("members.reaksa.position"),
      image: "/assets/teams/reaksa.png",
      linkedin: "https://www.linkedin.com/in/kosal-vathanak-446230283/",
      bio: t("members.reaksa.bio"),
    },
    {
      id: 4,
      name: t("members.chenda.name"),
      position: t("members.chenda.position"),
      image: "/assets/teams/chenda.png",
      linkedin: "https://www.linkedin.com/in/ly-chenda/",
      bio: t("members.chenda.bio"),
    },
    {
      id: 5,
      name: t("members.pengsea.name"),
      position: t("members.pengsea.position"),
      image: "/assets/teams/pengsea.png",
      linkedin: "https://www.linkedin.com/in/ly-pengsea/",
      bio: t("members.pengsea.bio"),
    },
    {
      id: 6,
      name: t("members.kimsrun.name"),
      position: t("members.kimsrun.position"),
      image: "/assets/teams/kimsrun.png",
      linkedin: "https://www.linkedin.com/in/kimsrun-chum-3b86821b0/",
      bio: t("members.kimsrun.bio"),
    },
    {
      id: 7,
      name: t("members.leabheng.name"),
      position: t("members.leabheng.position"),
      image: "/assets/teams/leabheng.png",
      linkedin: "https://www.linkedin.com/in/meth-leapheng-927258366/",
      bio: t("members.leabheng.bio"),
    },
    {
      id: 8,
      name: t("members.kimsrorng.name"),
      position: t("members.kimsrorng.position"),
      image: "/assets/teams/kimsrorng.png",
      linkedin:
        "https://www.linkedin.com/in/%E1%9E%8F%E1%9E%B6%E1%9F%86%E1%9E%84-%E1%9E%82%E1%9E%B8%E1%9E%98%E1%9E%9F%E1%9F%92%E1%9E%9A%E1%9F%8A%E1%9E%84%E1%9F%8B-552266281/",
      bio: t("members.kimsrorng.bio"),
    },
  ];

  return (
    <section className="relative min-h-screen bg-background py-24 px-6 lg:px-20 overflow-hidden">
      {/* Reduced particles for better performance */}
      <Particles
        className="absolute inset-0"
        quantity={40}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header - No animations on mobile, animations on md+ */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
            data-usal-md="fade-u duration-400"
          >
            {t("badge")}
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase"
            data-usal-md="fade-u duration-400 delay-100"
          >
            {t("title")}{" "}
            <span className="text-blue-700 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-usal-md="fade-u duration-400 delay-150"
          >
            {t("description")}
          </p>
        </div>

        {/* Team Grid - No animations on mobile, animations on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredMember === member.id;

            return (
              <div
                key={member.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                data-usal-md={`fade-u duration-400 delay-${200 + index * 50}`}
              >
                {/* Image Container with will-change for GPU acceleration */}
                <div className="relative w-full aspect-3/4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 will-change-transform"
                    priority={index < 4}
                  />

                  {/* Bottom Gradient (Always Visible) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Name and Position (Always Visible) */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-opacity duration-200 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/80 uppercase tracking-wider font-medium">
                      {member.position}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/70 flex flex-col justify-between p-6 transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ pointerEvents: isHovered ? "auto" : "none" }}
                  >
                    {/* Bio Text */}
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-white text-sm leading-relaxed text-center">
                        {member.bio}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      {/* Name and Position */}
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-white/90 uppercase tracking-wider font-medium">
                          {member.position}
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-700 transition-colors duration-200 mx-2 z-20"
                            aria-label={`${member.name}'s LinkedIn`}
                            style={{ position: "relative" }}
                          >
                            <span className="inline-block transition-transform duration-300 hover:scale-125">
                              <Linkedin size={18} />
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
