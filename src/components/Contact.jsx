import React from 'react';

function Contact() {
  return (
    <div className='h-[100%] flex flex-col pl-2'>
      <div className='h-1/2 flex flex-col justify-center'>
        <span className='text-3xl md:text-7xl'>hellofirefenix@gmail.com</span>
      </div>

      <div className='h-1/2'>
        <div>
          <span className='text-3xl md:text-7xl md:pl-1'>-</span>
        </div>

        <div>
          <span className='text-3xl md:text-7xl'>Buenos Aires.</span>
        </div>

        <div>
          <span className='text-3xl md:text-7xl'>Argentina.</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;