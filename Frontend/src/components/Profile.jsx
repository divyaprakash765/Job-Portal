import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {  Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

// const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const isResumeAvailable = true;

const Profile = () => {
  const [open,setOpen] = useState(false); 
   const {user} = useSelector(store => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24 mb-5">
              <AvatarImage
                src="https://tse3.mm.bing.net/th?id=OIP.aPjpypN8yifagSi4rm0_ogHaHa&pid=Api&P=0&h=180"
                alt="Profile Picture"
              />
            </Avatar>

            <div>
              <h1 className="font-md text-xl">{user?.fullname}</h1>
              <p className="text-gray-700 text-sm">
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="" variant="outline">
            <Pen />
          </Button>
        </div>
        <div>
        <div className="flex items-center gap-2">
          <Mail />
          <span>{user?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Contact />
          <span>{user?.phoneNumber}</span>
        </div>
      </div>
      <div className="">
        <h1>Skills</h1>
        {
         user?.profile?.skills.length > 0 ? user?.profile?.skills.map((item,idx)=>(<Badge key={idx}>{item}</Badge>)) : <p className="text-sm font-md">No skills available</p>
        }
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className = "text-md font-bold">Resume</Label>
        {
          isResumeAvailable ? <a target ="_blank" href="https://example.com/resume.pdf" className="text-blue-500 hover:underline">Download Resume</a> : <p className="text-sm font-md">No resume available</p>
        }
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
       <h1 className="text-2xl mt-5 font-bold">Applied Jobs</h1>
       {/* Application table */}
       <AppliedJobTable />
      </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
