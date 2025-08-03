import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wide">
          GovConnect<span className="text-yellow-300">+</span>
        </div>
        <div className="space-x-6 text-md flex items-center flex-wrap">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>

          {token && (
            <>
              <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
              <Link to="/submit" className="hover:text-yellow-300 transition">Submit</Link>
              <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
              <Link to="/govscore" className="hover:text-yellow-300 transition">GovScore</Link>
              <Link to="/assistant" className="hover:text-yellow-300 transition">AI Assistant</Link>
              <Link to="/checklist" className="hover:text-yellow-300 transition">Checklist</Link>
              <Link to="/report" className="hover:text-yellow-300 transition">PDF Report</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 ml-2"
              >
                Logout
              </button>
            </>
          )}

          {!token && (
            <>
              <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
              <Link to="/signup" className="hover:text-yellow-300 transition">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
