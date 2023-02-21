import React from 'react';
import { Fran } from '../assets/index'

function About() {
  return (
    <div className='h-[100%] flex flex-col w-auto md:flex-row md:justify-around md:h-[80%] lg:justify-between'>


      <div className='pt-3 px-2 sm:h-1/6 sm:flex sm:flex-col sm:justify-center md:h-[100%] md:px-6 md:pb-24 lg:max-w-[70%]'>
        <p className='text-3xl font-[NeueHaasGrotDisp65Medium] md:text-2xl md:pb-3 lg:text-3xl xl:text-4xl'>Born in Barcelona in 1990, Francisco Luis Matte .</p>
        <div className=' pt-2 md:text-xl lg:text-2xl lg:pt-5 xl:text-3xl'>
          <p className='text-justify'>He studied Graphic Design at the University of Buenos Aires; and also he
        developed and perfects most of his work. Many of his works are based on the
        manifestation of color, and his stroke; of color as a barrier between light and
        darkness. His obsession with form as an incomplete semantic device draws
        him into an abyss of production. He is currently working on aspects of the
        formalization of the work of Art, such as the plot of the composition.</p>
        </div>
      </div>



      <div className='ss:flex ss:justify-center sm:w-[80%] sm:m-auto md:flex-col md:w-auto md:pr-6 md:h-[100%]'>
        <img src={`${Fran}`} alt="fran" className='px-2 pt-2 ss:w-1/2  md:w-auto md:h-max'/>
      </div>


    </div>
  );
}

export default About;