import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/contact/Contact';
import '@testing-library/jest-dom/extend-expect';

import { ThemeContextProvider } from '../context/ThemeContext';

jest.useFakeTimers();

test('renders contact component with all social media links', () => {
	const { container } = render(
		<ThemeContextProvider>
			<Contact />
		</ThemeContextProvider>,
	);

	// Check if the component renders with all social media links
	const telegramLink = document.querySelector('a[href="https://t.me/PJ923"]');
	expect(telegramLink).toBeInTheDocument();

	const linkedinLink = document.querySelector(
		'a[href="https://www.linkedin.com/in/patrick-akhamiogu-8750b6177/"]',
	);
	expect(linkedinLink).toBeInTheDocument();

	const githubLink = document.querySelector(
		'a[href="https://www.github.com/trizzi"]',
	);
	expect(githubLink).toBeInTheDocument();

	const mediumLink = document.querySelector(
		'a[href="https://medium.com/@patrickakhamiogu"]',
	);
	expect(mediumLink).toBeInTheDocument();

	const gmailLink = document.querySelector('a[href^="mailto:"]');
	expect(gmailLink).toBeInTheDocument();

	const facebookLink = document.querySelector(
		'a[href="https://www.facebook.com/patrick.akhamiogu"]',
	);
	expect(facebookLink).toBeInTheDocument();

	const twitterLink = document.querySelector(
		'a[href="https://twitter.com/Trizzi_ric"]',
	);
	expect(twitterLink).toBeInTheDocument();

	// Advance timers to trigger the visibility of each link
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);
	jest.advanceTimersByTime(1000);

	expect(container).toMatchSnapshot();

	// // Check if all links become visible after a certain timeout
	// expect(telegramLink).toHaveStyle('opacity: 1');
	// expect(linkedinLink).toHaveStyle('opacity: 1');
	// expect(githubLink).toHaveStyle('opacity: 1');
	// expect(mediumLink).toHaveStyle('opacity: 1');
	// expect(gmailLink).toHaveStyle('opacity: 1');
	// expect(facebookLink).toHaveStyle('opacity: 1');
	// expect(twitterLink).toHaveStyle('opacity: 1');
});
