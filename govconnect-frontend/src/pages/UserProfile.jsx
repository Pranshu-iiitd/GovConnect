export default function UserProfile() {
  const token = localStorage.getItem("token");
  const email = token ? JSON.parse(atob(token.split(".")[1])).sub : null;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Your Profile</h2>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Email</label>
        <input
          value={email}
          readOnly
          className="w-full p-2 border rounded mt-1 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="text-gray-500 text-sm">
        Token stored in browser. Logout clears authentication.
      </div>
    </div>
  );
}
