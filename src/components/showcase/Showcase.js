import React from 'react';
import Button from '../button/Button';
import Text from '../../assets/Text (1).svg';

const Showcase = () => {
	return (
		<div>
			<div
				name='section1'
				className='md:container md:mx-auto justify-start items-center py-44'>
				<div className='px-12'>
					<img
						src={Text}
						alt='Intro'
					/>

					<Button>Explore</Button>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
