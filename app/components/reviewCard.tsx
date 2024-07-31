import React from 'react'
import Icon from './icon'

interface ReviewCardProps{
    name: string
    photoUrl: string
    company: string
    review: string
}

const ReviewCard = ({name, photoUrl, company, review}: ReviewCardProps) => {
  return (
    <div className='w-56 flex flex-col gap-8'>
      <p className='p'>{review}</p>
      <div className='flex flex-row items-center gap-4'>
        <Icon imgSrc={photoUrl} size="sm"/>
        <div>
            <p className='mb-1 text-sm text-cyan-500 font-semibold'>{name}</p>
            <p className='p-xs'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
