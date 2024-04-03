import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blogs from '../components/blog/Blogs';

import { ThemeContextProvider } from '../context/ThemeContext';

// Mock the IntersectionObserver
beforeEach(() => {
	window.IntersectionObserver = jest.fn(function () {
		this.observe = jest.fn();
		this.disconnect = jest.fn();
		this.unobserve = jest.fn();
	});
});

// Mock the blog data
jest.mock('../components/blog/blog.json', () => [
	{ id: 1, title: 'Blog 1', content: 'Content 1', text: 'Text 1' },
	{ id: 2, title: 'Blog 2', content: 'Content 2', text: 'Text 2' },
	{ id: 3, title: 'Blog 3', content: 'Content 3', text: 'Text 3' },
]);

test('renders Blogs section with correct content', () => {
	const { container } = render(
		<ThemeContextProvider>
			<Blogs />
		</ThemeContextProvider>,
	);

	// Check if the Blogs section is rendered
	const blogsSection = screen.getByTestId('blog-section');
	expect(blogsSection).toBeInTheDocument();

	// Check if the blog items are rendered with the correct data
	const blogTitles = screen.getAllByRole('heading', { level: 3 }); // Assuming blog titles are rendered as h3 elements
	expect(blogTitles).toHaveLength(3); // Assuming there are three blog items

	// const blogContents = screen.getAllByText(/Content/i); // Matches any text containing "Content"
	// expect(blogContents).toHaveLength(3); // Assuming there are three blog items

	expect(container).toMatchSnapshot();
});
