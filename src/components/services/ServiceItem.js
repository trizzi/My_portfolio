import React from 'react';

const ServiceItem = ({ service: { image, name, text, heading } }) => {
	return (
		<div className='w-full mt-10 lg:mt-0 mr-6 lg:mr-0 md:w-2/5 lg:w-1/4 rounded-xl overflow-hidden shadow-xl bg-white'>
			{/* <img src={image} alt='' className="w-full" /> */}

			<div className='p-5 xl:px-10'>
				<h1>{heading}</h1>
				<h3 className='font-bold text-xl py-5'>{name}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ServiceItem;
