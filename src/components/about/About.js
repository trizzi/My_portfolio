import React from 'react';
import Button from '../button/Button';
import SlideIn from '../../utilities/SlideIn';
import showcaseImg from '../../assets/Profile picture (1).svg';
import aboutLogo from '../../assets/about_button.svg';
import text from '../../assets/PATRICK AKHAMIOGU.svg';
import aboutImage from '../../assets/about_background_image.svg';

const About = () => {
	return (
		<div
			name='section2'
			className='md:h-[90vh] lg:h-[83vh]'
			style={{
				backgroundImage: `url(${aboutImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				// height: '800px',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div className='flex flex-col sm:flex-row w-full justify-between text-white'>
				<div className='bg-[#29292E] opacity-80 md:w-1/2'>
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
						<div className='lg:ml-24 md:mx-16 mx-14'>
							<h1 className='font-bold pb-4'>Professional Background</h1>
							<p>
								With years of professional experience, I have honed my skills as
								a web developer, <br />
								focusing primarily on front-end development, complemented by
								expertise in backend <br />
								development
							</p>
						</div>
						<div className='lg:ml-24 md:mx-16 mx-14'>
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
						<div className='lg:ml-24 md:mx-16 my-4 ml-14 mb-10'>
							<Button
								text={'Hire Me'}
								className='text-white'
							/>
						</div>
					</div>
				</div>
				<div
					className='hidden md:block md:visible sm:w-1/2 md:h-[920px] lg:h-[800px]'
					style={{
						backgroundImage: `url(${aboutImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						// height: '920px',
						backgroundColor: 'rgba(0,0,0,0.9)',
					}}>
					<SlideIn>
						<div className='md:mt-[40rem] md:ml-[25rem]'>
							<div className='md:mx-10 md:my-20 '>
								<div className='hidden md:flex text-white bg-[#29292E] opacity-90 rounded-full p-4 w-fit hover:bg-black'>
									<img
										src={showcaseImg}
										alt='Images'
									/>
									<a
										href='info@ideas2launch.com'
										className='pt-3 pl-2'>
										<p>patrickakhamiogu@gmail.com</p>
									</a>
								</div>
							</div>
						</div>
					</SlideIn>
				</div>
			</div>
		</div>
	);
};

export default About;
