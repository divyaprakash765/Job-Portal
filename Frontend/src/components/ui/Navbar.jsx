import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Popover } from "./popover";
import { PopoverContent } from "./popover";
import { PopoverTrigger } from "./popover";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Hunt</span>
          </h1>
        </div>
        <div className="flex gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/jobs'>Jobs</Link></li>
            <li><Link to = '/browse'>Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex gap-5">
                <Link to = "/login"><Button variant="outline">Login</Button></Link>
              <Link to = "/signup"><Button>signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium"> popover content</h4>
                    <p className="text-small text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex-col text-gray-600 my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View Profile</Link> </Button>
                  </div>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link"> Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
