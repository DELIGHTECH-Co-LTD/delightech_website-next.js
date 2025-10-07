import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-light mb-8">About Us</h1>
      <div className="glass p-6">
        <p className="text-gray-400">
          We are a specialized UX agency focusing on fintech, banking, and next-generation financial brands.
          Our mission is to craft meaningful digital experiences that build trust and growth.
        </p>
      </div>
    </Layout>
  );
}
