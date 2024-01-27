import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../button/Button';
import SlideDown from '../../utilities/SlideDown';
import Icon from '../../assets/Frame 1.svg';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav role='navigation'>
			<SlideDown className='flex justify-between items-center min-h-0 relative shadow-md container mx-auto'>
				<div className='w-48 p-6'>
					<Link
						to='#'
						className='pl-2'>
						<img
							className='w-48 p-2'
							src={Icon}
							alt='Logo'
						/>
					</Link>
				</div>

				<div
					className='px-8 cursor-pointer md:hidden text-white'
					onClick={toggle}>
					<i className='fas fa-bars'></i>
				</div>

				{isMenuOpen && (
					<div className='fixed top-0 left-0 w-full h-full bg-[#29292E] opacity-90 z-50'>
						<div className='flex justify-end p-4'>
							<button
								onClick={toggle}
								className={`cursor-pointer text-gray-500 hover:text-gray-700 lg:hidden transition-transform transform ${
									isMenuOpen ? 'rotate-180' : 'rotate-0'
								}`}>
								<svg
									className='h-6 w-6 fill-current'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<title>Close</title>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 1 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z'
									/>
								</svg>
							</button>
						</div>

						<div
							className={`lg:flex ${
								isMenuOpen ? 'text-white text-center p-4' : 'hidden'
							}`}>
							<Link
								to='section1'
								className='block py-2 hover:text-gray-300'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Home
							</Link>
							<Link
								to='section2'
								className='block py-2 hover:text-gray-300'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								About
							</Link>
							<Link
								to='section3'
								className='block py-2 hover:text-gray-300'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Projects
							</Link>
							<Link
								to='section4'
								className='block py-2 hover:text-gray-300'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Services
							</Link>

							<Link
								to='section5'
								className='block py-2 hover:text-gray-300'
								onClick={closeMenu}>
								<Button
									text={'Hire Me'}
									background
								/>
							</Link>
						</div>
					</div>
				)}

				<div className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center text-white'>
					<Link
						to='section1'
						className='hover:text-gray-400'
						smooth={true}
						duration={500}>
						Home
					</Link>
					<Link
						to='section2'
						className='hover:text-gray-400'
						smooth={true}
						duration={500}>
						About
					</Link>
					<Link
						to='section3'
						className='hover:text-gray-400'
						smooth={true}
						duration={500}>
						Projects
					</Link>
					<Link
						to='section4'
						className='hover:text-gray-400'
						smooth={true}
						duration={500}>
						Services
					</Link>

					<Link
						to='section5'
						className='mt-[-1rem]'>
						<Button
							text={'Hire Me'}
							background
						/>
					</Link>
				</div>
			</SlideDown>
		</nav>
	);
};

export default Navbar;
