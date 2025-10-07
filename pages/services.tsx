import Layout from "../components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-light mb-8">Our Services</h1>
      <p className="text-gray-400 mb-6">
        We specialize in fintech UX, digital product strategy, and UI systems that drive business growth.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-6">
          <h3 className="font-semibold mb-2 text-lg">Product Strategy</h3>
          <p className="text-gray-400 text-sm">
            Aligning your digital experience with market leadership.
          </p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold mb-2 text-lg">UX Design</h3>
          <p className="text-gray-400 text-sm">
            Creating human-centered designs for finance and banking.
          </p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold mb-2 text-lg">Design Systems</h3>
          <p className="text-gray-400 text-sm">
            Scalable components for consistent experiences.
          </p>
        </div>
      </div>
    </Layout>
  );
}
