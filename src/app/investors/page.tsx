import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InvestorPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/Angkorwat.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <div className="bg-black/40 dark:bg-black/60 p-4 md:p-6 rounded-lg max-w-3xl backdrop-blur-sm">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              INVESTOR RELATIONS
            </h1>
            <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
              Join us in building the future of financial technology in
              Southeast Asia. Discover investment opportunities with
              Delightech's innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="relative min-h-screen pt-32 pb-24 px-6 lg:px-20 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">
              Investment Opportunity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="border-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                  Why Invest in Delightech?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>
                      Leading fintech innovation in Cambodia and Southeast Asia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>
                      LUYLEUN app with growing user base and market penetration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>High-growth industry with strong demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>
                      Experienced leadership team with proven track record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>Strong partnerships and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>
                      Scalable technology platform with expansion potential
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Image
                src="/assets/luyleun2.png"
                alt="LUYLEUN App"
                width={400}
                height={400}
                className="max-w-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section className="py-24 px-6 lg:px-20 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
            Financial Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    500K+
                  </h3>
                  <p className="text-foreground font-semibold">Active Users</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Growing monthly user base
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    $50M+
                  </h3>
                  <p className="text-foreground font-semibold">
                    Transaction Volume
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Annual processed amount
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                    150%
                  </h3>
                  <p className="text-foreground font-semibold">
                    Year-over-Year Growth
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Revenue increase
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-24 px-6 lg:px-20 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
            Market Position & Growth Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                  Current Market Position
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Delightech has established itself as a leading fintech company
                  in Cambodia, with LUYLEUN becoming one of the most trusted
                  digital financial platforms in the country.
                </p>
                <p>
                  Our innovative approach to financial inclusion has positioned
                  us uniquely to capture the growing digital payment market in
                  Southeast Asia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                  Expansion Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Regional expansion into Vietnam and Thailand</li>
                  <li>
                    • New product lines including digital banking services
                  </li>
                  <li>
                    • Strategic partnerships with regional financial
                    institutions
                  </li>
                  <li>• Enhanced AI and blockchain technology integration</li>
                  <li>• SME financing and business solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-24 px-6 lg:px-20 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
            Investment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Initial Contact
              </h3>
              <p className="text-muted-foreground">
                Reach out to our investor relations team to express your
                interest
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 dark:bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Due Diligence
              </h3>
              <p className="text-muted-foreground">
                Review our business model, financials, and growth projections
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 dark:bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl text-red-600 dark:text-red-400 font-semibold mb-2">
                Term Sheet
              </h3>
              <p className="text-muted-foreground">
                Negotiate investment terms and conditions that work for both
                parties
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 dark:bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
                Closing
              </h3>
              <p className="text-muted-foreground">
                Complete legal documentation and finalize the investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="px-6 lg:px-20 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-10 text-3xl md:text-4xl font-bold text-center text-white uppercase">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                  Mr. Lay Vila
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  Founder & CEO
                </Badge>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Visionary leader with over 10 years of experience in fintech
                  and technology innovation. Under his leadership, Delightech
                  has grown from a startup to Cambodia's leading fintech
                  company.
                </p>
                <p>
                  His strategic vision and deep understanding of the Southeast
                  Asian market make him uniquely positioned to drive the
                  company's continued growth and expansion.
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Image
                src="/assets/bVila.png"
                alt="Mr. Lay Vila - Founder & CEO"
                width={800}
                height={500}
                className="max-w-full drop-shadow-2xl rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 px-6 lg:px-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground uppercase">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in learning more about investment opportunities with
            Delightech? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Investor Relations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-left">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  investors@delightech.com
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  +855 (0) 23 123 456
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Address:
                  </span>{" "}
                  Phnom Penh, Cambodia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Investment Range</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-left">
                <p>
                  <span className="font-semibold text-foreground">
                    Minimum Investment:
                  </span>{" "}
                  $100,000
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Target Funding:
                  </span>{" "}
                  $10M Series A
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Use of Funds:
                  </span>{" "}
                  Regional expansion & product development
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" className="text-lg">
              Request Investment Deck
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
