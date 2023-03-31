import React from 'react'

export const Footer = () => {
  return (
    <footer className='border border-b-0 border-stone-800 p-3 py-5 px-5 rounded-md rounded-b-none'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm bg-gradient-to-r bg-clip-text from-stone-100 to-stone-300 text-transparent'>Follow me on <a href='#' className='underline decoration-stone-500 underline-offset-4'>Twitter</a> <span>,</span> <a href='#' className='underline decoration-stone-500 underline-offset-4'>LinkedIn</a></h3>
        <h3 className='text-sm bg-gradient-to-r bg-clip-text from-stone-100 to-stone-300 text-transparent'>Made by <a href='#' className='underline decoration-stone-500 underline-offset-4'>Suneeth</a></h3>
      </div>
    </footer>
  )
}
