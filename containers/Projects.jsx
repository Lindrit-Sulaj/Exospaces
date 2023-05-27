import React from 'react'

export default function Projects() {
  return (
    <section className='max-w-screen-web mx-auto px-6 md:px-8'>
      <div className='hidden lg:grid grid-cols-9 grid-rows-6 gap-6 max-h-[700px]'>
        <img className='col-span-4 row-span-6 max-h-full w-full object-cover' src="https://ik.imagekit.io/0s9lwb2yr/Exospaces/pexels-photo-5915141_G0deJ1Ova.jpegauto_compress_cs_tinysrgb_w_1600?updatedAt=1685211637887" alt="" />
        <img className='col-start-5 col-span-3 row-span-4 w-full object-cover object-top' src="https://images.pexels.com/photos/8191962/pexels-photo-8191962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='col-start-8 flex justify-between items-center px-6 col-span-2 border-solid border-[1px] border-neutral-300'>
          <span className='font-medium text-lg text-neutral-500'>View more</span>
          <button className='w-12 h-12 border-solid border-[1px] border-neutral-200 text-neutral-600'>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <img className='col-start-8 col-span-2 w-full object-cover h-full row-start-2 row-span-2' src="https://images.pexels.com/photos/1181625/pexels-photo-1181625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className='col-start-8 col-span-2 w-full object-cover row-span-3' src="https://images.pexels.com/photos/15599167/pexels-photo-15599167/free-photo-of-laptop-on-desk-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='col-start-5 col-span-3 row-start-5 row-span-2 flex flex-col bg-custom-green text-white p-6'>
          <p className='text-[20px] mb-2 font-semibold'><span className='text-slate-400 font-extrabold'>"</span>The <span className='text-emerald-400'>strength</span> of the team is each individual member. The <span className='text-emerald-400'>strength</span> of each member is the team.<span className='text-slate-400 font-extrabold'>"</span></p>
          <p className='mt-auto text-slate-300'>Phil Jackson</p>
        </div>
      </div>
      <div>
        <h2 className='text-2xl md:text-3xl mt-4 font-bold mb-4'>Gallery</h2>
        <div className='grid lg:hidden grid-cols-1 md:grid-cols-2 gap-4'>
          <img className='h-[200px] md:h-[300px] object-cover w-full' src="https://ik.imagekit.io/0s9lwb2yr/Exospaces/pexels-photo-5915141_G0deJ1Ova.jpegauto_compress_cs_tinysrgb_w_1600?updatedAt=1685211637887" alt="" />
          <img className='h-[200px] md:h-[300px] object-cover w-full' src="https://images.pexels.com/photos/8191962/pexels-photo-8191962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='h-[200px] md:h-[300px] object-cover w-full' src="https://images.pexels.com/photos/1181625/pexels-photo-1181625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img className='h-[200px] md:h-[300px] object-cover w-full' src="https://images.pexels.com/photos/15599167/pexels-photo-15599167/free-photo-of-laptop-on-desk-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="md:col-span-2 bg-custom-green text-white px-6 py-6 md:px-10 md:py-8">
            <p className='text-lg md:text-[20px] mb-4 font-semibold max-w-xl'><span className='text-slate-400 font-extrabold'>"</span>The <span className='text-emerald-400'>strength</span> of the team is each individual member. The <span className='text-emerald-400'>strength</span> of each member is the team.<span className='text-slate-400 font-extrabold'>"</span></p>
            <p className='mt-auto text-slate-300'>Phil Jackson</p>
          </div>
        </div>
      </div>
    </section>
  )
}
