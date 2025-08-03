import React, { useState } from "react";

export default function GovScore() {
  const [docs, setDocs] = useState({
    gst: false,
    udyam: false,
    license: false,
    pan: false,
    msme: false,
    trade: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  // Assign weights to each document (out of total 100)
  const weights = {
    gst: 25,
    udyam: 20,
    license: 15,
    pan: 10,
    msme: 20,
    trade: 10,
  };

  const handleChange = (key) => {
    setDocs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    let total = 0;
    for (const key in docs) {
      if (docs[key]) total += weights[key];
    }
    setScore(Math.round(total));
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">GovScore Checker</h1>

      <div className="space-y-2 mb-4">
        {Object.entries(docs).map(([key, value]) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleChange(key)}
              className="mr-2"
            />
            <span className="capitalize">{key.toUpperCase()} Certificate</span>
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {submitted && (
        <div className="bg-white shadow rounded p-4 mt-6">
          <h2 className="text-xl font-semibold text-green-700">Your GovScore:</h2>
          <p className="text-3xl font-bold text-green-600">{score} / 100</p>
        </div>
      )}
    </div>
  );
}
