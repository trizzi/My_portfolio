import React, { useState } from 'react';
import Button from '../button/Button.js';
import { useTheme } from '../../context/ThemeContext';
import FadeInUp from '../../utilities/FadeInUp.js';

const BlogItem = ({ blog: { name, image, text, link } }) => {
	const [showFullBlogText, setShowFullBlogText] = useState(false);

	const { theme } = useTheme();

	let blogText = text;
	if (!showFullBlogText) {
		blogText = blogText.substring(0, 90) + '...';
	}
	return (
		<FadeInUp className='bg-white rounded-xl relative pb-6'>
			<img
				src={image}
				alt='blog_image'
				className='h-[50%] w-full'
			/>
			<div className='p-4'>
				<h3 className='text-xl text-[#9932CC]'>{name}</h3>
			</div>
			<div className='flex-grow border-t border-[#9932CC] shadow-xl '></div>
			<div className='text-black p-4'>{blogText}</div>
			<button
				onClick={() => setShowFullBlogText((prevState) => !prevState)}
				className='text-violet-700 hover:text-violet-400 pl-4'>
				{showFullBlogText ? 'Less' : 'More'}
			</button>

			<div
				style={{ color: theme.primary }}
				className='p-4 flex justify-end'>
				<a href={link}>
					<Button
						text={'Read More'}
						className='text-black'
						background
					/>
				</a>
			</div>
		</FadeInUp>
	);
};

export default BlogItem;
