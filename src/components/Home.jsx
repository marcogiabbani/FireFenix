import React from 'react';
import  { artDisplay }  from '../constants'
import Footer from './Footer'


function Home() {
  return (
    <div className='bg-white h-[85vh] flex flex-col justify-between'>


      <div className='bg-white px-2 py-[8vh] h-[80vh] w-full overflow-y-auto content-center'>
        {artDisplay.map((painting) => {
          return (
            <div key={painting.id} className="flex flex-col justify-evenly pb-[16vh]">
              <img src={`${painting.content}`} className=''/>
            </div>)
        })}
      </div>
      <div>

        <Footer/>
      </div>


    </div>
  );
}

export default Home;