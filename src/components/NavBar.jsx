import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';


function Navbar() {
  // const [active, setActive] = useState('Home');
  // para remarcar en que seccion se encuentra ^
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="min-w-[250px] max-h-20 flex justify-between sm:px-5 md:py-3 md:w-auto lg:max-h-fit  lg:pt-6">

      <div className='w-10/12 sm:w-2/3 md:w-2/3 '>
        <Link to='/'>
          <span className='text-6xl md:text-[50px] lg:text-7xl xl:text-8xl'>
                FireFenix
          </span>
        </Link>
      </div>

      {/* big screen */}
      <ul className="hidden sm:flex justify-between list-none items-center sm:w-1/3 md:w-[27%] md:justify-between md:pr-5">

        {navLinks.map((nav) => (
          <Link to={`/${nav.link}`} key={nav.id}>
            <button className='focus:underline underline-offset-1 '>

              <li key={nav.id} className="focus:underline cursor-pointer py-4 text-[25px] md:text-[18px]  lg:text-2xl">
                {nav.title}
              </li>
            </button>
          </Link>
        ))}

      </ul>

      {/* small screens */}
      <div className="flex justify-between sm:hidden">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={`${toggle ? 'gray' : 'black'}`} viewBox="0 0 24 24" strokeWidth={1.5} className="w-12 pt-1 " onClick={() => setToggle((prev) => !prev)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>


        <div className={`${toggle ? 'flex' : 'hidden'} 
          absolute justify-center top-20 left-0 w-full min-w-[140px] bg-white ml-2 opacity-90`}>

          <ul className="flex flex-col items-center">

            {navLinks.map((nav) => (

              <Link
                to={`/${nav.link}`}
                key={nav.id}
                onClick={() => setToggle((prev) => !prev)}
              >

                <li key={nav.id} className="cursor-pointer py-4 text-[40px]">
                  {nav.title}
                </li>

              </Link>

            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;