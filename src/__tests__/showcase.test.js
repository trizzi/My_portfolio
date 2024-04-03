import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Showcase from '../components/showcase/Showcase';
import { ThemeContextProvider } from '../context/ThemeContext';

// Mock the IntersectionObserver
beforeEach(() => {
	window.IntersectionObserver = jest.fn(function () {
		this.observe = jest.fn();
		this.disconnect = jest.fn();
		this.unobserve = jest.fn();
	});
});

describe('Showcase component', () => {
	test('renders thumbnail', () => {
		const { container } = render(
			<ThemeContextProvider>
				<Showcase />
			</ThemeContextProvider>,
		);

		const thumbnail = screen.getByTestId('thumbnail');
		expect(thumbnail).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});

	test('triggers email link on email click', () => {
		render(
			<ThemeContextProvider>
				<Showcase />
			</ThemeContextProvider>,
		);

		const emailLink = screen.getByText('patrickakhamiogu@gmail.com');
		fireEvent.click(emailLink);

		// Add additional assertions here based on the expected behavior
	});
});
