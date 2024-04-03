import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeContextProvider } from '../context/ThemeContext';
import About from '../components/about/About';

// Mock the IntersectionObserver
beforeEach(() => {
	window.IntersectionObserver = jest.fn(function () {
		this.observe = jest.fn();
		this.disconnect = jest.fn();
		this.unobserve = jest.fn();
	});
});

describe('About component', () => {
	test('renders About section with correct content', () => {
		const { container } = render(
			<ThemeContextProvider>
				<About />
			</ThemeContextProvider>,
		);

		const aboutSection = screen.getByTestId('about-section');
		expect(aboutSection).toBeInTheDocument();

		const aboutLogo = screen.getByAltText('about-logo');
		expect(aboutLogo).toBeInTheDocument();

		const aboutText = screen.getByAltText('Patrick-Akhamiogu');
		expect(aboutText).toBeInTheDocument();

		const professionalBackground = screen.getByText('Professional Background');
		expect(professionalBackground).toBeInTheDocument();

		const passionAndApproach = screen.getByText('Passion and Approach');
		expect(passionAndApproach).toBeInTheDocument();

		const hireMeButton = screen.getByText('Hire Me');
		expect(hireMeButton).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});

	test('triggers email link on email click', () => {
		const { container } = render(
			<ThemeContextProvider>
				<About />
			</ThemeContextProvider>,
		);

		const emailLink = screen.getByText('patrickakhamiogu@gmail.com');
		fireEvent.click(emailLink);

		expect(container).toMatchSnapshot();
	});
});
