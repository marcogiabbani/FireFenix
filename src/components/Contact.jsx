import React from 'react';

function Contact() {
  return (
    <div className='h-[88vh] flex flex-col xl:justify-center'>
      <div className='h-1/2 flex flex-col justify-center xl:h-auto'>
        <span className='text-3xl md:text-7xl xl:text-9xl'>hellofirefenix@gmail.com</span>
      </div>

      <div className='h-1/2 xl:h-auto'>
        <div>
          <span className='text-3xl md:text-7xl md:pl-1 xl:text-9xl'>-</span>
        </div>

        <div>
          <span className='text-3xl md:text-7xl xl:text-9xl'>Buenos Aires.</span>
        </div>

        <div>
          <span className='text-3xl md:text-7xl xl:text-9xl'>Argentina.</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;