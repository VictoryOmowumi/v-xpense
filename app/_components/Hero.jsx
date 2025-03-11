import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='flex md:flex-row flex-col gap-5 items-center justify-center h-screen bg-gradient-to-r from-blue-700 to-sky-500 p-2'>
        <div className="flex flex-col items-center md:items-start justify-center">

        <h1 className='text-6xl md:text-8xl font-bold text-white text-center'>
            V-Xpense
        </h1>
        <p className='text-base md:text-2xl text-white text-center mt-4'>
        Track, Plan, and Save - Master your finances!
        </p>
        <p className='text-sm md:text-xl text-white text-center mt-0 md:mt-2'>
            Keep track of your expenses and manage your budget effectively.
        </p>
        <div className='flex space-x-4 mt-8'>
            <Link href='/sign-in'>
                <Button 
                size='lg'
                className=' bg-white rounded-sm text-blue-500 hover:bg-gray-200 text-lg'>
                    Get Started
                </Button>
            </Link>
           
        </div>
        </div>
        <div className='flex items-center space-x-8 mt-8'>
           <Image src='https://img.freepik.com/free-vector/blue-smart-phone-management-smartphone-app-template_23-2148627916.jpg?w=996&t=st=1716395418~exp=1716396018~hmac=3abacde2ff8c814279fa172cbd4aa00cacaa6aac6409a1bcf2d89b55314664eb' width={700} height={500} className='rounded-md' alt='hero' />
        </div>
    </div>
  )
}

export default Hero