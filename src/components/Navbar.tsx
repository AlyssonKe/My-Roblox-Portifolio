"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importando o usePathname
import { useState } from 'react';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const pathname = usePathname(); // Usando usePathname para pegar o caminho atual

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className="h-20 w-full top-0 z-50">
            <nav className="h-full flex justify-between items-center px-0 pt-0 md:px-6">
                <Link
                    href="/"
                    className="bg-hat-icon bg-center bg-contain bg-no-repeat w-20 h-20 z-50 mx-6"
                ></Link>
                
                <button
                    onClick={toggleMenu}
                    className='right-0 bg-contain bg-no-repeat w-12 h-12 inline z-50 min-[200px]:mr-10 md:hidden'
                >
                    <svg className='fill-secondary duration-200 group-hover:fill-primary-blue group-hover:duration-200' viewBox="0 0 40 40">
                        <path d="M38 8C38 8.53043 37.7893 9.03914 37.4142 9.41421C37.0391 9.78929 36.5304 10 36 10H4C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H36C36.5304 6 37.0391 6.21071 37.4142 6.58579C37.7893 6.96086 38 7.46957 38 8ZM38 20C38 20.5304 37.7893 21.0391 37.4142 21.4142C37.0391 21.7893 36.5304 22 36 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20C2 19.4696 2.21071 18.9609 2.58579 18.5858C2.96086 18.2107 3.46957 18 4 18H36C36.5304 18 37.0391 18.2107 37.4142 18.5858C37.7893 18.9609 38 19.4696 38 20ZM36 34C36.5304 34 37.0391 33.7893 37.4142 33.4142C37.7893 33.0391 38 32.5304 38 32C38 31.4696 37.7893 30.9609 37.4142 30.5858C37.0391 30.2107 36.5304 30 36 30H4C3.46957 30 2.96086 30.2107 2.58579 30.5858C2.21071 30.9609 2 31.4696 2 32C2 32.5304 2.21071 33.0391 2.58579 33.4142C2.96086 33.7893 3.46957 34 4 34H36Z"/>
                    </svg>
                </button>

                {/* <div className='clear-both'></div> */}

                <div className={`h-screen w-full backdrop-blur-lg fixed z-20 md:h-fit top-0 before:absolute before:h-full before:w-full before:bg-secondary md:absolute before:opacity-50 md:before:opacity-0 md:backdrop-blur-none ${menuVisible ? 'block' : 'hidden'} duration-300 transition-all md:block md:right-0 md:duration-0 flex items-center justify-center`}>
                    <ul className='flex flex-col md:flex-row justify-end items-center space-x-0 gap-6 sm:mx-8 md:text-base lg:mx-16 mt-5'>
                        {[
                            { key: "home", label: "Home", path: "/" },
                            { key: "about", label: "About", path: "/about" },
                            { key: "works", label: "Works", path: "/works" },
                        ].map(({ key, label, path }) => (
                            <li key={key} className='group relative'>
                                <Link href={path}>
                                    <div className={`
                                        h-10 w-40 rounded-xl flex items-center justify-center text-primary text-2xl font-semibold text-center uppercase group-hover:bg-primary-blue group-hover:duration-200 ${pathname === path ? 'bg-primary-blue' : 'bg-secondary group-hover:bg-secondary-gray group-hover:text-secondary'} 
                                    `}>
                                        {label}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}