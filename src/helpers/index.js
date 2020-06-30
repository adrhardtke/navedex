import { useState, useEffect } from 'react';

export const pxToEm = pxValue => pxValue / 16

export function DebounceHook(value, delay) {
    const [ debouncedValue, setDebounceValue ] = useState(value);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }
