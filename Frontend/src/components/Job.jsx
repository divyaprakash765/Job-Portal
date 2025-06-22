import {  Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobid = "wfennkjncw"
  const daysAgoFunction = (mongodbTime)=>{
    const currentTime = new Date();
    const jobTime = new Date(mongodbTime);
    const timeDifference = currentTime - jobTime;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
  }
  return (
    <div className='p-5 rounded-md shadow-xl border-gray-100'>
      <div className='flex items-center justify-between'>

      <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>

      <Button variant="outline" classname = "rounded-full"><Bookmark/></Button>
      </div>
        
        <div className='flex items-center gap-2 my-2'>
      <Button classname = "p-6" variant = "outline" size = "icon">
        <Avatar>
          <AvatarImage src = "https://tse3.mm.bing.net/th?id=OIP.aPjpypN8yifagSi4rm0_ogHaHa&pid=Api&P=0&h=180"/>
        </Avatar>
      </Button>
      <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-600'>India</p>
      </div>
      </div>
      <div>
        <h1 className='font-bold text-lg'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className='text-blue-700 font-semibold' variant="ghost">
          {job?.position} positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#72097D] font-bold" variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className='flex items-center gap-4 mt-3'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className = "bg-[#72097D]">Save for later</Button>
      </div>
    </div>
  )
}

export default Job