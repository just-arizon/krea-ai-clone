'use client';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackToTop({ selector }: { selector: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const gallery = document.querySelector(selector);
    if (!gallery) return;

    const onScroll = () => {
      const galleryTop = gallery.getBoundingClientRect().top;
      setShow(galleryTop < 0); // gallery has passed the top edge
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [selector]);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={scrollTop}
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 dark:bg-primary"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </Button>
  );
}