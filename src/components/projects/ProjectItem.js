import React from 'react';
import Button from '../button/Button.js';
import { useTheme } from '../../context/ThemeContext';

const ProjectItem = ({ project: { image, name, text } }) => {
	const { theme } = useTheme();

	return (
		<div className='w-full mt-10 lg:mt-0 mr-6 lg:mr-0 md:w-2/5 lg:w-1/4 rounded-xl overflow-hidden shadow-xl bg-white'>
			<img
				src={image}
				alt='project_image'
				className='w-full'
			/>
			<div className='p-5 md:px-10 bg-[#292A3C] opacity-80'>
				<h3 className='font-bold text-xl py-5'>{name}</h3>
				<p>{text}</p>

				<span
					className='whitespace-nowrap flex items-center pt-5'
					style={{ color: theme.primary }}>
					<Button
						text={'Explore'}
						className='text-white'
						background
					/>
				</span>
			</div>
		</div>
	);
};

export default ProjectItem;
