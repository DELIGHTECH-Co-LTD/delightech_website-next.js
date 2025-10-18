import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen bg-background flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-6">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-16 w-full max-w-4xl mx-auto" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            <div className="flex justify-center gap-4 mt-8">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="text-center space-y-4 p-8 bg-muted/30 rounded-lg"
              >
                <Skeleton className="h-12 w-12 mx-auto" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>

          {/* Filter/Search Skeleton */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
            <Skeleton className="h-10 w-64" />
          </div>

          {/* Job Cards Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-8 space-y-6 border hover:shadow-lg transition-shadow"
              >
                {/* Job Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-7 w-3/4" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>

                {/* Job Description */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>

                {/* Salary Range */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>

                {/* Apply Button */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button Skeleton */}
          <div className="text-center mt-12">
            <Skeleton className="h-12 w-32 mx-auto" />
          </div>
        </div>
      </section>

      {/* Application Process Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-56 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4 relative">
                <div className="relative mx-auto w-16 h-16">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <Skeleton className="absolute -top-2 -right-2 h-8 w-8 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                </div>
                {i < 4 && (
                  <Skeleton className="hidden lg:block absolute top-8 -right-4 h-1 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="h-12 w-80 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>
    </div>
  );
}
