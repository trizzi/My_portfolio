import React from 'react';
import Button from '../button/Button';
import aboutLogo from '../../assets/about_button.svg';
import text from '../../assets/PATRICK AKHAMIOGU.svg';
import aboutImage from '../../assets/about_background_image.svg';

const About = () => {
	return (
		<div
			name='section2'
			className=''
			style={{
				backgroundImage: `url(${aboutImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div className='flex flex-col sm:flex-row w-full justify-between text-white'>
				<div className=' bg-slate-800 sm:w-1/2'>
					<div className='mt-6'>
						<div className='flex px-12 pt-8'>
							<div>
								<img
									src={aboutLogo}
									alt='about-logo'
								/>
							</div>
							<div>
								<h1>About</h1>
								<img
									src={text}
									alt='Patrick-Akhamiogu'
								/>
							</div>
						</div>
						<div className='sm:ml-24 ml-20'>
							<h1 className='font-bold pb-4'>Professional Background</h1>
							<p>
								With years of professional experience, I have honed my skills as
								a web developer, focusing primarily on front-end development,
								complemented by expertise in backend development
							</p>
						</div>
						<div className='sm:ml-24 p-8'>
							<h1 className='font-bold pb-4'>Passion and Approach</h1>
							<p>
								As a deadline-focused professional, I am recognized for my
								proactive approach, effective communication, and results-driven
								orientation. My primary interest lies in addressing tangible
								customer challenges with robust business justifications.
								Currently seeking opportunities to broaden my skills in web
								development and project management, my proficiency in Graphic
								design is integral to crafting visually stunning websites with
								exceptional UI/UX designs. Furthermore, I have a personal
								passion for music, music production, and video editing.
							</p>
						</div>
						<div className='sm:ml-24 sm:my-4 ml-32 mb-10'>
							<Button>Hire me</Button>
						</div>
					</div>
				</div>
				{/* <div
					className='hidden sm:visible sm:w-1/2'
					style={{
						backgroundImage: `url(${aboutImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						height: '800px',
						backgroundColor: 'rgba(0,0,0,0.9)',
					}}></div> */}
			</div>
		</div>
	);
};

export default About;
