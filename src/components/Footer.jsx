import React from 'react'
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <section className='bg-blue-950 mb-10 md:mb-20 min-h-[40vh] md:h-[60vh] w-full max-w-[95%] md:max-w-[800px] rounded-[20px] flex flex-col md:flex-row justify-between m-auto px-0 md:px-0'>
      <div className='flex flex-col items-center md:items-start text-white py-10 md:py-20 px-5 md:px-10'>
        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Contact</h3>
        <a className='text-xs md:text-sm hover:underline' href='https://www.instagram.com/kaosarsalam/'>Instagram</a>
        <a className='text-xs md:text-sm hover:underline' href='https://www.x.com/qaozy/'>Twitter</a> 
        <a className='text-xs md:text-sm hover:underline' href='https://www.x.com/qaozy/'>Youtube</a> 
      </div>

      <div className='text-white text-xs md:text-sm text-center py-10 md:py-20 px-5 flex-1'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Lorem ipsum dolor sit amet, consectetur adipisci elit,<br/>')
              .pauseFor(500)
              .typeString('sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<br/>')
              .pauseFor(500)
              .typeString('Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,<br/>')
              .pauseFor(500)
              .typeString('nisi ut aliquid ex ea commodi consequatur.')
              .start();
          }}
          options={{
            delay: 30,
            cursor: '|',
          }}
        />
      </div>
    </section>
  )
}

export default Footer;