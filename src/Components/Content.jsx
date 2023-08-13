import React from 'react'
import Shield from "../assests/shield.jpg"
// import {IoLogoGooglePlaystore} from "./react-icons/io"
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Content = () => {
    return (
        <>
            <div className="grid grid-cols-4 bg-[#f4f5f8]">
                <div className="  col-span-1  pl-2">
                    <img className='ml-14 mt-3 w-20' src={Shield} alt="Not Found" />
                    <h3 className=' relative left-36 bottom-16 w-fit text-sm font-semibold '>Trusted by
                    <span className='block font-bold text-2xl'> 113267+ Students</span>
                    </h3>
                </div>
                <div className=" flex items-center justify-center pb-6 font-semibold  col-span-1  pl-2  ">
                Join mlit classes to Secure Job
                </div>
                <div className=" flex items-center justify-center col-span-1 pl-2">
                    <button className='bg-[#10b759] p-2 px-32 rounded-md'>Get Started</button>
                </div>
                <div className="col-span-1  pl-2 flex items-center justify-center">
                <button className='bg-[#939db6] text-center pb-1 px-32 rounded-md'> <span className='relative right-8 top-5'><IoLogoGooglePlaystore/></span> Download App</button>
                </div>

            </div>
            <div className='flex justify-between items-center'> 
             <strong className='p-10 font-semibold text-2xl'>Free Videos</strong>
              {/* <h3 className='p-10 font-medium'>view all</h3> */}
              <a href="/" className='m-10 font-medium'>View All</a>
             </div>
        </>
    )
}

export default Content
