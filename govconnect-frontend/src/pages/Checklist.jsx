import { useState } from "react";
import { jsPDF } from "jspdf";

export default function Report() {
  const [form, setForm] = useState({
    has_gst: false,
    has_udyam: false,
    has_license: false,
    has_pan: false,
    has_pollution: false,
    has_trade: false,
  });

  const handleChange = (key) => {
    setForm({ ...form, [key]: !form[key] });
  };

  const getScore = () => {
    const filled = Object.values(form).filter(Boolean).length;
    return Math.round((filled / 6) * 100);
  };

  const getAdvice = (key) => {
    switch (key) {
      case "has_gst":
        return "Apply for GST registration at https://www.gst.gov.in to ensure proper tax filing.";
      case "has_udyam":
        return "Register at https://udyamregistration.gov.in to access MSME government schemes.";
      case "has_license":
        return "Apply for a Business License via your local MCD or DSIIDC to stay compliant.";
      case "has_pan":
        return "Obtain a PAN card linked to your business. Required for tax operations and banking.";
      case "has_pollution":
        return "Apply for Pollution NOC at https://dpcc.delhigovt.nic.in if operating in an industrial area.";
      case "has_trade":
        return "Get a Trade License via https://mcdonline.nic.in for legal business operation in Delhi.";
      default:
        return "";
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const score = getScore();
    const date = new Date().toLocaleString();

    doc.setFontSize(18);
    doc.text("GovMSE+ Compliance Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Generated: ${date}`, 20, 30);
    doc.text(`GovScore: ${score}/100`, 20, 40);

    doc.setFont("helvetica", "bold");
    doc.text("Document Status & Recommendations", 20, 55);
    doc.setFont("helvetica", "normal");

    const map = {
      has_gst: "GST Certificate",
      has_udyam: "Udyam Registration",
      has_license: "Business License",
      has_pan: "PAN Card",
      has_pollution: "Pollution NOC",
      has_trade: "Trade License",
    };

    let y = 65;
    for (let key in form) {
      const label = map[key];
      const available = form[key];
      doc.text(`${label}: ${available ? "✅ Present" : "❌ Missing"}`, 25, y);
      if (!available) {
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.text(`→ ${getAdvice(key)}`, 28, y + 7, { maxWidth: 160 });
        y += 15;
      } else {
        y += 10;
      }
      doc.setFontSize(12);
      doc.setTextColor(0);
    }

    doc.setFont("helvetica", "bold");
    doc.text("Thank you for using GovMSE+", 20, y + 10);

    doc.save("GovMSE_Compliance_Report.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Generate Your Compliance Report</h1>

      <p className="text-gray-800 mb-4 text-lg">
        Tick the documents your business currently holds. A GovScore out of 100 will be calculated and a downloadable PDF will be generated for stakeholders.
      </p>

      <div className="space-y-4 text-lg mb-6">
        <label className="block">
          <input type="checkbox" checked={form.has_gst} onChange={() => handleChange("has_gst")} />
          <span className="ml-2">GST Certificate</span>
        </label>
        <label className="block">
          <input type="checkbox" checked={form.has_udyam} onChange={() => handleChange("has_udyam")} />
          <span className="ml-2">Udyam Registration</span>
        </label>
        <label className="block">
          <input type="checkbox" checked={form.has_license} onChange={() => handleChange("has_license")} />
          <span className="ml-2">Business License (MCD/DSIIDC)</span>
        </label>
        <label className="block">
          <input type="checkbox" checked={form.has_pan} onChange={() => handleChange("has_pan")} />
          <span className="ml-2">PAN Card</span>
        </label>
        <label className="block">
          <input type="checkbox" checked={form.has_pollution} onChange={() => handleChange("has_pollution")} />
          <span className="ml-2">Pollution NOC</span>
        </label>
        <label className="block">
          <input type="checkbox" checked={form.has_trade} onChange={() => handleChange("has_trade")} />
          <span className="ml-2">Trade License</span>
        </label>
      </div>

      <button
        onClick={generatePDF}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
      >
        Generate PDF Report
      </button>
    </div>
  );
}
