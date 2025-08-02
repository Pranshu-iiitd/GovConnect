export default function Dashboard() {
  const token = localStorage.getItem('token')
  const email = token ? JSON.parse(atob(token.split('.')[1])).sub : null

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Welcome, {email || "Guest"}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Your Complaints</h3>
            <p>2 Submitted</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Status</h3>
            <p>1 Pending, 1 Resolved</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">E-Gov Services</h3>
            <p>4 Linked Services</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Submit New Complaint</h2>
          <p className="text-gray-500">Complaint submission coming soon.</p>
        </div>
      </div>
    </div>
  )
}
