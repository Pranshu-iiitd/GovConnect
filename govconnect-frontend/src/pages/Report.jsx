// components/Report.jsx
export default function Report() {
  const downloadReport = () => {
    // Placeholder for actual backend call
    alert("Your PDF report is being generated!")
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">One-Click Compliance Report</h2>
      <button onClick={downloadReport} className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
        Download PDF Report
      </button>
    </div>
  )
}
