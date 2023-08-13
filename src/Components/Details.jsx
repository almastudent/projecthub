import React from 'react'
import Desktop from "../assests/Desktop.jpg"
import Books from "../assests/Books.jpg"


const Details = () => {
  return (
    <div className=' bg-[#f4f5f8]'>
      <div className='block text-center'>
        <h2 className=' font-bold text-3xl'>Best SSC, Bank and Railway Coaching</h2>
        <h3 className=' max-w-2xl  p-5 ml-[28%]'>Neon Classes is the Best SSC Bank and Railway Coaching in Jaipur. We provide
          you with all the notes in a concise manner to study properly which helps you to crack your competitive exams.
        </h3>
      </div>
      <div className='flex justify-around items-center pl-10'>
        <div className=' text-center'>
          <img className=' m-auto' src={Desktop} alt="Not Found" />
          <h3 className=' font-semibold text-lg p-2 '>Live Video Classes</h3>
          <p >Based on latest exam patterns we offer our students the facility of Online Video Classes.</p>
        </div>
        <div className='text-center'>
          <img className='m-auto' src={Books} alt="Not Found" />
          <h3 className='font-semibold text-lg p-2'>Experienced Faculties</h3>
          <p>Our way of teaching is innovative and leaves an everlasting impact on students.</p>
        </div>
        <div className='text-center'>
          <img className='m-auto' src={Books} alt="Not Found" />
          <h3 className='font-semibold text-lg p-2'>Doubt Solving Session</h3>
          <p>We provide lifetime assistance to our students and never leave them in doubt.</p>
        </div>
        <div className='text-center'>
          <img className='m-auto' src={Books} alt="Not Found" />
          <h3 className='font-semibold text-lg p-2'>Distinctive study material</h3>
          <p>Based on extensive research, we offer study material to every student.</p>
        </div>
      </div>

    </div>

  )
}

export default Details
