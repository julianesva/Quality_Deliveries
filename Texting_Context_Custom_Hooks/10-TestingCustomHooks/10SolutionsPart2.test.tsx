import React from 'react';
import { act, render } from '@testing-library/react';
import  useCounter  from '../sharedComponent/useCounter'; 

// 2. Create a TestComponent that uses the custom hook and returns null.
let result: { count: number; increment: () => void; decrement: () => void };

function TestComponent(props: { initialCount?: number; step?: number }) {
  result = useCounter(props);
  return null;
}

describe('useCounter Hook - Testing with TestComponent', () => {
  // Reset the result before each test
  beforeEach(() => {
    result = undefined as any; // Reset for each test
  });

  // 3. Use the render function to render the TestComponent.
  it('should initialize with the correct initial count', () => {
    render(<TestComponent initialCount={10} />);
    expect(result.count).toBe(10);
  });

  it('should initialize with a default initial count of 0 if not provided', () => {
    render(<TestComponent />);
    expect(result.count).toBe(0);
  });

  it('should increment the count by the specified step (default 1)', () => {
    render(<TestComponent />);
    act(() => {
      result.increment();
    });
    expect(result.count).toBe(1);
  });

  it('should increment the count by the provided step', () => {
    render(<TestComponent step={5} />);
    act(() => {
      result.increment();
    });
    expect(result.count).toBe(5);
  });

  it('should decrement the count by the specified step (default 1)', () => {
    render(<TestComponent />);
    act(() => {
      result.decrement();
    });
    expect(result.count).toBe(-1);
  });

  it('should decrement the count by the provided step', () => {
    render(<TestComponent step={3} initialCount={5} />);
    act(() => {
      result.decrement();
    });
    expect(result.count).toBe(2);
  });
});