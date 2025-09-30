"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import useInfiniteImages from "@/hooks/useInfiniteImages";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { MasonrySkeleton } from "./masonryskeleton";

export function Gallery() {
  const { images, loading, hasMore, loadMore } = useInfiniteImages();
  const sentinel = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(sentinel, loadMore);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-semibold">Gallery</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Large
          </Button>
          <Button variant="ghost" size="sm">
            Pricing
          </Button>
        </div>
      </div>

      {/* Masonry gallery – identical to before */}
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Sentinel + optional spinner */}
      <div
        ref={sentinel}
        className="h-10 flex items-center justify-center mt-4"
      >
        {loading &&
          Array.from({ length: 12 }).map((_, i) => (
            <MasonrySkeleton key={`skel-${i}`}/>
          ))}
      </div>
    </section>
  );
}
