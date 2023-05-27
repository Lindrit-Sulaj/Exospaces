"use client"
import React, { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const breakpoint = useMediaQuery();

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  return (
    <nav className='fixed px-6 top-0 w-full bg-white border-solid md:border-none border-b-[1px] border-b-neutral-200 h-[70px]'>
      <div className="max-w-screen-web mx-auto flex justify-between h-full items-center">
        <h2 className='font-bold text-lg md:text-xl flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-custom-orange">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>

          Exospaces
        </h2>
        <ul className='hidden md:flex gap-5 items-center'>
          <li className='text-neutral-900 font-semibold'><a href="#">Home</a></li>
          <li className='text-neutral-500'><a href="#">Locations</a></li>
          <li className='text-neutral-500'><a href="#">Events</a></li>
          <li className='text-neutral-500'><a href="#">Plans</a></li>
          <li className='text-neutral-800 font-medium ml-4'>
            <a href="#" className='bg-custom-green px-5 py-[10px] text-white'>
              Contact Us
            </a>
          </li>
        </ul>
        <button className='block md:hidden' onClick={opened ? close : open}>
          <i className={
            opened ? 'fa-solid fa-xmark fa-lg' : 'fa-solid fa-bars fa-lg'
          }></i>
        </button>
      </div>

      <AnimatePresence>
        {opened && breakpoint === "sm" && (
          <Mobile close={close} />
        )}
      </AnimatePresence>
    </nav>
  )
}

function Mobile() {
  return (
    <motion.div
      className='w-full h-[calc(100vh-70px)] fixed top-[70px] py-6 left-0 bg-neutral-50'
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw ' }}
      transition={{ type: 'just', duration: .15 }}
    >
      <ul className='flex flex-col gap-5 items-center'>
        <li className='text-neutral-900 text-lg font-semibold'><a href="#">Home</a></li>
        <li className='text-neutral-500 text-lg'><a href="#">Locations</a></li>
        <li className='text-neutral-500 text-lg'><a href="#">Events</a></li>
        <li className='text-neutral-500 text-lg'><a href="#">Plans</a></li>
        <li className='text-neutral-800 text-lg font-medium ml-4'>
          <a href="#" className='flex gap-2 items-center'>
            <i className="fa-solid fa-phone"></i>
            <span>Contact Us</span>
          </a>
        </li>
      </ul>
    </motion.div>
  )
}