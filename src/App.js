import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import Button from './components/button/Button';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import { useTheme } from './context/ThemeContext';
import showcaseImg from './assets/showcase_image.svg';
import Showcase from './components/showcase/Showcase';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import New from './components/new/New';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme } = useTheme();

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	if (isOpen === true) {
		return (
			<div className='fixed top-0 left-0 w-full h-full bg-[#29292E] opacity-90 z-50'>
				<div className='flex justify-end p-4'>
					<button
						onClick={toggle}
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

				<div className='text-white text-center p-4'>
					<Link
						to='section1'
						className='block py-2 hover:text-gray-300'
						smooth={true}
						duration={500}>
						Home
					</Link>
					<Link
						to='section2'
						className='block py-2 hover:text-gray-300'
						smooth={true}
						duration={500}>
						About
					</Link>
					<Link
						to='section3'
						className='block py-2 hover:text-gray-300'
						smooth={true}
						duration={500}>
						Projects
					</Link>
					<Link
						to='section4'
						className='block py-2 hover:text-gray-300'
						smooth={true}
						duration={500}>
						Services
					</Link>

					<Link
						to='#'
						className='block py-2 hover:text-gray-300'>
						<Button
							text={'Hire Me'}
							background
						/>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div
			className='App overflow-x-hidden'
			style={{
				color: theme.textcolor.light,
				background: theme.backgroundcolor.primary,
			}}>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								<>
									<div
										style={{
											backgroundImage: `url(${showcaseImg})`,
											backgroundRepeat: 'no-repeat',
											backgroundSize: 'cover',
											height: '800px',
											backgroundColor: 'rgba(0,0,0,0.9)',
											color: theme.textcolor.dark,
										}}>
										<Navbar toggle={toggle} />
										<Showcase />
									</div>
									<About />
									<Projects />
									<Services />
									<Contact />
								</>
							</Suspense>
						}
					/>
					<Route
						exact
						path='/new'
						element={<New />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
