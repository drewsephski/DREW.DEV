import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * A custom hook that observes when an element enters or exits the viewport
 * 
 * @param options - IntersectionObserver options
 * @param options.root - The element that is used as the viewport for checking visibility
 * @param options.rootMargin - Margin around the root element
 * @param options.threshold - Percentage of the target's visibility the observer's callback should be executed
 * @param options.triggerOnce - Whether to disconnect the observer after the element is visible
 * @returns [ref, isInView] - A ref to attach to the element and a boolean indicating if the element is in view
 */
export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = false,
}: IntersectionObserverOptions = {}): [RefObject<HTMLElement>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if we've already triggered once and triggerOnce is true
    if (triggerOnce && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);

        if (triggerOnce && entry.isIntersecting) {
          hasTriggered.current = true;
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isInView];
}

/**
 * A custom hook that observes when an element enters the viewport and triggers a callback
 * 
 * @param callback - Function to call when the element enters the viewport
 * @param options - IntersectionObserver options
 * @returns ref - A ref to attach to the element
 */
export function useIntersectionCallback(
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverOptions = {}
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  const callbackRef = useRef(callback);

  // Update the callback ref when the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        callbackRef.current(entry.isIntersecting);

        if (options.triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold, options.triggerOnce]);

  return ref;
}
