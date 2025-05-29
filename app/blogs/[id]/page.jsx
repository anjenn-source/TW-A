'use client'

import { blog_data } from '@/Assets/assets' // static blog data as fallback only
import Footer from '@/Components/Footer'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Map with no SSR
const Map = dynamic(() => import('@/Components/MapWithMarker'), { ssr: false })

export default function Page({ params }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: { id: params.id },
        })

        if (response.data && !response.data.error) {
          setData(response.data)
        } else {
          const staticBlog = blog_data.find((item) => item._id === params.id)
          setData(staticBlog || null)
        }
      } catch (error) {
        const staticBlog = blog_data.find((item) => item._id === params.id)
        setData(staticBlog || null)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [params.id])

  if (loading) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl text-gray-700">Loading blog...</h2>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl text-gray-700">Blog not found.</h2>
        <Link href="/blogs" className="text-maroon underline mt-4 block">
          ← Back to blogs
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              width={180}
              height={100}
              alt="Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button
            className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-maroon text-maroon"
            style={{
              boxShadow: '-7px 7px 0px #3e1008',
            }}
          >
            Get started{' '}
            <Image src="/arrow.png" alt="arrow" width={24} height={24} />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto text-deepred">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="Author"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto text-maroon">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={800}
          height={480}
          alt="Blog"
        />

        <div
          className="blog-content text-gray-900 mt-10"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Leaflet Map - dynamically imported, no SSR */}
        <Map
          value={{
            lat: Number(data.latitude) || 25.2048,
            lng: Number(data.longitude) || 55.2708,
          }}
          zoom={13}
        />

        <div className="my-24">
          <p className="text-brown font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4">
            <Image src="/fred.png" width={50} height={50} alt="Facebook" />
            <Image src="/inred.png" width={50} height={50} alt="Instagram" />
            <Image src="/pinred.png" width={50} height={50} alt="Pinterest" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
