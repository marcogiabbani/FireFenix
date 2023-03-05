import React from 'react';
import { artDisplay } from '../constants'
import Footer from './Footer'


function Home() {
  return (
    <div className='bg-white h-[88vh] flex flex-col justify-between
    '>

      <div
        className='
        bg-white py-[8vh] h-[80vh] w-full overflow-y-auto content-center
        sm:left-0 sm:py-0 sm:h-max sm:pt-[7vh]
        md:pt-0
        lg:overflow-y-visible'>
        {artDisplay.map((painting) => {
          return (
            <div
              key={painting.id}
              className="flex flex-col justify-evenly py-[10vh]
                xs:max-w-[70%] xs:m-auto
                md:py-[13vh]

              ">
              <img src={`${painting.content}`} className=''/>
            </div>)
        })}
      </div>
      <div className='sm:max-w-fit sm:absolute sm:left-0 sm:bottom-0 sm:pl-2
        lg:sticky'>

        <Footer/>
      </div>


    </div>
  );
}

export default Home;