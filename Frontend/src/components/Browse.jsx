import React, { useEffect } from 'react'
import Navbar from './ui/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllJobs from '../hooks/useGetAllJobs';
import { setSearchedQuery } from '../redux/jobSlice';

const Browse = () => {
    useGetAllJobs();
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, []);

    const filteredJobs = searchedQuery
        ? allJobs.filter(job =>
            job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchedQuery.toLowerCase())
        )
        : allJobs;

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>
                    Search Results ({filteredJobs.length})
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        filteredJobs.map((job) => (
                            <Job key={job._id} job={job} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse;
