import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData = [
  {
    filterType: "Location",
    arr : ["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
  },
  {
    filterType: "Industry",
    arr : ["Frontend","Backend","Fullstack"]
  },
  {
    filterType: "Salary",
    arr : ["0-40k","42k-1lakh","1-5lakh"]
  }
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data,idx)=>(
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.arr.map((item,idx)=>{

              return (
                <div className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value = {item}/>
                  <Label>{item}</Label>
                </div>
              )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard