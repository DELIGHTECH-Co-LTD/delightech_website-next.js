import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-light mb-8">Contact Us</h1>
      <form className="max-w-xl mx-auto glass p-8 rounded-xl space-y-6">
        <div>
          <label className="block text-sm mb-2 text-gray-400">Name</label>
          <input type="text" className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none" />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-400">Email</label>
          <input type="email" className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none" />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-400">Message</label>
          <textarea rows={4} className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none"></textarea>
        </div>
        <button className="btn btn-accent glass">Send Message</button>
      </form>
    </Layout>
  );
}
