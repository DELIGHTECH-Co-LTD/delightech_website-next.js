import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CalculatorLoading() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-50 dark:bg-indigo-950/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Skeleton */}
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <Skeleton className="h-6 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 lg:h-14 w-64 sm:w-96 mx-auto" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input Form Skeleton */}
          <Card className="border rounded-xl bg-card shadow-lg">
            <CardHeader className="space-y-3 pb-6">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Loan Principal Input */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              {/* Loan Term Input */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Interest Rate Input */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              {/* Disbursement Date Input */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Calculate Button */}
              <Skeleton className="h-12 w-full rounded-lg mt-6" />
            </CardContent>
          </Card>

          {/* Right Column - Results Skeleton */}
          <div className="space-y-6">
            {/* Summary Card */}
            <Card className="border rounded-xl bg-card shadow-lg">
              <CardHeader className="space-y-2 pb-4">
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chart Card */}
            <Card className="border rounded-xl bg-card shadow-lg">
              <CardHeader className="space-y-2 pb-4">
                <Skeleton className="h-6 w-36" />
              </CardHeader>
              <CardContent>
                {/* Chart Placeholder */}
                <div className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-3 w-3 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-3 w-3 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Schedule Card */}
            <Card className="border rounded-xl bg-card shadow-lg">
              <CardHeader className="space-y-2 pb-4">
                <Skeleton className="h-6 w-44" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3 border-b last:border-0"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
