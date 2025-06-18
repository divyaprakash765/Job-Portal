import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto mt-5 p-5">
      <div className="flex items-center justify-between bg-white p-5">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-semibold" variant="ghost">
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
       <h1 className="font-bold my-1">Role : <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
       <h1 className="font-bold my-1">Location : <span className="pl-4 font-normal text-gray-800">Hyderabad</span></h1>
       <h1 className="font-bold my-1">Description : <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, recusandae.</span></h1>
       <h1 className="font-bold my-1">Experience : <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
       <h1 className="font-bold my-1">Salary : <span className="pl-4 font-normal text-gray-800">12LPA</span></h1>
       <h1 className="font-bold my-1">Total Applicants : <span className="pl-4 font-normal text-gray-800">4</span></h1>
       <h1 className="font-bold my-1">Date : <span className="pl-4 font-normal text-gray-800">17-02-2025</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
