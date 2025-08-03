import { Lock } from "lucide-react";

export default function Report() {
  const downloadReport = () => {
    alert("Upgrade to Pro to unlock the Compliance Vault 🔐");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <Lock size={80} className="text-yellow-400 mb-6" />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Upgrade to <span className="text-yellow-500">Pro</span> to Unlock Your Compliance Vault 🔐
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Access your personalized PDF compliance report, trusted by government stakeholders and financial partners.
        Empower your MSME with verified documentation and take the next step toward funding, tenders, and schemes.
      </p>
      <button
        onClick={downloadReport}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 text-lg rounded hover:from-yellow-600 hover:to-yellow-700 transition"
      >
        Upgrade to Pro
      </button>
    </div>
  );
}
