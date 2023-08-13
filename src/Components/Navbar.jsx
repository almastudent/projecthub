import React from 'react'
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <div className=' container flex bg-[#f5f5f5] justify-between px-8'>
                <div className="container_2">
                    <h6 className='inline p-2' > Have any Query?</h6>
                    <h6 className='inline p-2' >911332569</h6>
                    <h6 className='inline p-2' >mlit@gmail.com</h6>
                </div>
                <div className="connect">
                    <h6 className='p-1'> <span className='text-green-800'>Railway Test Series</span> Connect with us</h6>
                </div>

            </div>
            <div className='bg-[#ffff] flex'>
                <nav className="flex items-center">
                    <div className="flex space-x-4">
                        <div className=' pl-24  h-14'>
                            <h1 className=' font-extrabold text-3xl text-red-400'>MLIT</h1>
                        </div>
                        <h6 className='text-blue-800 relative top-8 right-20 text-center text-xs h-fit'>CLASSES</h6>

                        <div className='flex relative left-4 text-sm items-center font-bold  '>
                            <h3 className='px-3 hover:text-blue-700'>Home</h3>
                            <select className=' hover:text-blue-700' name="About" id="about">
                                <option value="massage1">About</option>
                                <option value="massage2">About</option>
                                <option value="massage3">About</option>
                                <option value="massage4">About</option>
                            </select>
                            <select className=' hover:text-blue-700' name="Courses" id="Courses">
                                <option value="course1">Course</option>
                                <option value="course2">Course</option>
                                <option value="course3">Course</option>
                                <option value="course4">Course</option>
                            </select>
                            <h3 className='px-3 hover:text-blue-700'>Books</h3>
                            <h3 className='px-3 hover:text-blue-700'>Test Series</h3>
                            <h3 className='px-3 hover:text-blue-700'>Video Courses</h3>
                            <h3 className='px-3 hover:text-blue-700'>Study Material</h3>
                            <h3 className='px-3 hover:text-blue-700'>News and Blog</h3>
                            <h3 className='px-3 hover:text-blue-700'>Contact</h3>
                        </div>
                        <div className="flex relative h-fit items-center pt-3  pl-64">
                            <p className=' text-2xl pr-3 text-red-700'><  BsCart2 /></p>
                            <button type="submit" className='rounded px-8 text-red-600 hover:bg-[red] hover:text-white border border-red-600 '>Login/Register</button>
                        </div>
                    </div>
                </nav>
            </div>



        </>
    )
}

export default Navbar
