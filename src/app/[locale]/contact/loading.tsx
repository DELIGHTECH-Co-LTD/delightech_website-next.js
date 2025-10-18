import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Contact Section Skeleton */}
      <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20">
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header Skeleton */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-6 w-24 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form Skeleton */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-5 w-80" />
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-12 w-full" />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-12 w-full" />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-12 w-full" />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-32 w-full" />
                </div>

                {/* Submit Button */}
                <Skeleton className="h-12 w-32" />
              </div>
            </div>

            {/* Contact Information Skeleton */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-56" />
                <Skeleton className="h-5 w-80" />
              </div>

              <div className="space-y-6">
                {/* Contact Items */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-6 bg-muted/50 rounded-lg"
                  >
                    <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-10 w-10 rounded-full" />
                  ))}
                </div>
              </div>

              {/* Map Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border rounded-lg p-6 bg-background">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-6" />
                </div>
              </div>
            ))}
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
