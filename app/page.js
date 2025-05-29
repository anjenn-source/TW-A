'use client'

import BlogList from '@/Components/BlogList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer theme="dark" />

      {/* Main Content */}
      <main className="flex-grow">
        <BlogList />
      </main>
    </div>
  )
}
