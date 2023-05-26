import React from 'react'

export default function Hero() {
  return (
    <section className='pt-[70px]'>
      <div className='max-w-screen-web px-6 xl:px-0 mx-auto flex items-center gap-8 py-10'>
        <h1 className='font-bold text-[40px] leading-[50px] w-1/2'>Discover <span className='text-custom-green'>Inspiring</span> Workspaces for Success</h1>
        <p className='w-1/2 text-neutral-600'>Uncover inspiring workspaces that ignite your potential. From dynamic environments to flexible solutions, find the perfect space to thrive and achieve your business goals. Step into a world of success and growth.</p>
      </div>
      <div style={{
        backgroundImage: "url('https://ik.imagekit.io/0s9lwb2yr/Exospaces/toa-heftiba-FV3GConVSss-unsplash_EH0UxFXUq.jpg?updatedAt=1685125121745')"
      }} className='bg-center bg-cover bg-no-repeat flex items-end h-[500px]'>
        <div className='w-5/6 bg-white h-1/5 gap-6 flex'>
          <div className='flex justify-between grow h-full items-center px-12 max-w-xl xl:ml-[300px]'>
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
    </section>
  )
}
