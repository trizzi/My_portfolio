import React from 'react';
import NewwItem from './NewwItem';
import iconsData from './iconsData.json';
import contact from '../../assets/Contact.svg';

const Neww = () => {
	return (
		<div className='relative bg-black'>
			<img
				src={contact}
				alt='images'
				className='w-64 h-64 object-cover rounded-full'
			/>
			<div className='absolute bg-black'>
				{iconsData.map((item, index) => (
					<NewwItem
						key={index}
						icon={item.icon}
						iconClassName={item.iconClassName}
						position={item.position}
						transition={item.transition}
						delay={item.delay}
					/>
				))}
			</div>
		</div>
	);
};

export default Neww;
