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
				// height: '800px',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div>
				<div className='flex px-12 pt-8'>
					<div>
						<img
							src={serviceLogo}
							alt='service-logo'
						/>
					</div>
					<div className='pt-3'>
						<h1>Services</h1>
					</div>
				</div>
			</div>
			<div className='container mx-auto p-8 md:p-20'>
				<div className='relative flex flex-wrap w-full lg:justify-center lg:space-x-6 pt-10 md:pt-20'>
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
