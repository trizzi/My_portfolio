import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookAppointment = () => {
	return (
		<div
			className='bg-black h-[100vh]'
			data-testid='calendly-widget'>
			<InlineWidget url='https://calendly.com/patrickakhamiogu' />
		</div>
	);
};

export default BookAppointment;
