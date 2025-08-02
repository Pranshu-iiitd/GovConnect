import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
    const res = await loginUser(email, password)
    if (res.token) {
      localStorage.setItem("token", res.token)
      navigate('/dashboard')
    } else alert("Login failed")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login to GovConnect+</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-4 rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-4 rounded" />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">Login</button>
        <p className="mt-4 text-center text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Register</Link></p>
      </div>
    </div>
  )
}
