import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '../components/loading/Loading';
import { ThemeContextProvider } from '../context/ThemeContext';

test('renders loading component with correct styles', () => {
	// Render the Loading component wrapped in ThemeContextProvider
	const { container } = render(
		<ThemeContextProvider>
			<Loading />
		</ThemeContextProvider>,
	);

	// Check if the loading container is rendered
	const loadingContainer = document.querySelector('.container');
	expect(loadingContainer).toBeInTheDocument();

	// Check if the loading spinner is rendered
	const loadingSpinner = document.querySelector('.animate-spin');
	expect(loadingSpinner).toBeInTheDocument();

	expect(container).toMatchSnapshot();
});
