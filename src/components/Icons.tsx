import React, { FC } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Icons: FC = () => {
    return (
        <div className="lg:ml-[5rem] md:ml-[1.75rem] mb-[2rem] flex pl-[2rem] gap-[1rem]">
            <div className="bg-neutral-800 hover:bg-circle-red hover:-translate-y-4 transition duration-700 rounded-full p-4 text-[1.35rem]">
                <a href="https://www.facebook.com/Coca-Cola/" target="_blank" rel="noopener"><FaFacebookF /></a>
            </div>
            <div className="bg-neutral-800 hover:bg-circle-red hover:-translate-y-4 transition duration-700 rounded-full p-4 text-[1.35rem]">
                <a href="https://twitter.com/CocaCola" target="_blank" rel="noopener"><FaTwitter /></a>
            </div>
            <div className="bg-neutral-800 hover:bg-circle-red hover:-translate-y-4 transition duration-700 rounded-full p-4 text-[1.35rem]">
                <a href="https://www.instagram.com/cocacola/" target="_blank" rel="noopener"><FaInstagram /></a>
            </div>
        </div>
    )
}

export default Icons