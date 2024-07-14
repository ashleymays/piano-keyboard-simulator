import { useEffect, useRef } from 'react';

/**
 * Similar to `useEffect`, but only executes after the first render.
 *
 * If so, further actions can be taken.
 */
export const useMountedEffect = (fn: () => void, dependencies: any[]) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      fn();
    }
    isMounted.current = true;
  }, dependencies);

  return isMounted.current;
};
