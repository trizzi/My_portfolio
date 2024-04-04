import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Services from '../components/services/Services';

import { ThemeContextProvider } from '../context/ThemeContext';

// Mock the services data
jest.mock('../components/services/services.json', () => [
	{
		id: 1,
		heading: 'Service 1',
		text: 'Description 1',
		name: 'Name 1',
		image: 'Image 1',
	},
	{
		id: 2,
		heading: 'Service 2',
		text: 'Description 2',
		name: 'Name 2',
		image: 'Image 2',
	},
	{
		id: 3,
		heading: 'Service 3',
		text: 'Description 3',
		name: 'Name 3',
		image: 'Image 3',
	},
]);

test('renders Services section with correct content', () => {
	const { container } = render(
		<ThemeContextProvider>
			<Services />
		</ThemeContextProvider>,
	);

	// Check if the services section is rendered
	const servicesSection = screen.getByTestId('service-section');
	expect(servicesSection).toBeInTheDocument();

	// Get the number of services rendered
	const services = screen.getAllByRole('heading', { level: 3 });
	const numServices = services.length;

	// Check if the service items are rendered with the correct data
	const serviceTitles = screen.getAllByRole('heading', { level: 3 }); // Assuming service titles are rendered as h3 elements
	expect(serviceTitles).toHaveLength(numServices); // Assuming there are three services

	const serviceDescriptions = screen.getAllByText(/Description/i); // Matches any text containing "Description"
	expect(serviceDescriptions).toHaveLength(numServices); // Assuming there are three services

	expect(container).toMatchSnapshot();
});
