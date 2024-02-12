import React from 'react';
import Button from '../button/Button.js';
import { useTheme } from '../../context/ThemeContext';
import FadeInUp from '../../utilities/FadeInUp.js';

const ProjectItem = ({ project: { image, name, text, icon, link } }) => {
	const { theme } = useTheme();

	return (
		<FadeInUp className='w-full mt-10 lg:mt-0 lg:mr-0 md:w-2/5 lg:w-[400px]  rounded-xl overflow-hidden shadow-xl'>
			<img
				src={image}
				alt='project_image'
				className='rounded-t-lg'
			/>
			<div className='pt-5 pb-10 px-10 bg-[#292A3C] opacity-80 rounded-xl'>
				<h3 className='font-bold text-xl py-5'>{name}</h3>
				<p>{text}</p>

				<span
					className='whitespace-nowrap flex items-center pt-2'
					style={{ color: theme.primary }}>
					<a href={link}>
						<Button
							text={'Explore'}
							className='text-white'
							background
						/>
					</a>
				</span>
			</div>
		</FadeInUp>
	);
};

export default ProjectItem;
