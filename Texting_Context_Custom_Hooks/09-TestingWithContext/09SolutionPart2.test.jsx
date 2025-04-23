// 09SolutionPart2.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';
import '@testing-library/jest-dom';

// Create a function called renderWithProviders
function renderWithProviders(ui, { theme = 'light', ...renderOptions } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Test for light theme
describe('Testing part 1', () => {
  it('EasyButton renders with light theme', () => {
    // Render the button with the renderWithProviders function and light theme
    renderWithProviders(<EasyButton>Click me</EasyButton>, { theme: 'light' });

    // Get the button element
    const button = screen.getByRole('button', { name: /click me/i });

    // Assert that the button has the correct styles for light theme
    expect(button).toHaveStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  });
  
  // Test for dark theme
  it('EasyButton renders with dark theme', () => {
    // Render the button with the renderWithProviders function and dark theme
    renderWithProviders(<EasyButton>Click me</EasyButton>, { theme: 'dark' });

    // Get the button element
    const button = screen.getByRole('button', { name: /click me/i });

    // Assert that the button has the correct styles for dark theme
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'white',
    });
  });
});