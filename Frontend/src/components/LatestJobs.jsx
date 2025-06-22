import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
// const randomJobs = [1,2,3,4,5,6,7,8];


const LatestJobs = () => {
  const {allJobs} = useSelector(store=> store.job);
  console.log('allJobs', allJobs);
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#AA08D2] mr-2'>Latest & Top</span>Job Openings</h1>
        {/* cards */}
        <div className='grid grid-cols-3 gap-4 my-5'>
        {
           allJobs.length > 0 ? allJobs.slice(0,6).map((item, idx) => <LatestJobCards key={idx} job={item} />) : <p>No jobs found</p>
        }
        </div>
    </div>
  )
}

export default LatestJobs