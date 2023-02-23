import React from 'react';
import  { artDisplay, socialMedia }  from '../constants'


function Home() {
  return (
    <div className='h-[90%] flex flex-col justify-between md:h-[85%]'>

      <div className="overflow-y-scroll snap snap-y snap-mandatory h-1/2 my-auto flex flex-col md:h-[80%] lg:m-0">
        {artDisplay.map((painting) => {
          return (
            <div key={painting.id} className="snap-start h-full flex-shrink-0 w-auto flex items-center justify-center px-2 sm:py-3 lg:py-6">
              <img src={`${painting.content}`} className='max-h-[100%]' />
            </div>)
        })}
      </div>

      <div className='flex flex-col pl-2 text-xl text-center md:text-left md:text-base '>
        {socialMedia.map((socialNetwork) => {
          return (
            <a target="_blank" href={`${socialNetwork.link}`} key={socialNetwork.id} rel="noreferrer">
              <div  className="py-0.4">
                <span>{socialNetwork.title}</span>
              </div>
            </a>
          )
        })}

      </div>

    </div>
  );
}

export default Home;