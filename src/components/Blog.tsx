"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Particles } from "./ui/shadcn-io/particles";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export function Blog({ posts = [] }: BlogProps) {
  const t = useTranslations("Blog");

  return (
    <section className="relative min-h-screen bg-background py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with USAL animations */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
            data-usal-md="fade-d duration-600"
          >
            {t("badge")}
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase"
            data-usal-md="fade-u duration-600 delay-100"
          >
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-600">
              {t("title_highlight")}
            </span>
          </h1>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-usal-md="fade-u duration-600 delay-200"
          >
            {t("description")}
          </p>
        </div>

        {/* Blog Grid with staggered animations */}
        {posts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden border rounded-lg bg-card hover:bg-accent/50 transition-all duration-300"
                data-usal-md={`zoomin-u blur duration-500 delay-${300 + index * 80}`}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-linear-to-br from-blue-500 to-blue-700 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/90 text-6xl font-bold opacity-20">
                      {post.category.charAt(0)}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 bg-white/90 text-gray-900 hover:bg-white text-xs capitalize"
                  >
                    {post.category}
                  </Badge>
                </div>

                <CardHeader className="space-y-3 px-6 pt-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                      {post.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full justify-between group/button transition-all"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <span>{t("read_article")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card
            className="text-center py-16 bg-card border rounded-lg"
            data-usal-md="fade-u duration-600 delay-300"
          >
            <CardContent className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t("no_posts")}
              </h3>
              <p className="text-muted-foreground">{t("check_back")}</p>
            </CardContent>
          </Card>
        )}

        {/* View All Button with animation */}
        {posts.length > 0 && (
          <div
            className="text-center mt-12"
            data-usal-md="fade-u duration-600 delay-500"
          >
            <Button asChild size="lg" className="text-base">
              <Link href="/blog" className="group/all inline-flex items-center">
                {t("view_all")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
