import { renderHook, act } from '@testing-library/react';
import  useCounter  from '../sharedComponent/useCounter'; 

// 1. Create a test file called 10SolutionsPart3.test.tsx (this file)

describe('useCounter Hook - Testing with renderHook', () => {
  it('should allow customization of the initial count', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }));
    expect(result.current.count).toBe(5);
  });

  it('should allow customization of the step', () => {
    const { result } = renderHook(() => useCounter({ step: 3 }));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3); // Default initialCount is 0
  });
});