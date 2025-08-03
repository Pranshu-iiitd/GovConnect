import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] py-20 text-center px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Simplify <span className="text-yellow-300">Government Compliance</span> for Your Business
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          GovMSE provides AI-powered compliance management, real-time analytics, and automated reporting to help MSMEs navigate government regulations effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup" className="bg-white text-[#4169E1] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Start Your Free Trial
          </Link>
          <Link to="/assistant" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#43CD80] transition">
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Real-Time Compliance</h3>
            <p>Track your MSME’s compliance status with instant updates and alerts.</p>
          </div>
          <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Automated Reports</h3>
            <p>Generate data-driven PDFs for stakeholders and financial purposes.</p>
          </div>
          <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI Guidance</h3>
            <p>Get smart, actionable suggestions to improve your government score.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {new Date().getFullYear()} GovMSE. All rights reserved.</div>
        <div>
          <p>
            Contact us:{" "}
            <a href="mailto:support@govmse.in" className="underline">
              support@govmse.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
