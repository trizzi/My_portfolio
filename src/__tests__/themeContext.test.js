import React from 'react';
import { render, screen } from '@testing-library/react';
import {
	ThemeContextProvider,
	useTheme,
	ThemeContext,
} from '../context/ThemeContext';

describe('ThemeContextProvider', () => {
	test('provides theme values through context', () => {
		const TestComponent = () => {
			const { theme } = useTheme();
			return <div>{JSON.stringify(theme)}</div>;
		};

		render(
			<ThemeContextProvider>
				<TestComponent />
			</ThemeContextProvider>,
		);

		const themeValue = screen.getByText(/"primary":/i).textContent;

		expect(JSON.parse(themeValue)).toStrictEqual({
			primary: { purple: '#9932CC' },
			secondary: { grey: '#eee' },
			backgroundcolor: { primary: '000000' },
			textcolor: { light: '#ffffff', dark: '#222222', black: '#000000' },
			transparent: 'transparent',
			current: 'inherit',
		});
	});
});
