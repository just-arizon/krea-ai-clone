import { useEffect, RefObject } from 'react';

export default function useIntersectionObserver(
  ref: RefObject<Element>,
  onIntersect: () => void,
  rootMargin = '400px'
) {
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersect(),
      { rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, onIntersect, rootMargin]);
}