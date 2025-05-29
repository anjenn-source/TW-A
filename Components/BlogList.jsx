import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
  const [menu, setMenu] = useState('All')
  const [blogs, setBlogs] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog')
      setBlogs(response.data.blogs)
      console.log('Fetched from API:', response.data.blogs)
    } catch (error) {
      console.error('Error fetching blogs. Using fallback.', error)
      setBlogs(blog_data)
      console.log('Using fallback blog_data:', blog_data)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const activeClass = 'bg-deepred text-white py-1 px-4 rounded-full transition'
  const inactiveClass =
    'bg-gray-100 text-gray-800 py-1 px-4 rounded-full transition hover:bg-deepred hover:text-white'

  if (!mounted) return null

  return (
    <div className="bg-[#fdf9f6] pt-0 pb-12">
      <div className="flex justify-center gap-4 my-0 flex-wrap">
        {['All', 'Asia', 'Europe', 'South America', 'Australia'].map(
          (region) => (
            <button
              key={region}
              onClick={() => setMenu(region)}
              className={menu === region ? activeClass : inactiveClass}
            >
              {region}
            </button>
          )
        )}
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter(
            (item) =>
              menu === 'All' ||
              item.category.toLowerCase() === menu.toLowerCase()
          )
          .map((item, index) => (
            <BlogItem
              key={item._id || index}
              id={item._id || index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  )
}

export default BlogList
