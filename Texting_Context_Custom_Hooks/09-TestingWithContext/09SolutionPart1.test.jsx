// 09SolutionPart1.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';
import '@testing-library/jest-dom';

// Create a Wrapper function that provides the ThemeProvider with a Light initialTheme.
function Wrapperl({ children, initialTheme = 'light' }) {
  return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}

// Create a Wrapper function that provides the ThemeProvider with a Dark initialTheme.
function Wrapperd({ children, initialTheme = 'dark' }) {
    return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
  }

// Test for light theme
describe('Testing part 1', () => {
    it('EasyButton renders with light theme', () => {
    // Render the button with the Wrapper
    render(<EasyButton>Click me</EasyButton>, { wrapper: (props) => <Wrapperl {...props} /> });
    
    // Get the button element
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Assert that the button has the correct styles for light theme
    expect(button).toHaveStyle({
        backgroundColor: 'white',
        color: 'black',
    });
    });

    it('EasyButton renders with dark theme', () => {
        // Render the button with the Wrapper
        render(<EasyButton>Click me</EasyButton>, { wrapper: (props) => <Wrapperd {...props} /> });
        
        // Get the button element
        const button = screen.getByRole('button', { name: /click me/i });
        
        // Assert that the button has the correct styles for dark theme
        expect(button).toHaveStyle({
            backgroundColor: 'black',
            color: 'white',
        });
        });
});