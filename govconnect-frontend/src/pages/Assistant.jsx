// src/pages/Assistant.jsx
import { useEffect, useState } from "react";

export default function Assistant() {
  const [score, setScore] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const storedScore = localStorage.getItem("govscore");
    if (storedScore) {
      const intScore = parseInt(storedScore);
      setScore(intScore);
      const tips = getTips(intScore);
      setRecommendations(tips);
    }
  }, []);

  const getTips = (score) => {
    if (score >= 80) {
      return [
        "✅ You're doing great! Just ensure all documents stay updated.",
        "🔍 Consider applying for ISO certification for more credibility.",
        "🚀 Explore export schemes for compliant MSMEs.",
      ];
    } else if (score >= 50) {
      return [
        "📄 Apply for missing documents like GST or Udyam to boost credibility.",
        "🛠️ Use online portals like NSWS or Delhi eDistrict for faster licensing.",
        "🤝 Contact local industry bodies for scheme support (e.g., DSIIDC).",
      ];
    } else {
      return [
        "⚠️ High risk: Missing critical compliance like Trade License or Pollution NOC.",
        "📋 Visit https://services.india.gov.in to understand document requirements.",
        "📞 Contact Delhi’s Udyog Mitra or use MSME Helpline: 1800-123-456.",
      ];
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">👋 Hello, MSME Owner!</h1>
      <p className="mb-4 text-gray-700 text-lg">
        Could you share your compliance score? Based on it, here's what we suggest:
      </p>

      {score !== null ? (
        <div className="bg-white shadow p-4 rounded mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Your GovScore: <span className="text-green-600">{score}/100</span>
          </h2>
          <p className="mb-2 text-gray-600">Suggestions to improve your MSME’s compliance health:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
            {recommendations.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-red-600">⚠️ No score found. Please visit GovScore and submit your details first.</p>
      )}
    </div>
  );
}
