import '../globals.css'
import { assets } from '@/Assets/assets'
import Sidebar from '@/Components/AdminComponents/Sidebar'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }) {
  return (
    <>
      <div className="flex bg-maroon min-h-screen text-white">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <header className="flex items-center justify-between w-full h-16 px-12 border-b border-brown bg-deepred text-white">
            <h3 className="font-medium text-lg">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="Profile Icon" />
          </header>
          <main className="p-6 text-brown bg-white min-h-[calc(100vh-64px)]">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
