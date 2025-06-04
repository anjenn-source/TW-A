import dbConnect from '@/lib/config/db'
import BlogModel from '@/lib/models/BlogModel'
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import fs from 'fs/promises'
import path from 'path'

// Connect to DB once per cold start
await dbConnect()

// API Endpoint to get all Entries or a single Entry by id
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get('id')

  if (blogId) {
    const blog = await BlogModel.findById(blogId)
    if (!blog) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 })
    }
    return NextResponse.json(blog.toObject())
  } else {
    const blogs = await BlogModel.find({})
    return NextResponse.json({ blogs })
  }
}

// API Endpoint for uploading Entries with image saving
export async function POST(request) {
  try {
    const formData = await request.formData()
    const timestamp = Date.now()

    // Required fields
    const title = formData.get('title')
    const description = formData.get('description')
    const category = formData.get('category')
    const author = formData.get('author')
    const authorImg = formData.get('authorImg')
    const image = formData.get('image')

    // Parse latitude and longitude as floats; default to null if not valid
    const latitude = parseFloat(formData.get('latitude'))
    const longitude = parseFloat(formData.get('longitude'))

    console.log('Received lat/lon:', latitude, longitude)

    if (
      !title ||
      !description ||
      !category ||
      !author ||
      !image ||
      !authorImg
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save image to public folder
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const fileName = `${timestamp}_${image.name}`
    const filePath = path.join(process.cwd(), 'public', fileName)
    await writeFile(filePath, buffer)

    const imgUrl = `/${fileName}`

    // Build blog data object including lat/lon
    const blogData = {
      title,
      description,
      category,
      author,
      authorImg,
      image: imgUrl,
      latitude: isNaN(latitude) ? null : latitude,
      longitude: isNaN(longitude) ? null : longitude,
    }

    await BlogModel.create(blogData)
    console.log('Entry Saved:', blogData)

    return NextResponse.json({ success: true, msg: 'Entry Added' })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: 'Failed to add entry' }, { status: 500 })
  }
}

// API Endpoint to delete an Entry by ID
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id')
    if (!id) {
      return NextResponse.json(
        { error: 'Entry ID is required' },
        { status: 400 }
      )
    }

    const blog = await BlogModel.findById(id)
    if (!blog) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 })
    }

    // Delete image file if it exists
    try {
      const imagePath = path.join(
        process.cwd(),
        'public',
        blog.image.replace(/^\//, '')
      )
      await fs.unlink(imagePath)
    } catch (err) {
      console.error('Failed to delete image:', err)
      // Not blocking if image delete fails
    }

    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({ msg: 'Entry Deleted' })
  } catch (error) {
    console.error('DELETE Error:', error)
    return NextResponse.json(
      { error: 'Failed to delete Entry' },
      { status: 500 }
    )
  }
}
