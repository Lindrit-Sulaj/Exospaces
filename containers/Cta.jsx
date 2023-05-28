import React from 'react'

export default function Cta() {
  return (
    <section className='px-6 md:px-8 bg-custom-green text-white py-10'>
      <div className="max-w-screen-web mx-auto">
        <h2 className='text-xl md:text-3xl mt-3 font-bold text-center '>Are you ready for collaboration?</h2>
        <p className='max-w-lg text-center mx-auto text-base md:text-lg opacity-75 mt-2 md:mt-4'>Unlock your ideal workspace today and take your business to new heights with Exospaces</p>
        <div className='flex justify-center mt-4'>
          <input className='h-[50px] px-3 md:px-5 bg-[rgba(255,255,255,0.1)] outline-none' type="text" placeholder='Enter your email' />
          <button className='px-2 md:px-4 bg-emerald-500 hover:bg-emerald-600'>Get in Touch</button>
        </div>
      </div>
    </section>
  )
}
