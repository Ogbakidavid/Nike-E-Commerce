import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from './constants';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='absolute z-10 lg:px-10 py-3 w-full max-container px-8'>
            <nav className='flex justify-between items-center'>
                <a href="/">
                    <img src={headerLogo} alt="nike" width={130} height={29} />
                </a>
                <div className={`fixed inset-0 bg-overlay
                ${isOpen ? 'block' : 'hidden'}`}
                    onClick={closeMenu}>
                </div>

                <ul className={`flex justify-center items-center gap-10
                    max-lg:fixed max-lg:flex-col max-lg:top-0 max-lg:bg-slate-gray
                    max-lg:h-screen max-lg:w-[320px] max-lg:z-0 max-lg:right-0 
                    max-lg:shadow max-lg:justify-start max-lg:items-start
                    max-lg:pt-12 max-lg:pl-3
                    ${isOpen 
                    ? 'max-lg:flex '
                    : 'max-lg:hidden'}`}>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a className='font-tertiary lg:text-lg font-bold 
                                leading-normal text-slate-gray max-md:text-[20px]
                                hover:text-coral duration-300 ease-linear max-lg:text-white' 
                                href={item.href}
                                onClick={closeMenu}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <div className='min-lg:hidden flex items-center
                        gap-6 font-tertiary capitalize'>
                            <a href="/" className='text-lg font-bold text-white 
                            hover:text-coral transition duration-200 ease-linear'>sign in</a>
                            <a href="/" className='border border-white px-7
                            py-1.5 bg-coral text-white rounded-full font-bold
                            hover:bg-white hover:text-coral hover:border-coral hover:shadow
                            transition duration-200 ease-linear'>sign up</a>
                        </div>
                </ul>

                <div className='flex items-center gap-6 font-tertiary capitalize max-lg:hidden'>
                        <a href="/" className='text-lg font-bold text-slate-gray
                        hover:text-coral transition duration-200 ease-linear'>sign in</a>
                        <a href="/" className='border border-white px-5 
                        py-3 bg-coral text-white rounded-full font-bold
                        hover:bg-white hover:text-coral hover:border-coral hover:shadow
                        transition duration-200 ease-linear'>sign up</a>
                </div>
                <span className='hidden max-lg:block cursor-pointer z-10 max-lg:fixed 
                max-lg:right-6 max-lg:top-[10px] max-lg:bg-white 
                px-2 py-1.5 rounded-md shadow' onClick={toggleMenu}>
                    <img src={hamburger} 
                    alt="hamburger" 
                    width={25} 
                    height={25}
                    />
                </span>
            </nav>
        </header>
    );
};

export default Navbar;