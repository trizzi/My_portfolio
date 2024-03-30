import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import contact from '../../assets/Contact.svg';
import text from '../../assets/book_appointment.svg';
import Button from '../button/Button';

const Contact = () => {
	const [isWhatsappVisible, setIsWhatsappVisible] = useState(false);
	const [isLinkedinVisible, setIsLinkedinVisible] = useState(false);
	const [isGithubVisible, setIsGithubVisible] = useState(false);
	const [isMediumVisible, setIsMediumVisible] = useState(false);
	const [isGmailVisible, setIsGmailVisible] = useState(false);
	const [isFacebookVisible, setIsFacebookVisible] = useState(false);
	const [isTwitterVisible, setIsTwitterVisible] = useState(false);

	useEffect(() => {
		const whatsappTimeoutId = setTimeout(() => {
			setIsWhatsappVisible(true);
		}, 1000);

		return () => clearTimeout(whatsappTimeoutId);
	}, []);

	useEffect(() => {
		const linkedinTimeoutId = setTimeout(() => {
			setIsLinkedinVisible(true);
		}, 2000);

		return () => clearTimeout(linkedinTimeoutId);
	}, []);

	useEffect(() => {
		const githubTimeoutId = setTimeout(() => {
			setIsGithubVisible(true);
		}, 3000);

		return () => clearTimeout(githubTimeoutId);
	}, []);

	useEffect(() => {
		const mediumTimeoutId = setTimeout(() => {
			setIsMediumVisible(true);
		}, 4000);

		return () => clearTimeout(mediumTimeoutId);
	}, []);

	useEffect(() => {
		const gmailTimeoutId = setTimeout(() => {
			setIsGmailVisible(true);
		}, 5000);

		return () => clearTimeout(gmailTimeoutId);
	}, []);

	useEffect(() => {
		const facebookTimeoutId = setTimeout(() => {
			setIsFacebookVisible(true);
		}, 6000);

		return () => clearTimeout(facebookTimeoutId);
	}, []);

	useEffect(() => {
		const twitterTimeoutId = setTimeout(() => {
			setIsTwitterVisible(true);
		}, 7000);

		return () => clearTimeout(twitterTimeoutId);
	}, []);

	const emailAddress = 'patrickakhamiogu@gmail.com';

	const handleEmailClick = () => {
		window.location.href = `mailto:${emailAddress}`;
	};

	return (
		<div
			name='section6'
			className='flex flex-wrap md:flex-nowrap text-white w-full'>
			<div className='w-full bg-black p-12 md:p-32'>
				<img
					src={text}
					alt='Contact-me-text'
				/>
				<Link
					to='/bookappointment'
					smooth={true}
					duration={500}>
					<Button
						text={'Book Appointment'}
						background
					/>
				</Link>
			</div>
			{/* <div className='bg-black p-12 lg:p-24 w-full'>
				<div className=''>
					<InlineWidget url='https://calendly.com/patrickakhamiogu' />
				</div>
			</div> */}
			<div className='relative w-full bg-black p-12 lg:p-24'>
				<img
					src={contact}
					alt='images'
				/>
				<div
					className={`absolute top-1/4 left-[9%] transform hover:scale-110 transition-transform ${
						isWhatsappVisible ? 'opacity-100' : ''
					} transition-opacity duration-300 bg-blue-500 rounded-full p-1 md:p-2`}>
					<a href='https://t.me/pj_923'>
						<i className='fa-brands fa-telegram text-white text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-[18%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 hover:rotate-45 transition-transform ${
						isLinkedinVisible ? 'opacity-100' : ''
					} transition-opacity  duration-300 bg-blue-500 rounded-full p-1 md:p-2`}>
					<a href='https://www.linkedin.com/in/patrick-akhamiogu-8750b6177/'>
						<i className='fa-brands fa-linkedin text-white text-2xl '></i>
					</a>
				</div>

				<div
					className={`absolute top-[78%] left-[30%] transform  ${
						isGithubVisible ? 'opacity-100' : ''
					} hover:animate-bounce bg-black rounded-full p-1 md:p-2`}>
					<a href='https://www.github.com/trizzi'>
						<i className='fa-brands fa-github text-white text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-1/3 left-[84%] md:left-[71%] transform  ${
						isMediumVisible ? 'opacity-100' : ''
					} hover:animate-bounce bg-black rounded-full p-1 md:p-2`}>
					<a href='https://medium.com/@patrickakhamiogu'>
						<i className='fa-brands fa-medium text-white text-2xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-1/2 left-[10%] transform ${
						isGmailVisible ? 'opacity-100' : ''
					} hover:flip-horizontal duration-300 bg-white rounded-full p-1 md:p-2`}>
					<a
						href={`mailto:${emailAddress}`}
						onClick={handleEmailClick}>
						<i className='fa-brands fa-google text-red-400 text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-[14%] left-1/3 transform ${
						isFacebookVisible ? 'opacity-100' : ''
					} hover:flip-horizontal duration-300 bg-blue-500 rounded-full p-1 md:p-2`}>
					<a href='https://www.facebook.com/patrick.akhamiogu'>
						<i className='fa-brands fa-facebook text-white text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-2/3 left-[84%] md:left-[71%] transform  ${
						isTwitterVisible ? 'opacity-100' : ''
					} hover:animate-bounce bg-sky-500 rounded-full p-1 md:p-2`}>
					<a href='https://twitter.com/Trizzi_ric'>
						<i className='fa-brands fa-twitter text-white text-2xl md:text-3xl'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
