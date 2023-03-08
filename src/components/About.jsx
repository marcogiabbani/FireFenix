import React from 'react';
import { Ser } from '../assets/index'

function About() {
  return (
    <div
      className='flex flex-col justify-between h-[88vh]  w-full
        sm:flex-row sm:min-h-[600px] sm:mt-[80px]
        xl:'>


      <div
        className='flex flex-col justify-between
          sm:justify-evenly sm:w-3/5
          xl:w-5/6 xl:pl-4 xl:justify-start xl:pt-52'>

        <p className='text-3xl font-[NeueHaasGrotDisp65Medium]
          sm:text-4xl'>
          Born in Barcelona in 1990, Francisco Luis Matte .
        </p>

        <div className='text-xl sm:text-3xl'>
          <p className='text-justify
            xl:pt-16'>
            FM is a graphic designer who studied at Buenos Aires University.
            He develops and perfects most parts of his work. His production
            is mostly based on his particular stroke as a barrier between
            light and darkness.
          </p>
          <p className='text-justify
            xl:pt-16'>
            His obsession with form as an incomplete semantic device draws
            him into an abyss of production. He is currently working on aspects
            of the formalization of the work of Art, such as the plot of the
            composition.
          </p>
        </div>

      </div>

      <div className='flex flex-col justify-center
        sm:w-2/5
        lg:w-[30%]'>
        <img src={`${Ser}`} alt="ser" className='sm:'/>
      </div>


    </div>
  );
}

export default About;