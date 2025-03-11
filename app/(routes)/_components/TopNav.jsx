import { UserButton } from '@clerk/nextjs'
import React from 'react'

const TopNav = () => {
  return (
    <div className='p-3 shadow-sm border-b flex justify-between sticky top-0'>
      <div className="">

      </div>
      <div className="">
        <UserButton />
      </div>
    </div>
  )
}

export default TopNav