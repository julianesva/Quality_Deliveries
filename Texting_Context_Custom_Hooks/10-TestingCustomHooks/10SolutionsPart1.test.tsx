import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Assume your useCounter hook is in a file named useCounter.ts or useCounter.tsx
import  useCounter  from '../sharedComponent/useCounter'; // Adjust the path as needed

// 2. Create a simple function component, UseCounterHook
const UseCounterHook: React.FC = () => {
  const { count, increment, decrement } = useCounter(); // Assuming initial count is 0

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment} aria-label="increment">
        Increment
      </button>
      <button onClick={decrement} aria-label="decrement">
        Decrement
      </button>
    </div>
  );
};

// 3. Write a test that renders the UseCounterHook component and verifies its functionality
describe('useCounter Hook', () => {
  it('should start with a count of 0 and increment/decrement correctly', async () => {
    // Render the component that uses the hook
    render(<UseCounterHook />);

    // Get the counter display element
    const countElement = screen.getByText(/Counter: 0/i);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // 4. Verify the initial count
    expect(countElement).toHaveTextContent('Counter: 0');

    // Simulate clicking the increment button
    await userEvent.click(incrementButton);

    // Verify the count has incremented
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

    // Simulate clicking the increment button again
    await userEvent.click(incrementButton);

    // Verify the count has incremented again
    expect(screen.getByText(/Counter: 2/i)).toBeInTheDocument();

    // Simulate clicking the decrement button
    await userEvent.click(decrementButton);

    // Verify the count has decremented
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

    // Simulate clicking the decrement button again
    await userEvent.click(decrementButton);

    // Verify the count has decremented again
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });
});