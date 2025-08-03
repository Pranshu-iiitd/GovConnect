// components/Checklist.jsx
export default function Checklist() {
  const checklist = [
    { task: "Link GST to Udyam", done: false },
    { task: "Renew MSME Certificate", done: true },
    { task: "Upload tax documents", done: false }
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Compliance Checklist</h2>
      <ul className="bg-white p-4 shadow rounded">
        {checklist.map((item, idx) => (
          <li key={idx} className="mb-2">
            <input type="checkbox" checked={item.done} readOnly className="mr-2" />
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  )
}
