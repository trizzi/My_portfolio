import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from '../components/projects/Projects';
import { ThemeContextProvider } from '../context/ThemeContext';

// Mock the IntersectionObserver
beforeEach(() => {
	window.IntersectionObserver = jest.fn(function () {
		this.observe = jest.fn();
		this.disconnect = jest.fn();
		this.unobserve = jest.fn();
	});
});

// Mock the projects data
jest.mock('../components/projects/projects.json', () => [
	{ id: 1, title: 'Project 1', description: 'Description 1' },
	{ id: 2, title: 'Project 2', description: 'Description 2' },
	{ id: 3, title: 'Project 3', description: 'Description 3' },
]);

test('renders Projects section with correct content', () => {
	const { container } = render(
		<ThemeContextProvider>
			<Projects />
		</ThemeContextProvider>,
	);

	// Check if the projects section is rendered
	const projectsSection = screen.getByTestId('project-section');
	expect(projectsSection).toBeInTheDocument();

	// Check if the project items are rendered with the correct data
	const projectTitles = screen.getAllByRole('heading', { level: 3 }); // Assuming project titles are rendered as h3 elements
	expect(projectTitles).toHaveLength(3); // Assuming there are three projects

	// const projectDescriptions = screen.getAllByText(/Description/i);
	// // Matches any text containing "Description"
	// expect(projectDescriptions).toHaveLength(3); // Assuming there are three projects

	expect(container).toMatchSnapshot();
});
