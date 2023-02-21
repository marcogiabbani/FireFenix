import React from 'react';
import { Fran } from '../assets/index'

function About() {
  return (
    <div className='h-[100%] flex flex-col md:mx-5'>
      <div className='pt-3 sm:h-1/6 sm:flex sm:flex-col sm:justify-center md:mt-12 '>
        <p className='text-3xl font-[NeueHaasGrotDisp65Medium] md:text-2xl'>Born in Barcelona in 1990, Francisco Luis Matte .</p>
      </div>

      <div className=' sm:flex sm:flex-col sm:justify-evenly md:flex-row md:justify-between '>
        <div className='px-2 pt-2 md:w-[70%] md:text-xl'>
          <p className='text-justify'>He studied Graphic Design at the University of Buenos Aires; and also he
        developed and perfects most of his work. Many of his works are based on the
        manifestation of color, and his stroke; of color as a barrier between light and
        darkness. His obsession with form as an incomplete semantic device draws
        him into an abyss of production. He is currently working on aspects of the
        formalization of the work of Art, such as the plot of the composition.</p>
        </div>

        <div className='ss:flex ss:justify-center md:w-[28%]'>
          <img src={`${Fran}`} alt="fran" className='px-2 pt-2 ss:w-1/2 md:w-auto'/>
        </div>
      </div>
    </div>
  );
}

export default About;