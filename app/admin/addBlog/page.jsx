'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

// Dynamically import ReactQuill and disable SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

// Dynamically import MapWithMarker and disable SSR
const MapWithMarker = dynamic(
  () => import('../../../Components/MapWithMarker'),
  { ssr: false }
)

const AddBlogPage = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Asia',
    author: 'Anne Dabuyan',
    authorImg: '/anne.jpeg',
    latitude: 25.2048,
    longitude: 55.2708,
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target

    if (name === 'author') {
      let imgPath = '/anne.jpeg'
      if (value === 'Anne Dabuyan') imgPath = '/anne.jpeg'
      else if (value === 'Bryan Palmes') imgPath = '/bryan.jpeg'
      else if (value === 'Bianca Dalangin') imgPath = '/bianca.jpeg'

      setData((prev) => ({
        ...prev,
        author: value,
        authorImg: imgPath,
      }))
    } else if (name === 'latitude' || name === 'longitude') {
      setData((prev) => ({
        ...prev,
        [name]: parseFloat(value),
      }))
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const onDescriptionChange = (value) => {
    setData((prev) => ({
      ...prev,
      description: value,
    }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('category', data.category)
      formData.append('author', data.author)
      formData.append('authorImg', data.authorImg)
      formData.append('latitude', data.latitude)
      formData.append('longitude', data.longitude)
      formData.append('image', image)

      const response = await axios.post('/api/blog', formData)
      if (response.data.success) {
        toast.success(response.data.msg)
        setImage(false)
        setData({
          title: '',
          description: '',
          category: 'Asia',
          author: 'Anne Dabuyan',
          authorImg: '/anne.jpeg',
          latitude: 25.2048,
          longitude: 55.2708,
        })
      } else {
        toast.error('Error submitting blog')
      }
    } catch (error) {
      toast.error('Submission failed')
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Hero Image</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="Upload area"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Entry title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Name the Adventure!"
          required
        />

        <p className="text-xl mt-4">Entry Description</p>
        <div className="w-full sm:w-[500px] mt-4 border">
          <ReactQuill
            theme="snow"
            value={data.description}
            onChange={onDescriptionChange}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ header: [1, 2, 3, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'list',
              'bullet',
              'link',
              'image',
            ]}
            placeholder="How was the Journey like? Which places did you visit?"
          />
        </div>

        <p className="text-xl mt-4">Latitude</p>
        <input
          type="number"
          step="any"
          name="latitude"
          value={data.latitude}
          onChange={onChangeHandler}
          className="w-60 mt-2 px-4 py-3 border"
        />

        <p className="text-xl mt-4">Longitude</p>
        <input
          type="number"
          step="any"
          name="longitude"
          value={data.longitude}
          onChange={onChangeHandler}
          className="w-60 mt-2 px-4 py-3 border"
        />

        {/* Corrected MapWithMarker usage */}
        <MapWithMarker
          value={{ lat: data.latitude, lng: data.longitude }}
          onChange={(pos) =>
            setData((prev) => ({
              ...prev,
              latitude: pos.lat,
              longitude: pos.lng,
            }))
          }
        />

        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
        </select>

        <p className="text-xl mt-4">Author</p>
        <select
          name="author"
          onChange={onChangeHandler}
          value={data.author}
          className="w-60 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Anne Dabuyan">Anne Dabuyan</option>
          <option value="Bryan Palmes">Bryan Palmes</option>
          <option value="Bianca Dalangin">Bianca Dalangin</option>
        </select>

        {data.authorImg && (
          <div className="mt-4">
            <p className="text-sm mb-2">Author Image Preview:</p>
            <Image
              src={data.authorImg}
              width={60}
              height={60}
              alt="Author"
              className="rounded-full"
            />
          </div>
        )}

        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-maroon text-white">
          ADD
        </button>
      </form>
    </>
  )
}

export default AddBlogPage
