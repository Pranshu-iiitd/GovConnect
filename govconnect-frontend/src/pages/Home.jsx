export default function Home() {
  return (
    <div className="text-gray-800">
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to GovConnect+
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-700">
          Bridging citizens and government with seamless digital services.
        </p>
        <div className="space-x-4">
          <a href="/signup" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Get Started
          </a>
          <a href="/login" className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400">
            Login
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">What You Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">E-Governance Access</h3>
              <p>Connect with government departments easily and digitally.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Submit Complaints</h3>
              <p>Log and track issues like sanitation, water, roads, etc.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Live Chat Assistance</h3>
              <p>Ask AI-based queries or talk to human support soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
