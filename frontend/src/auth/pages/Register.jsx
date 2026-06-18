import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Register = () => {
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
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="form-label">
              Username
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your username"
              name="email"
              className="input-field"
            />
          </div>
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
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-slate-600">
          Alrady have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register