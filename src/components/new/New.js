import React, { useState } from 'react';

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='lg:hidden'>
			<button
				onClick={handleToggle}
				className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700'>
				<svg
					className='h-3 w-3 fill-current'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<title>Menu</title>
					<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
				</svg>
			</button>
			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-50'>
					<div className='flex justify-end p-4'>
						<button
							onClick={handleToggle}
							className='text-gray-500 hover:text-gray-700'>
							<svg
								className='h-6 w-6 fill-current'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<title>Close</title>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 1 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z'
								/>
							</svg>
						</button>
					</div>
					{/* Add your menu items here */}
					<div className='text-white text-center p-4'>
						<a
							href='#'
							className='block py-2 hover:text-gray-300'>
							Home
						</a>
						<a
							href='#'
							className='block py-2 hover:text-gray-300'>
							About
						</a>
						<a
							href='#'
							className='block py-2 hover:text-gray-300'>
							Contact
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default HamburgerMenu;
