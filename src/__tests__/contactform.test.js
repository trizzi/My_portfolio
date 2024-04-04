import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeContextProvider } from '../context/ThemeContext';

import ContactForm from '../components/contact/ContactForm';

test('submits the form with user input', async () => {
	// Mock fetch function to simulate successful form submission
	jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true });

	// Mock console.log to capture the message
	const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

	// Render the ContactForm component
	const { getByLabelText, getByText } = render(
		<ThemeContextProvider>
			<ContactForm />
		</ThemeContextProvider>,
	);

	// Fill out the form inputs
	fireEvent.change(screen.getByPlaceholderText('First Name'), {
		target: { value: 'John' },
	});
	fireEvent.change(screen.getByPlaceholderText('Last Name'), {
		target: { value: 'Doe' },
	});
	fireEvent.change(screen.getByPlaceholderText('Email'), {
		target: { value: 'john@example.com' },
	});
	fireEvent.change(screen.getByPlaceholderText('Type Message ...'), {
		target: { value: 'Hello, this is a test message.' },
	});

	// Submit the form
	fireEvent.click(screen.getByText('Send'));

	// Wait for form submission
	await waitFor(() => {
		// Assert that form submission is successful
		expect(consoleSpy).toHaveBeenCalledWith('Form submitted successfully');
	});

	// Clean up the mock
	global.fetch.mockRestore();

	expect(getByLabelText).toMatchSnapshot();
});
