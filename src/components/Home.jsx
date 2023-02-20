import React from 'react';
import  { artDisplay }  from '../constants'

function Home() {
  return (
    <div className='h-full flex flex-col justify-between'>

      {/* <div className="snap-x mx-auto snap-mandatory h-[80%] flex w-full overflow-scroll ">
        {artDisplay.map((painting) => {
          return (
            <div key={painting.id} className="snap-start w-full flex-shrink-0 h-auto flex items-center justify-center px-2 ">
              <img src={`${painting.content}`} className='max-h-[100%]' />
            </div>)
        })}
      </div> */}

      <div className="overflow-y-scroll snap snap-y snap-mandatory h-[80%] my-auto flex flex-col ">
        {artDisplay.map((painting) => {
          return (
            <div key={painting.id} className="snap-start h-full flex-shrink-0 w-auto flex items-center justify-center px-2 ">
              <img src={`${painting.content}`} className='max-h-[100%]' />
            </div>)
        })}
      </div>

      <div className='flex flex-col h-[20%] pl-2 text-xl text-center'>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>

    </div>
  );
}

export default Home;