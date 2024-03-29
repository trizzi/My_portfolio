import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import Button from '../button/Button';

const ContactForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const myForm = e.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => navigate('/thank-you/'))
			.catch((error) => alert(error));
	};

	return (
		<form
			className='flex flex-col items-center justify-center bg-black py-8'
			name='contact v1'
			method='post'
			data-netlify='true'
			onSubmit={handleSubmit}
			netlify-honeypot='bot-field'
			data-netlify-recaptcha='true'
			netlify>
			<input
				type='hidden'
				name='form-name'
				value='contact v1'
			/>
			<div hidden>
				<label>
					Don’t fill this out if you’re human: <input name='bot-field' />
				</label>
			</div>

			<div className='flex justify-between gap-4'>
				<label htmlFor='First Name'>
					First Name
					<input
						type='text'
						id='first_name'
						name='first_name'
						className='mb-5 block w-40 text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder='First Name'
					/>
				</label>
				<label htmlFor='Last Name'>
					Last Name
					<input
						type='text'
						id='last_name'
						name='last_name'
						className='mb-5 block w-40 text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder='Last Name'
					/>
				</label>
			</div>

			<label htmlFor='Email'>
				Email
				<input
					type='text'
					id='email'
					name='email'
					className='mb-5 block w-[21rem] text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
			</label>
			<label htmlFor='Message'>
				Message
				<textarea
					type='text'
					id='message'
					name='message'
					className='mb-5 block w-[21rem] text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder='Type Message ...'
				/>
			</label>
			<Link>
				<Button
					text={'Send'}
					className='mt-4 text-white'
					background
					type='submit'
				/>
			</Link>
		</form>
	);
};

export default ContactForm;
