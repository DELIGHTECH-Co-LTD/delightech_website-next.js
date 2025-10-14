import Layout from "../components/Layout";

export default function Career() {
  const jobs = [
    {
      title: "Senior UX Designer",
      desc: "Lead design strategy for next-generation fintech platforms. Work with top global financial brands.",
    },
    {
      title: "Frontend Developer (React)",
      desc: "Implement pixel-perfect user interfaces and animations using modern frameworks and best practices.",
    },
    {
      title: "Product Strategist",
      desc: "Define user and business goals for financial products that impact millions of customers worldwide.",
    },
  ];

  return (
    <Layout>
      <section className="flex flex-col bg-white dark:bg-gray-900 py-24 items-center text-center mt-24 px-6">
        <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold mb-4">
          Build Your Career With Us with Us
        </h1>
        <p className="text-gray-900 dark:text-white max-w-2xl mb-12">
          At delightech, we design experiences that redefine how people interact
          with financial technology. Join a team where innovation, empathy, and
          precision meet.
        </p>

        <button className="px-10 py-3 mb-16 border border-black dark:border-white rounded-full text-lg text-black dark:text-white hover:bg-blue-600/20 hover:border-blue-600 transition-all duration-300">
          View Open Positions →
        </button>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="backdrop-blur-lg text-gray-900 dark:text-white bg-white/5 border border-gray-800 hover:border-neon transition-all duration-300 rounded-2xl p-8 text-left"
            >
              <h2 className="text-2xl font-semibold mb-3">{job.title}</h2>
              <p className="text-gray-900 dark:text-white mb-6">{job.desc}</p>
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32 mb-20 text-center">
        <h3 className="text-3xl text-gray-900 dark:text-white font-semibold mb-4">
          Don’t see your dream role?
        </h3>
        <p className="text-gray-900 dark:text-white mb-6">
          We’re always looking for creative minds who think beyond the ordinary.
        </p>
        <button className="px-8 py-3 border border-neon rounded-full hover:bg-neon hover:text-blue-700 transition">
          Send Your Portfolio →
        </button>
      </section>
    </Layout>
  );
}
