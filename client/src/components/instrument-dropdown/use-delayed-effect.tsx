import { useEffect } from 'react';
import type { EffectCallback, DependencyList } from 'react';

/**
 * Workaround for showing a toast when the page loads.
 *
 * Need to call `setTimeout` on the effect callback in order for toasts to appear on init.
 *
 * @link https://github.com/timolins/react-hot-toast/pull/251
 *
 * @todo Remove when the issue is resolved
 */
export const useDelayedEffect = (
  fn: EffectCallback,
  dependencies: DependencyList
) => {
  useEffect(() => {
    const timer = setTimeout(() => fn());

    return () => clearTimeout(timer);
  }, dependencies);
};
