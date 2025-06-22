import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "./utils/constant";
import { setSingleJob } from "../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";

const JobDescription = () => {

   const param = useParams();
  const jobId = param.id;
  const {singleJob} = useSelector(store => store.job);
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const isApplied = singleJob?.applications?.some(application=>application.applicant === user?._id) || false;

  useEffect(()=>{
    const fetchSingleJob = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials: true});
            if(res.data.success) {
                dispatch(setSingleJob(res.data.job));
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchSingleJob();
  }, [jobId,dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto mt-5 p-5">
      <div className="flex items-center justify-between bg-white p-5">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-semibold" variant="ghost">
              {singleJob?.positions} positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#72097D] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          className={`mt-4 rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#72097D] hover:bg-[#5c0f6b]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="font-medium mt-2 py-4 text-xl border-b-2 border-b-gray-300">Job Description</h1>
      <div className="my-4">
       <h1 className="font-bold my-1">Role : <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
       <h1 className="font-bold my-1">Location : <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
       <h1 className="font-bold my-1">Description : <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
       <h1 className="font-bold my-1">Experience : <span className="pl-4 font-normal text-gray-800">{singleJob?.experience} years</span></h1>
       <h1 className="font-bold my-1">Salary : <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>
       <h1 className="font-bold my-1">Total Applicants : <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
       <h1 className="font-bold my-1">Date : <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
