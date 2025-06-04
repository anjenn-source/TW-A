'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      toast.success('Signed up successfully!')
      router.push('/login')
    } else {
      const data = await res.json()
      setError(data.message || 'Something went wrong')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/sigvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Form container */}
      <div
        className="relative w-full max-w-md p-8 border border-solid bg-[#fdf9f6] bg-opacity-90 z-20"
        style={{
          borderColor: '#3e1008',
          boxShadow: '-7px 7px 0px #3e1008',
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-medium text-deepred text-center mb-6">
          Join the Nomadic Circle
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
              boxShadow: '-7px 7px 0px #3e1008',
              backgroundColor: '#fdf9f6',
            }}
          />

          <input
            type="password"
            placeholder="Password (min. 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full border px-4 py-3 outline-none"
            style={{
              borderColor: '#3e1008',
              boxShadow: '-7px 7px 0px #3e1008',
              backgroundColor: '#fdf9f6',
            }}
          />

          <button
            type="submit"
            className="w-full py-3 font-medium border border-solid transition active:bg-gray-600 active:text-white"
            style={{
              borderColor: '#3e1008',
              boxShadow: '-4px 4px 0px #3e1008',
            }}
          >
            Sign Up
          </button>

          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link href="/login" className="text-deepred underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
