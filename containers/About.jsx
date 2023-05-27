import React from 'react'

export default function About() {
  return (
    <section className='max-w-screen-web mx-auto my-14 flex flex-wrap lg:flex-nowrap gap-8 px-6 md:px-8 xl:px-2 items-center justify-center lg:justify-start'>
      <div className='w-full lg:w-1/2'>
        <p className='uppercase text-neutral-500 font-medium text-center lg:text-left'>About Exospaces</p>
        <h2 className='text-2xl md:text-3xl mt-4 font-bold text-center lg:text-left'>More Productivity, <br /> Less Burn Out.</h2>
        <p className='mt-4 text-neutral-600 text-center lg:text-left w-full md:w-4/5 mx-auto text-[15px] md:text-base lg:w-full'>
          At Exospaces, we are dedicated to providing exceptional workspaces tailored to your business needs. With a focus on fostering collaboration and innovation, our thoughtfully designed offices offer a conducive environment for growth. Experience a seamless and inspiring workplace that fuels your success story.
        </p>
        <div className='flex justify-center lg:justify-start'>
          <div className="inline-grid grid-cols-2 gap-x-8 gap-y-10 mt-10">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9 text-custom-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <div>
                <p className='text-2xl lg:text-[28px] font-semibold text-neutral-600'>268</p>
                <p className='text-neutral-500'>Meeting Room</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9 text-custom-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <div>
                <p className='text-2xl lg:text-[28px] font-semibold text-neutral-600'>174</p>
                <p className='text-neutral-500'>Creative Studio</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9 text-custom-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <div>
                <p className='text-2xl lg:text-[28px] font-semibold text-neutral-600'>118</p>
                <p className='text-neutral-500'>Event Spaces</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9 text-custom-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
              <div>
                <p className='text-2xl lg:text-[28px] font-semibold text-neutral-600'>15</p>
                <p className='text-neutral-500'>Countries</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <img src="https://ik.imagekit.io/0s9lwb2yr/Exospaces/My_project-1__4__7YHtNonxn.png?updatedAt=1685210164297" className='w-4/5 md:w-3/5 lg:w-1/2' />
    </section>
  )
}