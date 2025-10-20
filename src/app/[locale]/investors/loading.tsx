import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Circles Skeleton */}
      <section className="relative min-h-screen bg-background flex items-center justify-center px-6 lg:px-20">
        {/* Background Pattern Skeleton */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i === 1
                  ? "h-64 w-64 top-10 left-10"
                  : i === 2
                  ? "h-48 w-48 top-32 right-20"
                  : i === 3
                  ? "h-32 w-32 bottom-32 left-32"
                  : i === 4
                  ? "h-96 w-96 bottom-10 right-10"
                  : "h-24 w-24 top-1/2 left-1/2"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
          <div className="flex justify-center gap-4 mt-8">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
              <Skeleton className="h-12 w-40" />
            </div>
            <div className="relative">
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>

          {/* Key Metrics Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="text-center p-8 bg-muted/30 rounded-lg space-y-4"
              >
                <Skeleton className="h-16 w-16 mx-auto" />
                <Skeleton className="h-8 w-20 mx-auto" />
                <Skeleton className="h-5 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position Section Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-56 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>
              </div>

              <div className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
            </div>
          </div>

          {/* Competitive Advantages Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="text-center space-y-4 p-6 bg-background rounded-lg"
              >
                <Skeleton className="h-12 w-12 mx-auto" />
                <Skeleton className="h-6 w-32 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <div className="text-center space-y-4 p-6 bg-muted/30 rounded-lg">
                  <div className="relative mx-auto w-16 h-16">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <Skeleton className="absolute -top-2 -right-2 h-8 w-8 rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mx-auto" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 mx-auto" />
                  </div>
                </div>
                {i < 4 && (
                  <Skeleton className="hidden lg:block absolute top-8 -right-4 h-1 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
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
