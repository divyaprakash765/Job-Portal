import React from "react";
import Navbar from "../ui/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CompanyCreate = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10">
        <div className="my-10">
          <h1 className="text-2xl font-bold mb-5">Your Company Name</h1>
          <p className="text-gray-500 ">
            What would you like to give your company?
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="Enter your company name"
        />
        <div className="flex items-center gap-2 mt-4">
          <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
