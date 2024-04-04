import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeContextProvider } from '../context/ThemeContext';

import BookAppointment from '../components/contact/BookAppointment';

test('renders BookAppointment component with Calendly inline widget', () => {
	// Render the BookAppointment component
	const { getByTestId } = render(
		<ThemeContextProvider>
			<BookAppointment />
		</ThemeContextProvider>,
	);

	// Find the Calendly inline widget by its test ID
	const calendlyWidget = getByTestId('calendly-widget');

	// Assert that the Calendly inline widget is present
	expect(calendlyWidget).toBeInTheDocument();

	expect(getByTestId).toMatchSnapshot();
});
