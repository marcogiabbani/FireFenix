import React from 'react'
import  { socialMedia }  from '../constants'

function Footer() {
  return (
    <div>
      <div
        className='bg-white w-full h-[20vh] min-h-[160px] shrink-2 flex flex-col text-xl text-center
          xs:min-h-[32px] xs:h-8 xs:flex-row xs:justify-between
          md:text-left md:text-base'>
        {socialMedia.map((socialNetwork) => {
          return (
            <a target="_blank" href={`${socialNetwork.link}`} key={socialNetwork.id} rel="noreferrer">
              <div  className="py-0.5">
                <span>{socialNetwork.title}</span>
              </div>
            </a>
          )
        })}

      </div>
    </div>
  )
}

export default Footer