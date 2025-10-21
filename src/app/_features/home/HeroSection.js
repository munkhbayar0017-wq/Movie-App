"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const heroSlides = [
    { id: 1, img: "/HeroImage.jpg", title: "New Adventure Awaits" },
  ];

  return (
    <section className="w-full max-w-[1440px] h-[600px] relative mt-[24px] mx-auto px-4">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="w-full h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1440px) 100vw, 1440px"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 bg-white/70 hover:bg-white" />
        <CarouselNext className="right-6 bg-white/70 hover:bg-white" />
        <CarouselDots className="bottom-6" />
      </Carousel>
    </section>
  );
};
