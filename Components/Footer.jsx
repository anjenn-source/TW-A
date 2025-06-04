import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#3e1008] py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-sm text-[#d9bfa9]">
        All rights reserved. Copyright @DubaiNomad
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image src={assets.instagram_icon} alt="" width={40} />
        <Image src={assets.pinterest_icon} alt="" width={40} />
      </div>
    </div>
  )
}

export default Footer
