import React from 'react'

export default function Hero() {
  return (
    <section className='pt-[70px]'>
      <div className='max-w-screen-web px-6 xl:px-0 mx-auto flex flex-wrap lg:flex-nowrap items-center gap-y-4 gap-x-8 pt-6 pb-8 md:pt-10 md:pb-14'>
        <h1 className='font-bold text-[27px] leading-10 md:text-4xl lg:text-[40px] lg:leading-[50px] lg:w-1/2'>Discover <span className='text-custom-green'>Inspiring</span> Workspaces for Success</h1>
        <p className='lg:w-1/2 text-neutral-600 text-[15px] md:text-base'>Uncover inspiring workspaces that ignite your potential. From dynamic environments to flexible solutions, find the perfect space to thrive and achieve your business goals. Step into a world of success and growth.</p>
      </div>
      <div style={{
        backgroundImage: "url('https://ik.imagekit.io/0s9lwb2yr/Exospaces/toa-heftiba-FV3GConVSss-unsplash_EH0UxFXUq.jpg?updatedAt=1685125121745')"
      }} className='bg-center bg-cover bg-no-repeat flex items-end h-[300px] md:h-[500px]'>
        <div className='w-5/6 bg-white h-1/5 gap-6 hidden md:flex'>
          <div className='flex justify-between grow h-full items-center px-6 lg:px-12 max-w-xl xl:ml-[300px]'>
            <div>
              <p className='text-neutral-400 uppercase'>Type</p>
              <div className='flex items-center gap-2 mt-2'>
                <p className='font-semibold text-[20px]'>Personal</p>
                <div className='w-6 h-6 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div>
              <p className='text-neutral-400 uppercase'>Term</p>
              <div className='flex items-center gap-2 mt-2'>
                <span className='font-semibold text-[20px]'>Daily</span>
                <div className='w-6 h-6 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div>
              <p className='text-neutral-400 uppercase'>Space Type</p>
              <div className='flex items-center gap-2 mt-2'>
                <span className='font-semibold text-[20px]'>Creative Studio</span>
                <div className='w-6 h-6 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
          <button className='h-full bg-custom-orange text-white ml-auto px-8 text-lg font-semibold hover:bg-orange-400 transition-all'>Book Now</button>
        </div>
      </div>
      <div className='flex flex-col gap-y-6 items-center md:hidden py-8 bg-white border-solid border-[1px] border-neutral-200 w-[80%] mx-auto -mt-12'>
        <div>
          <p className='text-neutral-400 text-center'>Type</p>
          <div className='flex items-center gap-2 mt-1'>
            <p className='font-semibold text-lg'>Personal</p>
            <div className='w-5 h-5 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
              <i className="fa-solid fa-chevron-down fa-sm"></i>
            </div>
          </div>
        </div>
        <div>
          <p className='text-neutral-400 text-center'>Term</p>
          <div className='flex items-center gap-2 mt-1'>
            <span className='font-semibold text-lg'>Daily</span>
            <div className='w-5 h-5 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
              <i className="fa-solid fa-chevron-down fa-sm"></i>
            </div>
          </div>
        </div>
        <div>
          <p className='text-neutral-400 text-center'>Space Type</p>
          <div className='flex items-center gap-2 mt-1'>
            <span className='font-semibold text-lg'>Creative Studio</span>
            <div className='w-5 h-5 bg-neutral-50 flex justify-center items-center rounded-full text-neutral-600 shadow-md shadow-neutral-200'>
              <i className="fa-solid fa-chevron-down fa-sm"></i>
            </div>
          </div>
        </div>
        <button className='bg-custom-orange px-5 py-2 hover:bg-orange-400 transition-all text-white'>Book Now</button>
      </div>
    </section>
  )
}
