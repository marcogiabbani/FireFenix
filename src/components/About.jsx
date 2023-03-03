import React from 'react';
import { Ser } from '../assets/index'

function About() {
  return (
    <div className='flex flex-col justify-between h-[88vh]'>


      <div className='flex flex-col justify-between'>

        <p className='text-3xl font-[NeueHaasGrotDisp65Medium]'>Born in Barcelona in 1990, Francisco Luis Matte .</p>

        <div className='text-xl'>
          <p className='text-justify'>He studied Graphic Design at the University of Buenos Aires; and also he
        developed and perfects most of his work. Many of his works are based on the
        manifestation of color, and his stroke; of color as a barrier between light and
        darkness. His obsession with form as an incomplete semantic device draws
        him into an abyss of production. He is currently working on aspects of the
        formalization of the work of Art, such as the plot of the composition.</p>
        </div>

      </div>

      <div className=''>
        <img src={`${Ser}`} alt="ser" className=''/>
      </div>


    </div>
  );
}

export default About;