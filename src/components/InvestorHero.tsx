import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InvestorHero() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 px-6 lg:px-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-indigo-200/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-300/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-300/15 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-16 right-16 w-8 h-8 border border-blue-300/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-24 left-16 w-6 h-6 border border-indigo-300/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-300/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            Investment Opportunities
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t("hero.title")}
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Download Investor Deck
          </button>
          <button className="px-8 py-3 border border-blue-300/30 text-blue-100 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            Contact Our Team
          </button>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
