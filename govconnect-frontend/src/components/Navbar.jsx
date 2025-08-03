import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Left: Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          GovMSE<span className="text-yellow-300">+</span>
        </div>

        {/* Center: Main Features */}
        <div className="flex-grow flex justify-center gap-6 text-md font-medium flex-wrap">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          {token && (
            <>
              <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
              <Link to="/govscore" className="hover:text-yellow-300 transition">GovScore</Link>
              <Link to="/assistant" className="hover:text-yellow-300 transition">AI Assistant</Link>
              <Link to="/checklist" className="hover:text-yellow-300 transition">Report</Link>
              <Link to="/report" className="hover:text-yellow-300 transition">Vault</Link>
            </>
          )}
        </div>

        {/* Right: Profile / Auth */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {token ? (
            <>
              <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
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
