import {
  useEffect,
  useRef,
  type EffectCallback,
  type DependencyList
} from 'react';

/**
 * Similar to `useEffect`, but only executes after the first render.
 *
 * If so, further actions can be taken.
 * 
 * @hook
 */
export const useMountedEffect = (
  fn: EffectCallback,
  dependencies: DependencyList
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      fn();
    }
    isMounted.current = true;
  }, dependencies);
};
