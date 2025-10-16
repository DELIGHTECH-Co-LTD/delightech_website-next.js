import Image from "next/image";
import Layout from "../components/Layout";

export default function InvestorPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/Angkorwat.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <div className="bg-black/40 p-4 md:p-6 rounded-lg max-w-3xl">
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
      <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center px-8 md:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 uppercase">
            Investment Opportunity
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">
                  Why Invest in Delightech?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>
                      Leading fintech innovation in Cambodia and Southeast Asia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>
                      LUYLEUN app with growing user base and market penetration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>High-growth industry with strong demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>
                      Experienced leadership team with proven track record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Strong partnerships and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>
                      Scalable technology platform with expansion potential
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/assets/luyleun (2).png"
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
      <section className="py-16 px-8 md:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 uppercase">
            Financial Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">500K+</h3>
                <p className="text-gray-600 font-semibold">Active Users</p>
                <p className="text-sm text-gray-500 mt-2">
                  Growing monthly user base
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">
                  $50M+
                </h3>
                <p className="text-gray-600 font-semibold">
                  Transaction Volume
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Annual processed amount
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-600 mb-2">150%</h3>
                <p className="text-gray-600 font-semibold">
                  Year-over-Year Growth
                </p>
                <p className="text-sm text-gray-500 mt-2">Revenue increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center px-8 md:px-24 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
            Market Position & Growth Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Current Market Position
                </h3>
                <p className="mb-4">
                  Delightech has established itself as a leading fintech company
                  in Cambodia, with LUYLEUN becoming one of the most trusted
                  digital financial platforms in the country.
                </p>
                <p>
                  Our innovative approach to financial inclusion has positioned
                  us uniquely to capture the growing digital payment market in
                  Southeast Asia.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Expansion Strategy
                </h3>
                <ul className="space-y-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-16 px-8 md:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 uppercase">
            Investment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl text-blue-700 font-semibold mb-2">
                Initial Contact
              </h3>
              <p className="text-gray-600">
                Reach out to our investor relations team to express your
                interest
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Due Diligence
              </h3>
              <p className="text-gray-600">
                Review our business model, financials, and growth projections
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl text-red-700 font-semibold mb-2">
                Term Sheet
              </h3>
              <p className="text-gray-600">
                Negotiate investment terms and conditions that work for both
                parties
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl text-yellow-700 font-semibold mb-2">
                Closing
              </h3>
              <p className="text-gray-600">
                Complete legal documentation and finalize the investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="relative min-h-screen hero-gradient flex flex-col items-center justify-center px-8 md:px-24 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/assets/b vila.png"
                alt="Mr. Lay Vila - Founder & CEO"
                width={800}
                height={500}
                className="max-w-full drop-shadow-2xl rounded-lg"
                priority
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-2 text-blue-300">
                  Mr. Lay Vila
                </h3>
                <p className="text-lg mb-4 text-blue-200">Founder & CEO</p>
                <p className="mb-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8 md:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 uppercase">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in learning more about investment opportunities with
            Delightech? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Investor Relations
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  investors@delightech.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +855 (0) 23 123
                  456
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Phnom Penh,
                  Cambodia
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Investment Range
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">Minimum Investment:</span>{" "}
                  $100,000
                </p>
                <p>
                  <span className="font-semibold">Target Funding:</span> $10M
                  Series A
                </p>
                <p>
                  <span className="font-semibold">Use of Funds:</span> Regional
                  expansion & product development
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
              Request Investment Deck
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
