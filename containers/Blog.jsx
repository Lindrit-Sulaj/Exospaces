import React from 'react'

const articles = [
  {
    "image": "https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "title": "Boosting Workplace Productivity: Effective Strategies for Success",
    "date": "December 5th, 2020",
    "author": "Emma Thompson"
  },
  {
    "image": "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "title": "Creating a Positive Work Environment: Cultivating Success",
    "date": "December 5th, 2020",
    "author": "Oliver Turner"
  },
  {
    "image": "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "title": "Flexible Workspaces: Adapting to the Future of Work",
    "date": "December 5th, 2020",
    "author": "Sophia Davis"
  },
]


export default function Blog() {
  return (
    <section className='my-16 px-6 md:px-8 bg-custom-green py-14 text-white'>
      <div className='max-w-screen-web mx-auto'>
        <p className='uppercase font-medium text-emerald-400'>Blog</p>
        <h2 className='text-2xl md:text-3xl mt-2 font-bold'>Explore our blog <span className="text-emerald-400">diverse</span> articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {articles.map(article => (
            <Article key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Article({ title, image, author, date }) {
  return (
    <div>
      <img className='w-full object-cover h-[200px]' src={image} alt={title} />
      <p className='font-medium text-neutral-300 mt-4'>{date}</p>
      <h5 className='font-semibold text-lg mt-3'>{title}</h5>
      <p className='mt-2 text-sm md:text-base'>By: <span className='text-neutral-300'>{author}</span></p>
    </div>
  )
}