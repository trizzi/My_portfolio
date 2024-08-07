import React, { useState } from 'react';
import Button from '../button/Button';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/.netlify/functions/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Form submission successful
				console.log('Form submitted successfully');
			} else {
				// Form submission failed
				console.error('Form submission failed');
			}
		} catch (error) {
			console.error('An error occurred while submitting the form:', error);
		}
	};

	return (
		<form
			name='contact'
			method='POST'
			data-netlify='true'
			className='flex flex-col items-center justify-center bg-black py-8'
			onSubmit={handleSubmit}>
			<input
				type='hidden'
				name='form-name'
				value='contact'
			/>
			<div hidden>
				<label>
					Don’t fill this out if you’re human: <input name='bot-field' />
				</label>
			</div>

			<div className='flex justify-between gap-4'>
				<label htmlFor='firstName'>
					First Name
					<input
						type='text'
						id='first_name'
						name='firstName'
						className='mb-5 block w-40 text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						value={formData.firstName}
						onChange={handleChange}
						placeholder='First Name'
					/>
				</label>
				<label htmlFor='lastName'>
					Last Name
					<input
						type='text'
						id='last_name'
						name='lastName'
						className='mb-5 block w-40 text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						value={formData.lastName}
						onChange={handleChange}
						placeholder='Last Name'
					/>
				</label>
			</div>

			<label htmlFor='email'>
				Email
				<input
					type='email'
					id='email'
					name='email'
					className='mb-5 block w-[21rem] text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					value={formData.email}
					onChange={handleChange}
					placeholder='Email'
				/>
			</label>
			<label htmlFor='message'>
				Message
				<textarea
					id='message'
					name='message'
					className='mb-5 block w-[21rem] text-black rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					value={formData.message}
					onChange={handleChange}
					placeholder='Type Message ...'
				/>
			</label>

			<Button
				text={'Send'}
				background
				type='submit'
			/>
		</form>
	);
};

export default ContactForm;
