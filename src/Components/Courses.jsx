import React from 'react'
import Slider from 'react-slick';
import Cgl from "../assests/Cgl.png"
import Chsl from "../assests/Chsl.png"
import Clerk from "../assests/Clerk.png"
import Cpo from "../assests/Cpo.png"
import Po from "../assests/Po.png"
import Railway from "../assests/Railway.png"


const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true
    };
    return (
        <>
            <div className="bg-[white]">

                <div>
                    <h3 className='font-semibold text-3xl text-center p-2'>Popular Courses</h3>
                    <p className='  text-center'>Neon Classes is the Best SSC Bank and Railway Coaching in Jaipur.</p>
                </div>
                <div className=''>
                    <Slider {...settings}>
                        <div className=''>
                            <a href="/">
                                <img src={Cgl} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>SSC CGL</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <a href="/">
                                <img src={Chsl} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>SSC CHSL</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <a href="/">
                                <img src={Cpo} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>SSC CPO</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=' '>
                            <a href="/">
                                <img src={Po} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>BANK PO</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 4 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=' '>
                            <a href="/">
                                <img src={Cgl} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>SSC CGL</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <a href="/">
                                <img src={Chsl} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>SSC CHSL</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=' '>
                            <a href="/">
                                <img src={Clerk} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>BANK CLERK</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 6 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>
                        <div className=' '>
                            <a href="/">
                                <img src={Po} alt="Not Found" />
                            </a>
                            <h3 className=' font-bold text-2xl p-2'>BANK PO</h3>
                            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam quae sit tempora sapiente cum hic sed doloremque alias repudiandae distinctio, nulla nostrum officia quidem.</p>
                            <div className=' grid grid-cols-4 gap-4 p-2'>
                                <div className=' col-span-1   border-r-4 border-red-200'>
                                    <h3 className='font-bold'> 4 Month</h3>
                                    <p>Course</p>
                                </div>
                                <div className='col-span-3'>
                                    <h3 className=' font-bold'>3 Hours to 4 Hours</h3>
                                    <p>Class Duration</p>
                                </div>

                            </div>
                        </div>

                    </Slider>
                </div>

            </div>


        </>
    )
}

export default Courses
