import React from 'react';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import Button from '../button/Button';
import SlideDown from '../../utilities/SlideDown';
import Icon from '../../assets/Frame 1.svg';

const Navbar = ({ toggle }) => {
	return (
		<nav role='navigation'>
			<SlideDown className='flex justify-between items-center min-h-0 relative shadow-md container mx-auto'>
				<div className='w-48 p-6'>
					<Link
						to='#'
						className='pl-2 shrink-0'>
						<img
							className='w-48 p-2'
							src={Icon}
							alt='Logo'
						/>
					</Link>
				</div>

				<div
					className='px-8 cursor-pointer md:hidden'
					onClick={toggle}>
					<i className='fas fa-bars'></i>
				</div>
				<div className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center'>
					<Link
						to='section1'
						smooth={true}
						duration={500}>
						Home
					</Link>
					<Link
						to='section2'
						smooth={true}
						duration={500}>
						About
					</Link>
					<Link
						to='section3'
						smooth={true}
						duration={500}>
						Services
					</Link>
					<Link
						to='section4'
						smooth={true}
						duration={500}>
						Projects
					</Link>
					<Link to='#'>
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
