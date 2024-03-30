import React from 'react';
import services from './services.json';
import ServiceItem from './ServiceItem';
import serviceImage from '../../assets/services_background_image_lap.svg';
import serviceLogo from '../../assets/Button (3).svg';

const Services = () => {
	return (
		<div
			name='section4'
			className='container-xl mx-auto py-10 lg:py-32'
			style={{
				backgroundImage: `url(${serviceImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div>
				<div className='flex justify-center'>
					<div>
						<img
							src={serviceLogo}
							alt='service-logo'
							className='mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
						/>
					</div>

					<h1 className='text-4xl text-bold pb-6'>Services</h1>
				</div>
			</div>
			<div className='container mx-auto p-8 md:p-20'>
				<div className='relative flex flex-wrap w-full lg:justify-center lg:space-x-6 '>
					{services.map((service) => (
						<ServiceItem
							key={service.id}
							service={service}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
