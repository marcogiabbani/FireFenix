import React from 'react';
import { Ser } from '../assets/index'

function About() {
  return (
    <div
      className='flex flex-col justify-between h-[88vh]  w-full
        sm:flex-row sm:min-h-[600px] sm:mt-[80px]'>


      <div
        className='flex flex-col justify-between
          sm:justify-evenly sm:w-3/5'>

        <p className='text-3xl font-[NeueHaasGrotDisp65Medium]
          sm:text-4xl'>
          Born in Barcelona in 1990, Francisco Luis Matte .
        </p>

        <div className='text-xl sm:text-3xl'>
          <p className='text-justify'>
            He studied Graphic Design at the University of Buenos Aires;
            and also he developed and perfects most of his work. Many of
            his works are based on the manifestation of color, and his
            stroke; of color as a barrier between light and darkness.
            His obsession with form as an incomplete semantic device draws
            him into an abyss of production. He is currently working on
            aspects of the formalization of the work of Art, such as the
            plot of the composition.
          </p>
        </div>

      </div>

      <div className='flex flex-col justify-center
        sm:w-2/5'>
        <img src={`${Ser}`} alt="ser" className='sm:'/>
      </div>


    </div>
  );
}

export default About;