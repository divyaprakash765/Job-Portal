import React from 'react'
import { Badge } from './ui/badge'

const JobDescription = () => {
  return (
    <div className='max-w-7xl mx-auto mt-5 p-5'>
        <h1 className='font-bold text-xl'>Title</h1>
        <div className="flex items-center gap-2 mt-4">
        <Badge className='text-blue-700 font-semibold' variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#72097D] font-bold" variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  )
}

export default JobDescription