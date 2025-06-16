import React from 'react'
import Navbar from './ui/Navbar'
import Job from './Job';

const RandomJobs = [1,2,3,4,5,6,7,8,9];

const Browse = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-lg'>Search Results ({RandomJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                RandomJobs.map((items,idx)=>{
                    return(
                        <Job/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse