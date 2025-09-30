import { cn } from '@/lib/utils';

export function MasonrySkeleton({ className }: { className?: string }) {
  /* random height so the skeleton grid looks organic */
  const h = [200, 220, 250, 280, 300, 320, 340][Math.floor(Math.random() * 7)];
  return (
    <div
      className={cn(
        'break-inside-avoid rounded-lg bg-gray-200 dark:bg-gray-800',
        'animate-pulse',
        className
      )}
      style={{ height: `${h}px` }}
    />
  );
}