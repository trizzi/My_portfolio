import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/button/Button';

// Mock the ThemeContext to provide a mock theme
jest.mock('../context/ThemeContext.js', () => ({
	useTheme: jest.fn(),
}));

describe('Button component', () => {
	// Mock theme values
	const mockTheme = {
		primary: {
			purple: '#6c63ff',
		},
		transparent: 'transparent',
		textcolor: {
			light: '#ffffff',
			black: '#000000',
		},
	};

	beforeEach(() => {
		// Mock the useTheme hook to return the mock theme
		useTheme.mockReturnValue({ theme: mockTheme });
	});

	test('renders button with correct styles', () => {
		render(
			<Button
				text='Click me'
				background
				size='lg'
				disable={false}
				time={2}
			/>,
		);

		// Check if the button is rendered with correct styles
		const button = screen.getByText('Click me');
		expect(button).toBeInTheDocument();
		expect(button).toHaveStyle(`
      background-color: ${mockTheme.primary.purple};
      color: ${mockTheme.textcolor.light};
      border: 2px solid ${mockTheme.primary.purple};
    `);
	});

	test('Button component matches snapshot', () => {
		const { container } = render(<Button text='Click me' />);
		expect(container).toMatchSnapshot();
	});
});
