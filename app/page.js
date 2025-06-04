'use client'

import BlogList from '@/Components/BlogList'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer theme="dark" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-[#FDF9F6] py-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <BlogList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
