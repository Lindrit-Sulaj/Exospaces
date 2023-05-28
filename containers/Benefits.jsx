import React from 'react'

const data = [
  {
    title: 'Cost-Effective Solutions',
    description: 'Optimize your expenses and allocate resources more efficiently, allowing your business to thrive.',
    icon: 'fa-solid fa-sack-dollar'
  },
  {
    title: 'Networking Opportunities',
    description: 'Join a dynamic community of professionals at "Exospaces" and unlock valuable networking opportunities.',
    icon: 'fa-solid fa-users'
  },
  {
    title: 'Professional Environment',
    description: 'Benefit from well-designed, fully equipped workspaces that project a polished image for your business.',
    icon: 'fa-solid fa-desktop'
  }
]

export default function Benefits() {
  return (
    <section className='px-6 md:px-8 my-14'>
      <div className="max-w-screen-web mx-auto flex items-center flex-wrap lg:flex-nowrap gap-6">
        <div className="w-full lg:w-1/2">
          <p className='uppercase text-neutral-500 font-medium text-center lg:text-left'>Benefits</p>
          <h2 className='text-2xl md:text-3xl mt-3 font-bold text-center lg:text-left'>Why should you choose Exospaces?</h2>
          <img className='w-3/4 lg:w-full mx-auto' src="https://ik.imagekit.io/0s9lwb2yr/Exospaces/My_project-1__5__CHxb_lvnu.png?updatedAt=1685271839089" alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          { data.map(benefit => (
            <Benefit key={benefit.title} {...benefit} />
          )) }
        </div>
      </div>
    </section>
  )
}

function Benefit({ icon, title, description }) {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 bg-neutral-50 border-solid border-[1px] border-neutral-100 py-8 lg:py-3 px-6'>
      <i className={`${icon} fa-xl text-custom-orange`}></i>
      <div>
        <h5 className='font-semibold text-[17px] md:text-lg text-center lg:text-left'>{title}</h5>
        <p className='text-neutral-600 text-[15px] md:text-base mt-1 max-w-md text-center lg:text-left'>{description}</p>
      </div>
    </div>
  )
}