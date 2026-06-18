import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(event) =>{
      event.preventDefault()
      console.log({email,password})
  
    }
  
    return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="form-card">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
          Login
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Welcome back! Please login to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              className="input-field"
            />
          </div>

          <button className="primary-btn">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-slate-600">
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login