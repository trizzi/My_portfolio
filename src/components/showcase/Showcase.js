import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import SlideIn from '../../utilities/SlideIn';
import FadeIn from '../../utilities/FadeIn';
import Text from '../../assets/Text (1).svg';
import showcaseImg from '../../assets/Profile picture (1).svg';

const Showcase = () => {
	return (
		<div
			name='section1'
			className='flex'>
			<div className='flex flex-col md:flex-row justify-between  md:container md:mx-auto items-center py-44'>
				<div className='px-12'>
					<FadeIn>
						<img
							src={Text}
							alt='Intro'
						/>
					</FadeIn>
					<Link to='#'>
						<Button
							text={'Explore'}
							className='mt-4 text-white'
							background
						/>
					</Link>
				</div>
				<SlideIn>
					<div className='sm:mx-10 md:my-20 '>
						<div className='hidden md:flex text-white bg-[#29292E] opacity-90 rounded-full py-4 md:pl-4 md:pr-16 w-fit hover:bg-black'>
							<img
								src={showcaseImg}
								alt='Images'
							/>
							<a
								href='patrickakhamiogu@gmail.com'
								className='pt-3 pl-2'>
								<p>patrickakhamiogu@gmail.com</p>
							</a>
						</div>
					</div>
				</SlideIn>
			</div>
		</div>
	);
};

export default Showcase;
