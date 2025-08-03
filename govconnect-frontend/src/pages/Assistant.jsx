import { useState } from "react";

export default function Assistant() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState("");
  const [responseList, setResponseList] = useState([]);

  const handleScoreSubmit = () => {
    const scoreInt = parseInt(score);
    if (isNaN(scoreInt) || scoreInt < 0 || scoreInt > 100) {
      setResponseList(["🚫 Enter a valid score between 0 and 100."]);
      return;
    }

    let resp = [];
    if (scoreInt === 100) {
      resp = [
        "🎉 Outstanding — You’ve attained full compliance!",
        "✅ Ensure all certificates are periodically reviewed for expiry.",
        "📌 Maintain digital copies of all documents for audit readiness.",
        "💼 Engage with state MSME clusters to explore export credits.",
        "📈 Consider applying for ISO or other certifications to expand your markets."
      ];
    } else if (scoreInt >= 80) {
      resp = [
        "Great score! Some documents might still be missing or nearing expiry.",
        "✔️ Double‑check validity of Trade License and Pollution NOC.",
        "🧾 Submit business ITRs and bank statements promptly to support financial inclusion.",
        "🔗 Link GST and Udyam via DSC for authentication efficiency.",
        "🏭 Connect with Delhi MSME centers in Naraina/Bawana for renewal support."
      ];
    } else if (scoreInt >= 60) {
      resp = [
        "You’re halfway there — a few critical documents are missing.",
        "📄 Without Udyam and GST, you won't qualify for most state or central MSME schemes.",
        "🖥 Use Delhi eDistrict or NSWS portal to file Trade License and Pollution NOC.",
        "📞 Contact UDYAMI Mitra centers for handholding.",
        "🎟️ Once registered, you become eligible for MSME loans, CGTMSE credit, and benefits."
      ];
    } else if (scoreInt >= 40) {
      resp = [
        "Important documents missing — compliance risk is HIGH.",
        "🚫 Lacking PAN, Udyam, and GST means you may lose access to most official schemes.",
        "📝 Visit your nearest DIC or use the national MSME portal to register.",
        "🧾 Submit at least two years of past ITRs to claim benefits.",
        "🤝 Explore free help from FICCI or SME Chamber of Commerce in Delhi."
      ];
    } else {
      resp = [
        "⚠️ Low score — you’re in critical non‑compliance territory.",
        "📌 Start by registering Udyam to get your 16‑digit URN.",
        "🧾 Apply for PAN and GST immediately — these are mandatory for any formal transaction.",
        "🧯 Ensure pollution and trade licenses within 1‑3 days via Delhi eDistrict.",
        "📞 Dial Delhi Small-Scale Enterprise Helpline (1800‑123‑456) for free support."
      ];
    }

    setResponseList(resp);
    setStep(2);
  };

  const handleOtherHelp = () => {
    setScore("");
    setResponseList([]);
    setStep(1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">GovMSE AI Assistant</h1>

      {step === 0 && (
        <div className="text-lg space-y-4">
          <p>👋 Hi there! I'm tailored to help Delhi-based MSMEs navigate compliance.</p>
          <button
            onClick={() => setStep(1)}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Start Guidance
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-lg">🧮 Share your current GovScore (0–100):</p>
          <input
            type="number"
            placeholder="e.g., 75"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <button
            onClick={handleScoreSubmit}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Get Recommendations
          </button>
        </div>
      )}

      {step === 2 && (
        <>
          <div className="bg-gray-50 p-4 rounded space-y-2 mt-4">
            {responseList.map((tip, i) => (
              <p key={i} className="text-gray-800">• {tip}</p>
            ))}
          </div>
          <button
            onClick={handleOtherHelp}
            className="mt-4 text-blue-600 hover:underline"
          >
            Need help with anything else?
          </button>
        </>
      )}
    </div>
  );
}
