import { Building2, Globe, TrendingUp, Users } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function OurCorporate() {
  const features = [
    {
      icon: Building2,
      title: "Diversified Business",
      description:
        "From manufacturing and construction to beverages and real estate, we operate across multiple sectors with excellence.",
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Driven by innovation and sustainability, we aim to create a global presence while remaining true to our local roots.",
      color: "text-green-500 dark:text-green-400",
    },
    {
      icon: Users,
      title: "People First",
      description:
        "Our employees and communities are at the heart of everything we do, fostering collaboration and shared success.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "We are committed to long-term growth through responsible business practices and innovation-driven performance.",
      color: "text-red-500 dark:text-red-400",
    },
  ];

  return (
    <section
      id="corporate"
      className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden"
    >
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
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Corporate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are a dynamic and diversified organization committed to
            excellence, innovation, and sustainability — shaping industries and
            empowering communities through responsible growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-card border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex items-center justify-center">
                    <IconComponent
                      className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      size={50}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 w-12 h-[2px] bg-blue-600 dark:bg-blue-400 mx-auto group-hover:w-20 transition-all duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Corporate Overview Section */}
        <Card className="overflow-hidden border-border">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-0">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden">
                <Image
                  src="/assets/Angkor_Wat.webp"
                  alt="Our Corporate"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <Badge variant="secondary" className="mb-4">
                  Corporate Overview
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase">
                  Building Tomorrow, Today
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our corporate philosophy is built on integrity, excellence,
                    and innovation. We aim to make a lasting impact through
                    sustainable development, customer satisfaction, and
                    community empowerment.
                  </p>
                  <p>
                    With a diversified portfolio and a forward-thinking vision,
                    we continue to lead the way in transforming industries and
                    improving lives across the region.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Excellence in Action
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
