import { useState, useEffect } from 'react';

function DebounceHook(value, delay) {
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

export default DebounceHook;
