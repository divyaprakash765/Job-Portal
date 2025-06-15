import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'

const Job = () => {
  return (
    <div>
      <p>2 days ago</p>
      <Button variant="outline" classname = "rounded-full"><Bookmark/></Button>

      <Button>
        <Avatar>
          <AvatarImage src = ""/>
        </Avatar>
      </Button>
    </div>
  )
}

export default Job