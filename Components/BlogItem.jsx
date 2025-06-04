import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-[#fdf9f6] border border-[#3e1008] transition-all hover:shadow-[-7px_7px_0px_#3e1008]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-[#3e1008]"
        />
      </Link>
      <p className="ml-5 mt-5 px-2 py-0.5 inline-block bg-deepred text-white text-sm rounded-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-[#3e1008]">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-[#4a4a4a]"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-[#5c3a21] hover:underline transition"
        >
          Read more
          <Image src={assets.arrow} className="ml-2" alt="" width={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
