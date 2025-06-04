'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'

const Header = () => {
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', email)

    try {
      const response = await axios.post('/api/email', formData)
      if (response.data.success) {
        toast.success(response.data.msg)
        setEmail('')
      } else {
        toast.error('Something went wrong')
      }
    } catch (err) {
      toast.error('Error subscribing')
    }
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 xl:px-20 py-4 bg-[#fdf9f6] shadow-md sticky top-0 z-50 w-full">
        <Image
          src={assets.logo}
          width={180}
          height={40}
          alt="Logo"
          className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px]"
          priority
        />

        <Link href="/signup" passHref legacyBehavior>
          <a
            className="flex items-center gap-1 sm:gap-2 font-medium text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-6 border border-solid text-maroon"
            style={{
              borderColor: '#3e1008',
              boxShadow: '-5px 5px 0px #3e1008',
            }}
          >
            Write an Entry{' '}
            <Image src={assets.arrow} alt="Arrow" width={16} height={16} />
          </a>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex justify-center items-center text-center text-white px-4 sm:px-6 md:px-12 xl:px-20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="/bgvid-s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        {/* Content wrapper */}
        <div className="relative w-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#ecded2]">
            The Itinerary in My Head
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#ecded2] max-w-[90%] sm:max-w-xl">
            A living journal of places I dream of, might have touched, and hope
            to reach. Nomad is a map of memories—some made, some
            imagined—gathering stories from where I’ve been, where I am, and
            where I long to go.
          </p>

          <form
            onSubmit={onSubmitHandler}
            className="mt-8 sm:mt-10 flex w-[90%] max-w-[500px] border border-solid mx-auto"
            style={{
              borderColor: '#d9bfa9',
              boxShadow: '-5px 5px 0px #3e1008',
            }}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Join my Nomadic Circle"
              className="flex-grow px-3 sm:px-4 py-2.5 sm:py-3 bg-[#fdf9f6] text-maroon outline-none text-sm sm:text-base w-full"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#fdf9f6] text-maroon py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base hover:bg-deepred transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Header
