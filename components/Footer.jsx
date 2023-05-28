import React from 'react'

export default function Footer() {
  return (
    <footer className='px-6 md:px-8 mt-4 py-8'>
      <div className='max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-6'>
        <div>
          <h2 className='font-bold text-lg md:text-xl flex justify-center lg:justify-start gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-custom-orange">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>

            Exospaces
          </h2>
          <p className='text-neutral-600 mt-3 text-[15px] md:text-base text-center lg:text-left'>Your workspace partners for successful bussineses</p>
        </div>
        <div>
          <h5 className='font-semibold text-center lg:text-left text-[17px] md:text-lg'>Navigations</h5>
          <a href="#" className='block text-center lg:text-left my-2 mt-3 text-[15px] md:text-base text-neutral-600'>Home</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Locations</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Plans</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Events</a>
        </div>
        <div>
          <h5 className='font-semibold text-center lg:text-left text-[17px] md:text-lg'>Contact</h5>
          <a href="#" className='block text-center lg:text-left my-2 mt-3 text-[15px] md:text-base text-neutral-600'>Support</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Developers</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Customer Service</a>
          <a href="#" className='block text-center lg:text-left my-2 text-[15px] md:text-base text-neutral-600'>Get Started Guide</a>
        </div>
        <div>
          <h5 className='font-semibold text-center lg:text-left text-[17px] md:text-lg'>Subscribe to newsletter</h5>
          <div className='mt-3 flex justify-center lg:justify-start items-stretch'>
            <input className='h-[40px] outline-none px-3 border-solid border-[1px] border-neutral-200' type="text" placeholder='Your email' />
            <button className='px-3 bg-custom-green text-white'>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
