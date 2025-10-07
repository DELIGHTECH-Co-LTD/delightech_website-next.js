import Layout from "../components/Layout";

const team = [
  { name: "Alyssa", role: "Lead Designer" },
  { name: "Jon", role: "Product Strategist" },
  { name: "Maya", role: "Frontend Engineer" },
];

export default function TeamPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-light mb-8">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.name} className="glass p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#2b2b2b] to-[#111] flex items-center justify-center mb-4">
              <span className="text-lg">{m.name[0]}</span>
            </div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-gray-400 text-sm">{m.role}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
