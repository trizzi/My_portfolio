import React from 'react';
import contact from '../../assets/Contact.svg';
import text from '../../assets/contact_me_text.svg';

const Contact = () => {
	return (
		<div
			name='section5'
			className='flex text-white w-full'>
			<div className='hidden md:block md:visible w-1/2 bg-black p-32'>
				<img
					src={text}
					alt='Contact-me-text'
				/>
			</div>
			<div className='relative sm:w-1/2 bg-black p-12 lg:p-24'>
				<img
					src={contact}
					alt='images'
				/>
				<div className='absolute top-1/4 left-[9%] transform hover:scale-110 transition-transform duration-300 bg-green-500 rounded-full p-1 md:p-2'>
					<i className='fa-brands fa-whatsapp text-white text-2xl md:text-3xl'></i>
				</div>

				<div className='absolute top-[18%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 hover:rotate-45 transition-transform duration-300 bg-blue-500 rounded-full p-1 md:p-2'>
					<a href='https://www.linkedin.com/in/patrick-akhamiogu-8750b6177/'>
						<i className='fa-brands fa-linkedin text-white text-2xl '></i>
					</a>
				</div>

				<div className='absolute top-[78%] left-[30%] transform hover:animate-bounce bg-black rounded-full p-1 md:p-2'>
					<a href='https://www.github.com/trizzi'>
						<i className='fa-brands fa-github text-white text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div className='absolute top-1/3 left-[84%] md:left-[71%] transform hover:animate-bounce bg-black rounded-full p-1 md:p-2'>
					<a href='https://medium.com/@patrickakhamiogu'>
						<i className='fa-brands fa-medium text-white text-2xl'></i>
					</a>
				</div>

				<div className='absolute top-1/2 left-[10%] transform hover:flip-horizontal duration-300 bg-white rounded-full p-1 md:p-2'>
					<a href='patrickakhamiogu@gmail.com'>
						<i className='fa-brands fa-google text-red-400 text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div className='absolute top-[14%] left-1/3 transform hover:flip-horizontal duration-300 bg-blue-500 rounded-full p-1 md:p-2'>
					<a href='https://www.facebook.com/patrick.akhamiogu'>
						<i className='fa-brands fa-facebook text-white text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div className='absolute top-2/3 left-[84%] md:left-[71%] transform hover:animate-bounce bg-sky-500 rounded-full p-1 md:p-2'>
					<a href='https://twitter.com/Trizzi_ric'>
						<i className='fa-brands fa-twitter text-white text-2xl md:text-3xl'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
