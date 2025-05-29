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
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-5 md:px-12 lg:px-28 py-4 bg-[#fdf9f6] shadow-md sticky top-0 z-50">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />

        <Link href="/signup" passHref legacyBehavior>
          <a
            className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-solid text-maroon"
            style={{
              borderColor: '#3e1008',
              boxShadow: '-7px 7px 0px #3e1008',
            }}
          >
            Write an Entry <Image src={assets.arrow} alt="Arrow" />
          </a>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex justify-center items-center text-center text-white px-5 md:px-12 lg:px-28 overflow-visible">
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
        <div className="relative max-w-4xl px-4 flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-[#ecded2]">
            The Itinerary in My Head
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#ecded2] max-w-xl">
            A living journal of places I dream of, might have touched, and hope
            to reach. Nomad is a map of memories—some made, some
            imagined—gathering stories from where I’ve been, where I am, and
            where I long to go.
          </p>

          <form
            onSubmit={onSubmitHandler}
            className="mt-10 flex max-w-md w-full border border-solid"
            style={{
              borderColor: '#d9bfa9',
              boxShadow: '-7px 7px 0px #3e1008',
            }}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Join my Nomadic Circle"
              className="flex-grow px-4 py-3 bg-[#fdf9f6] text-maroon outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#fdf9f6] text-maroon py-3 px-6 hover:bg-deepred transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Header
