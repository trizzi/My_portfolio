import React from 'react';

const ServiceItem = ({ service: { image, name, text, heading } }) => {
	return (
		<div className='w-full  rounded-xl overflow-hidden shadow-xl p-5 xl:px-10  mt-10 lg:mt-0 mr-6 lg:mr-0 md:w-2/5 lg:w-1/4  bg-[#292A3C] opacity-80'>
			<div className='flex justify-between'>
				<h1 className='font-bold text-xl'>{heading}</h1>
				<img
					src={image}
					alt='service_image'
					className=' w-[64px] h-[64px]'
				/>
			</div>
			<div className='flex-grow border-t border-[#9932CC] shadow-xl'></div>

			<h3 className='py-5'>{name}</h3>
			<p>{text}</p>
		</div>
	);
};

export default ServiceItem;
