"use client"
import { useMemo, useState } from 'react'

const data = [
  {
    "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "text": "The workspaces provided by Exospaces have been instrumental in boosting our team's productivity and collaboration. We couldn't be happier with the exceptional service and inspiring environment they offer.",
    "name": "John Smith",
    "company": "ABC Corporation"
  },
  {
    "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "text": "Choosing Exospaces was one of the best decisions we made. The flexible workspaces and professional atmosphere have helped our business grow. Highly recommended!",
    "name": "Sarah Johnson",
    "company": "XYZ Industries"
  },
  {
    "image": "https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg",
    "text": "We have been impressed with the quality and flexibility of Exospaces's workspaces. The comfortable and modern facilities have greatly enhanced our work experience, leading to increased efficiency and creativity.",
    "name": "David Brown",
    "company": "123 Enterprises"
  }
]


export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const testimonials = useMemo(() => {
    let firstTestimonial = data[selectedIndex];
    let secondTestimonial;

    if (selectedIndex === data.length - 1) {
      secondTestimonial = data[0];
    } else {
      secondTestimonial = data[selectedIndex + 1];
    };

    return [firstTestimonial, secondTestimonial];

  }, [selectedIndex]);

  const handleClick = (type) => {
    if (type == "prev") {
      if (selectedIndex === 0) {
        setSelectedIndex(data.length - 1);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }

      return;
    };

    if (selectedIndex === data.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <section className='my-16 max-w-screen-web px-6 md:px-8 mx-auto'>
      <div className='flex flex-wrap gap-4 lg:gap-6 items-center lg:flex-nowrap'>
        <div className='w-full lg:w-1/2'>
          <p className='uppercase text-neutral-500 font-medium'>Testimonials</p>
          <h2 className='text-2xl md:text-3xl mt-2 font-bold'>What our clients say about us</h2>
        </div>
        <p className='w-full mx-auto text lg:w-1/2 text-neutral-700'>We hope we will continue to trust each other so that we create a beautiful connection between us and you.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-6'>
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
      <div className='flex justify-end gap-3 mt-4'>
        <button onClick={() => handleClick('prev')} className='w-12 h-12 text-neutral-500 border-solid border-[1px] border-neutral-200'>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => handleClick('next')} className='w-12 h-12 text-neutral-500 border-solid border-[1px] border-neutral-200'>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}

function Testimonial({ image, text, name, company }) {
  return (
    <div className='px-6 py-8 border-solid flex flex-col border-[1px] border-neutral-100'>
      <div className="flex justify-end"><i className="fa-solid fa-quote-left fa-xl text-custom-orange"></i></div>
      <img className='w-14 h-14 rounded-full object-cover' src={image} alt={name} />
      <p className='mt-4 text-[15px] md:text-base text-neutral-600'>"{text}"</p>
      <div className='mt-4'>
        <p className='font-semibold text-[17px]'>{name}</p>
        <p className='text-neutral-500 text-[15px] md:text-base font-medium'>{company}</p>
      </div>
    </div>
  )
}