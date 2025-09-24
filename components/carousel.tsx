// components/CarouselPeek.tsx
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Img1 from "@/public/open-source.png"; 
import Image from "next/image"


type Slide = {
  img: string;
  title: string;
  desc: string;
  cta: string;
};

const slides: Slide[] = [
  {
    img: "https://s.krea.ai/announce-wan-2-2-image.webp",
    title: "WAN 2.2 Image generation",
    desc: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    cta: "Try WAN 2.2",
  },
  {
    img: Img1.src,
    title: "FLUX.1 Krea",
    desc: "We’re making the weights to our FLUX.1 Krea model open-source. Download weights, read the tech report, or generate with it in Krea Image.",
    cta: "Open model",
  },
  {
    img: "https://s.krea.ai/realtime-video-poster.webp",
    title: "Realtime Video - Open Beta",
    desc: "Our ground-breaking Realtime Video is now accessible to all paid plans. Try it in the Realtime tool.",
    cta: "Open model",
  },
  {
    img: 'https://s.krea.ai/seedream-4-announcement.webp',
    title: "Seedream 4.0",
    desc: "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
    cta: "Open model",
  },
  {
    img: 'https://s.krea.ai/rt-video-beta-announcement.webp',
    title: "Real-Time Video Generation",
    desc: "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
    cta: "Open model",
  },
  // add more slides here if you want
];

export default function CarouselPeek() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (!slide) return;
    slide.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setIndex(i);
  }, []);

  const next = () => scrollToIndex(Math.min(index + 1, slides.length - 1));
  const prev = () => scrollToIndex(Math.max(index - 1, 0));

  // keep the dot state in sync when user drags/swipes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const leftEdge = track.getBoundingClientRect().left;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(
          (child as HTMLElement).getBoundingClientRect().left - leftEdge
        );
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full">
      <section className="relative mx-auto  max-w-6xl">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 snap-x snap-mandatory scroll-smooth no-scrollbar px-1"
          style={{ scrollPaddingLeft: "0.25rem" }}
          aria-label="Featured models"
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[60%]"
            >
              <Card className="relative h-80 overflow-hidden border-0">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30"
                      >
                        AI MODEL
                      </Badge>
                    </div>
                    <div className="absolute bottom-5 left-3 right-3 flex justify-between gap-5">
                      <div className="w-2/3">
                        <p className="text-white/90 mb-1 font-bold text-sm">
                          {s.title}
                        </p>
                        <p className="text-white/70 text-xs">{s.desc}</p>
                      </div>
                      <div className="flex items-end">
                        <Button className="rounded-full bg-white text-black hover:bg-white/90 text-xs">
                          {s.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Controls */}
      <div className=" pointer-events-none h-fit absolute inset-y- left-0 right-0 px-2 mt-3 flex justify-between max-w-7xl mx-auto">
        <div className="flex-1 flex justify-end">
          {/* Dots */}
          <div className=" flex justify-center  h-full">
            <div className="flex items-center h-full gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-muted-foreground" : "bg-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center gap-3">
          <div className="flex gap-3">
            <Button
              onClick={prev}
              size="icon"
              variant="ghost"
              className="pointer-events-auto w-7 h-7 rounded-full bg-gray-100 dark:bg-[#262626] cursor-pointer"
              aria-label="Previous"
            >
              ‹
            </Button>
            <Button
              onClick={next}
              size="icon"
              variant="ghost"
              className="w-7 h-7 pointer-events-auto rounded-full bg-gray-100 dark:bg-[#262626] cursor-pointer"
              aria-label="Next"
            >
              ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
