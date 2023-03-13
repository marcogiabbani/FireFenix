import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';


function Navbar() {
  // const [active, setActive] = useState('Home');
  // para remarcar en que seccion se encuentra ^
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="
        bg-white min-w-[250px] w-full h-[12vh] flex justify-between
        sm:px-5 sm:min-h-[100px] sm:pt-2
        md:py-3 md:w-auto
        lg:max-h-fit lg:pt-6 lg:bg-transparent
          lg:fixed lg:top-0 lg:left-0 lg:right-0
      ">

      <div className='m-auto w-10/12 sm:w-2/3 md:w-2/3
        '>
        <Link to='/'>
          <span
            className='firefenix-F text-6xl
            md:text-8xl lg:text-7xl xl:text-8xl'>F</span>
          <span
            className='firefenix-I text-6xl
            md:text-8xl lg:text-7xl xl:text-8xl'>i</span>
          <span
            className='firefenix-R text-6xl
            md:text-8xl lg:text-7xl xl:text-8xl'>r</span>
          <span
            className='firefenix-E text-6xl
            md:text-8xl lg:text-7xl xl:text-8xl'>e</span>
          <span className=' text-6xl
          md:text-8xl lg:text-7xl xl:text-8xl'>Fenix</span>
        </Link>
      </div>

      {/* big screen */}
      <div className='flex flex-col justify-center w-1/3

      '>

        <ul
          className="
          hidden sm:flex justify-between list-none items-center
          lg:pl-28
          xl:pl-56 xl:pr-10
">

          {navLinks.map((nav) => (
            <Link to={`/${nav.link}`} key={nav.id}>
              <button className='focus:underline underline-offset-1 '>

                <li key={nav.id}
                  className="focus:underline cursor-pointer py-4 text-[25px]
                  md:text-3xl
                  lg:text-2xl">
                  {nav.title}
                </li>
              </button>
            </Link>
          ))}

        </ul>
      </div>

      {/* small screens */}
      <div className="flex justify-between sm:hidden">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={`${toggle
            ? 'gray'
            : 'black'}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-12 pt-1 "
          onClick={() => setToggle((prev) => !prev)}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>


        <div
          className={`${toggle
            ? 'flex'
            : 'hidden'} 
            absolute top-32 justify-center left-0 pr-3 w-full min-w-[140px]
            bg-white opacity-90`}>

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