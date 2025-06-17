import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div className=''>
        <Table>
            <TableCaption>A list of your applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[100px]'>Date</TableHead>
                    <TableHead className='w-[150px]'>Job Title</TableHead>
                    <TableHead className='w-[100px]'>Company</TableHead>
                    <TableHead className='w-[150px] text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3,4,5].map((item,idx)=>(
                        <TableRow key = {idx}>
                            <TableCell>2023-10-01</TableCell>
                            <TableCell>Software Engineer</TableCell>
                            <TableCell>ABC Corp</TableCell>
                            <TableCell className='text-right'><Badge>Applied</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable