import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className= 'w-full max-w-xl mx-auto my-20'>
          <CarouselContent>
            {
              category.map((c,idx)=>(
              <CarouselItem className = 'md:basis-1/2 lg-basis-1/3'>
              <Button className = "rounded-full hover:bg-zinc-300" variant = "outline">{c}</Button>
            </CarouselItem>
              ))
            }
            
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CategoryCarousel