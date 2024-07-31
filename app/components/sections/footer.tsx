import Link from 'next/link'
import React from 'react'
import Subscribe from '../subscribe'
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface SocialProps{
  icon: IconType
  link: string
}

const Social =({icon: Icon, link}: SocialProps) => {
  return(
    <Link href={link} className='w-8 h-8 flex-center rounded-full bg-radial-blue-gradient ring-1 ring-blue-950 ring-offset-1 ring-offset-slate-950 cursor-pointer'>
            <Icon />   
    </Link>
  )
}

const Footer = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row md:mt-16 mx-auto'>
      <div className='w-full md:w-1/2 px-4 pt-16 pb-8 md:p-16 md:pb-8'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <Link href="#features" className='text-slate-400 text-xl font-semibold'>Features</Link>
          <Link href="#pricing" className='text-slate-400 text-xl font-semibold'>Pricing</Link>
          <Link href="#faq" className='text-slate-400 text-xl font-semibold'>FAQ</Link>
          <Link href="#download" className='text-slate-400 text-xl font-semibold'>Download</Link>
        </div>
        <div className='w-64 lg:w-80 flex flex-col-reverse lg:flex-row gap-4 justify-between p-xs mt-12 md:mt-16 mx-auto items-center'>
          <p>&copy; Fibipals Inc.</p>
          <div className='text-slate-400'>
            <Link href="#pp">Privacy policy |</Link>
            <Link href="#tos"> Terms of service</Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1 rounded-t-full bg-gradient-to-b from-slate-950 to-slate-600" />
      <div className='flex flex-col justify-between px-4 py-16 lg:p-16 md:pb-8 bg-gradient-to-b from-slate-950 to-blue-950'>
        <Subscribe />
        <div className='flex flex-row justify-between pt-8 px-8'>
          <Social icon={FaDiscord} link=""/>
          <Social icon={FaInstagram} link=""/>
          <Social icon={FaYoutube} link="https://www.youtube.com/"/>
          <Social icon={FaFacebook} link=""/>
        </div>
      </div>
    </div>
  )
}

export default Footer
