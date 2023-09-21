import React from 'react'

const Footer = () => {
  return (
    <section className='w-full bg-[#08080d] text-gray-200 py-2 tracking-wider'>
      <div className='mx-auto w-3/4 flex justify-center items-center space-x-4'>
        <a href='mailto:info@rockycontractor.com' className='relative inline-block group cursor-pointer text-sm'>
          <span className='pb-1 block'>info@rockycontractor.com</span>
          <span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>
        </a>
      </div>
    </section>
  )
}

export default Footer
