import { useCallback, useEffect, useState, useRef } from "react";

export const useAsync = (asyncFunction: any, immediate = true) => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    // The execute function wraps asyncFunction and
    // handles setting state for pending, value, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(() => {
      setStatus('pending');
      setValue(null);
      setError(null);

      return asyncFunction()
        .then((response: any) => {
          setValue(response);
          setStatus('success');
        })
        .catch((error: any) => {
          setError(error);
          setStatus('error');
        });
    }, [asyncFunction]);

    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [execute, immediate]);

    return { execute, status, value, error };
  };

  export const usePrevious = (value: any) => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }
