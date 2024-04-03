import React from 'react';
import BlogItem from './BlogItem';
import blogLogo from '../../assets/about_button.svg';
import blogs from './blog.json';

const Blogs = () => {
	return (
		<div
			name='section5'
			data-testid='blog-section'
			className='bg-black px-4 py-10'>
			<div className='container-xl lg:container m-auto'>
				<div className='flex justify-center'>
					<img
						src={blogLogo}
						alt='blog-logo'
						className='h-24 rounded-full sm:shrink-0'
					/>
					<h1 className='text-4xl text-bold '>Blogs</h1>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{blogs.map((blog) => (
						<BlogItem
							key={blog.id}
							blog={blog}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
