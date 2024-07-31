"use client"

import React, { useState } from 'react'
import Plan from '../plan'
import { FaPeopleGroup, FaPerson } from 'react-icons/fa6'
import { IoBusiness } from 'react-icons/io5'
import PricingSvg from '../assets/pricingSvg'
import { FaRegCircle, FaRegSquare } from 'react-icons/fa'
import { PiHexagonBold } from 'react-icons/pi'


const Pricing = () => {
  const [plan, setPlan] = useState("month");

  return (
    <div className='px-4 lg:px-16 pt-28 mt-8 relative' id='pricing'>
      <div className='absolute  inset-0 z-0'>
        <PricingSvg />
      </div>
      <h2 className='h2 text-center w-80 md:w-96 mx-auto relative z-10'>Flexible pricing<br/> for teams of all sizes</h2>
      <div className='grid grid-cols-2 p-1 border-2 border-blue-950 rounded-xl w-80 h-14 mx-auto mt-12 mb-24 relative z-10'>
        <div
          className={`flex-center uppercase font-semibold text-xs cursor-pointer ${
            plan === 'month' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'
          }`}
          onClick={() => setPlan('month')}
        >
          Monthly
        </div>
        <div
          className={`flex-center uppercase font-semibold text-xs cursor-pointer ${
            plan === 'annual' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'
          }`}
          onClick={() => setPlan('annual')}
        >
          Annual
        </div>
      </div>
      <div className='md:w-[740px] lg:w-full flex flex-col md:flex-row items-center gap-y-28 lg:gap-4 md:justify-between relative mx-auto'>
        <div className='absolute w-full top-6 bottom-6 hidden md:block border-2 bg-slate-950 border-blue-950 rounded-3xl' />
        <div className='z-10 flex flex-col gap-2 items-center md:p-6 lg:p-12 pr-0'>
          <Plan
            icon={FaPerson}
            price={plan === "month" ? 19 : 19 * 11}
            name="personal"
            slogan="Ideal for solo creators"
            option1='4K export'
            option2='1GB storage'
            option3='Basic tools'
            option4='Community support'
            buttonIcon={FaRegCircle}
            buttonLink={plan === "month" ? "https://viditor.lemonsqueezy.com/buy/4d00d1e5-7498-4aac-861c-e9b555d232a5" : "#"}
          />
        </div>
        <div className='flex flex-col gap-2 items-center border-2 border-blue-800 rounded-3xl px-12 lg:px-14 py-4 bg-blue-950 z-10'>
          <Plan
            icon={FaPeopleGroup}
            price={plan === "month" ? 39 : 39 * 11}
            name="startup"
            slogan="Perfect for small teams"
            option1='10GB storage'
            option2='Multi-track editing'
            option3='Motion graphics'
            option4='Team projects'
            buttonIcon={FaRegSquare}
            type="limited"
            buttonLink={plan === "month" ? "https://viditor.lemonsqueezy.com/buy/4d00d1e5-7498-4aac-861c-e9b555d232a5" : "#"}
          />
        </div>
        <div className='flex flex-col gap-2 items-center md:p-6 lg:p-12 pl-0 z-10'>
          <Plan
            icon={IoBusiness}
            price={plan === "month" ? 99 : 99 * 11}
            name="company"
            slogan="Best for businesses"
            option1='100GB storage'
            option2='Advanced analytics'
            option3='Custom branding'
            option4='24/7 support'
            buttonIcon={PiHexagonBold}
            buttonLink={plan === "month" ? "https://viditor.lemonsqueezy.com/buy/4d00d1e5-7498-4aac-861c-e9b555d232a5" : "#"}
          />
        </div>
      </div>
    </div>
  )
}

export default Pricing
