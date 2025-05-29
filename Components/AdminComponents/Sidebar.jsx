import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-deepred text-white">
      <div className="px-2 sm:pl-14 py-3 border-b border-brown bg-maroon">
        <Link href="/">
          <Image src={assets.logo_light} width={120} alt="Logo" />
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border-r border-brown bg-deepred">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addBlog"
            className="flex items-center border border-brown gap-3 font-medium px-3 py-2 bg-white text-maroon shadow-[-5px_5px_0px_#3e1008]"
          >
            <Image src={assets.add_icon} alt="Add" width={28} />
            <p className="hidden sm:inline-block">Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-brown gap-3 font-medium px-3 py-2 bg-white text-maroon shadow-[-5px_5px_0px_#3e1008]"
          >
            <Image src={assets.blog_icon} alt="List" width={28} />
            <p className="hidden sm:inline-block">Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-brown gap-3 font-medium px-3 py-2 bg-white text-maroon shadow-[-5px_5px_0px_#3e1008]"
          >
            <Image src={assets.email_icon} alt="Email" width={28} />
            <p className="hidden sm:inline-block">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
