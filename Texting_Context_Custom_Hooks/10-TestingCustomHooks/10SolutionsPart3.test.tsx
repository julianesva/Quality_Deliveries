import React from 'react';
import { render, act } from '@testing-library/react';
import  useCounter  from '../sharedComponent/useCounter'; 

// 3. Abstract the common logic into a setup function.
function setup(props?: { initialCount?: number; step?: number }) {
  let result: { current: ReturnType<typeof useCounter> } = { current: {} as ReturnType<typeof useCounter> };

  function TestComponent() {
    result.current = useCounter(props);
    return null;
  }

  render(<TestComponent />);

  return result;
}

describe('useCounter Hook - Testing', () => {
  it('should allow customization of the initial count', () => {
    const { current } = setup({ initialCount: 5 });
    expect(current.count).toBe(5);
  });

  it('should allow customization of the step', () => {
    const { current } = setup({ step: 3 });
    act(() => {
      current.increment();
    });
    expect(current.count).toBe(3); 
  });
});