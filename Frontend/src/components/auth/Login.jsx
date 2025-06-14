import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import store from "../../redux/store";
import { Loader2 } from "lucide-react";

const USER_API_END_POINT = "http://localhost:3000/api/v1/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector(store=>store.auth);
  const [input, setInput] = useState({ email: "", password: "", role: "student" });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed.");
    } finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center ml-28 max-w-7xl">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-2 border-gray-400 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="divya@gmail.com"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder=""
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <input
                    id="r1"
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                    id="r2"
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
               loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait</Button> :<Button type="submit" className="w-full my-4">
            Login
          </Button>
               
          }
          

          <span>
            Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
