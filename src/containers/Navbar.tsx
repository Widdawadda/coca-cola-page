import React, { FC, useState } from 'react';
import logo from "../assets/images/logo.png";
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { VscEyeClosed } from 'react-icons/vsc';

const Navbar: FC = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <>
            <div className='flex z-50 justify-between items-center pt-[3rem] px-[2rem]'>
                <a href='#'><img src={logo} alt="Coca Cola logo" className="lg:ml-[5rem] md:ml-[1.75rem] max-w-[10rem]" /></a>
                <ul className='lg:mr-[5rem] hidden lg:flex lg:flex-row lg:gap-[2.5rem]'>
                    <li className='text-[1.5rem] cursor-pointer hover:opacity-70 transition-all'>Home</li>
                    <li className='text-[1.5rem] cursor-pointer hover:opacity-70 transition-all'>Menu</li>
                    <li className='text-[1.5rem] cursor-pointer hover:opacity-70 transition-all'>What's New</li>
                    <li className='text-[1.5rem] cursor-pointer hover:opacity-70 transition-all'>Contact</li>
                </ul>
                <div className="lg:hidden">
                    <div onClick={() => { setMenuToggle(!menuToggle) }} className='cursor-pointer z-40 text-[2.75rem] text-white'>
                        <BsFillMenuButtonWideFill />
                    </div>
                    {
                        menuToggle &&
                        <div className='bg-circle-red fixed z-[1000] top-0 left-0 w-full h-full transition-all'>
                            <div onClick={() => { setMenuToggle(!menuToggle) }} className='absolute cursor-pointer z-40 text-[2.75rem] text-white top-[3rem] right-[2rem]'>
                                <VscEyeClosed className='visible' />
                            </div>
                            <ul className='absolute flex flex-col items-center gap-[1rem] -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2'>
                                <li className='text-[2rem] cursor-pointer hover:opacity-70 transition-all'>Home</li>
                                <li className='text-[2rem] cursor-pointer hover:opacity-70 transition-all'>Menu</li>
                                <li className='text-[2rem] cursor-pointer hover:opacity-70 transition-all'>What's New</li>
                                <li className='text-[2rem] cursor-pointer hover:opacity-70 transition-all'>Contact</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="absolute md:clip-md lg:clip-lg clip bg-circle-red top-0 right-0 w-full h-full"></div>
        </>
    )
}

export default Navbar