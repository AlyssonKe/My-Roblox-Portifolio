"use client";

import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        console.log(menuVisible)
    };

    return (
        <header className="h-20 w-full top-0 z-50">
            <nav className="h-full flex justify-between items-center px-0 pt-0 md:px-6">
                <Link
                    href="/"
                    className="bg-gray bg-center bg-contain bg-no-repeat w-20 h-20 mx-0 z-50"
                ></Link>
                
                <button onClick={toggleMenu} className='bg-red right-0 bg-contain bg-no-repeat w-12 h-12 inline z-50 min-[200px]:mr-10 md:hidden'></button>

                {/* <div className='clear-both'></div> */}

                <div className={`h-screen w-full backdrop-blur-lg fixed top-0 before:absolute before:h-full before:w-full before:bg-secundary md:absolute before:opacity-50 md:before:opacity-0 md:backdrop-blur-none ${menuVisible ? 'block' : 'hidden'} duration-300 transition-all md:block md:right-0 md:duration-0 flex items-center justify-center`}>
                    <ul className='flex flex-col md:flex-row justify-end items-center space-x-0 gap-6 sm:mx-8 md:text-base lg:mx-16 mt-5'>
                        
                        <li className='group relative flex flex-col items-center'>
                            <div className='h-10 w-40 bg-secundary rounded-xl flex items-center group-hover:bg-primary-blue group-hover:duration-200'>
                                <Link href="/" className='w-full text-2xl font-semibold text-primary text-center uppercase'>Home</Link>
                            </div>
                        </li>

                        <li className='group relative flex flex-col items-center'>
                            <div className='h-10 w-40 bg-secundary rounded-xl flex items-center group-hover:bg-primary-blue group-hover:duration-200'>
                                <Link href="/" className='w-full text-2xl font-semibold text-primary text-center uppercase'>About Me</Link>
                            </div>
                        </li>

                        <li className='group relative flex flex-col items-center'>
                            <div className='h-10 w-40 bg-secundary rounded-xl flex items-center group-hover:bg-primary-blue group-hover:duration-200'>
                                <Link href="/" className='w-full text-2xl font-semibold text-primary text-center uppercase'>My Works</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}