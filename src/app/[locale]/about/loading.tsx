import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen bg-background flex items-center justify-center px-6 lg:px-20">
        <div className="absolute inset-0">
          <Skeleton className="h-full w-full" />
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

      {/* Vision Statement Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Skeleton className="h-12 w-64 mx-auto" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* History Section Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ${i % 2 === 0 ? "lg:order-2" : ""}`}>
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-3/4" />
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
                <div className={`${i % 2 === 0 ? "lg:order-1" : ""}`}>
                  <Skeleton className="h-64 w-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message From Leadership Skeleton */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="text-center space-y-4 p-6 bg-background rounded-lg"
              >
                <Skeleton className="h-12 w-12 mx-auto" />
                <Skeleton className="h-6 w-32 mx-auto" />
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
    </div>
  );
}
