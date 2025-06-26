import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="Company Logo" />
              </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>24-06-2025</TableCell>
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className= "w-32">
              <div className="flex items-center gap-2 w-fit cursor-pointer">
                <Edit2 className="w-4"/>
                <span className="ml-2">Edit</span>
              </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
