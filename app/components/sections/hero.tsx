import Image from 'next/image'
import React from 'react'
import Button from '../button'
import { GoFlame } from 'react-icons/go'

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-16 pt-20 md:pt-40 relative gap-20">
      <div className='absolute left-1/2 w-1/2 inset-0 gradient-02' />
      <div className="flex flex-col gap-2 z-10 md:max-w-80 lg:max-w-96">
        <p className='text-slogan'>Effortless Video Creation</p>
        <h1 className="h1">Incredibly Simple & Fast</h1>
        <p className="p mb-4">
          Experience a user-friendly, fast, and efficient video editing tool that's also surprisingly powerful, 
          enabling you to create stunning quickly, without compromising on quality.
        </p>
        <Button text="try it now" icon={GoFlame} link="#download"/>
      </div>
      <div className="w-80 lg:w-96 max-h-[550px] z-10">
        <Image
          src="/hero.png"
          alt="Big logo image"
          width={350}
          height={1000}
        />
      </div>
    </div>
  )
}

export default Hero
