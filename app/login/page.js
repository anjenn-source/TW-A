'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const res = await signIn('credentials', {
      redirect: true,
      email,
      password,
      callbackUrl: '/admin',
    })

    if (res?.error) {
      setError(res.error)
      toast.error(res.error)
    } else {
      toast.success('Logging in...')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-[#fdf9f6] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover bg-opacity-90 z-0"
      >
        <source src="/sigvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to soften video */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Login Form Box */}
      <div
        className="w-full max-w-md p-8 border border-solid z-10"
        style={{
          borderColor: '#3e1008',
          boxShadow: '-7px 7px 0px #3e1008',
          backgroundColor: '#fdf9f6',
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-medium text-deepred text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-3 outline-none"
            style={{
              borderColor: '#3e1008',
              backgroundColor: '#fdf9f6',
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-4 py-3 outline-none"
            style={{
              borderColor: '#3e1008',
              backgroundColor: '#fdf9f6',
            }}
          />

          <button
            type="submit"
            className="w-full py-3 font-medium border border-solid transition active:bg-gray-600 active:text-white"
            style={{
              borderColor: '#3e1008',
              boxShadow: '-4px 4px 0px #3e1008',
              backgroundColor: '#fdf9f6',
            }}
          >
            Login
          </button>

          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  )
}
