import Layout from "../components/Layout";

export default function ShowreelPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-light mb-8">Showreel</h1>
      <div className="glass p-6">
        <div className="aspect-[16/9] bg-black rounded-xl flex items-center justify-center text-gray-500">
          Embed your video or showcase images here.
        </div>
      </div>
    </Layout>
  );
}
