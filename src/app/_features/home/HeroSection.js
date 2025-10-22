"use client";

import StarIcon from "@/app/_Icons/StarIcon";
import PlayIcon from "@/app/_Icons/PlayIcon";
import * as React from "react";
import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LoadingHeroSection } from "../skeletons/LoadingHeroSection";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export function HeroSection() {
  const [heroSectionData, setHeroSectionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const HeroSectionDataList = async () => {
    setLoading(true);
    const HeroSectionEndpoint = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;
    const HeroSectionResponse = await fetch(HeroSectionEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await HeroSectionResponse.json();
    setHeroSectionData(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    HeroSectionDataList();
  }, []);
  if (loading) {
    return <LoadingHeroSection />;
  }
  return (
    <Carousel className="w-[1440px] h-[600px]">
      <CarouselContent>
        {heroSectionData.slice(0, 5).map((movie, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent
                  className="flex bg-amber-900 w-[1440px] h-[600px] items-center  p-6  bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie.backdrop_path}`})`,
                  }}
                >
                  <div className="left-[140px] bottom-[158px] w-[404px] flex flex-col gap-4 pl-[140px]">
                    <div>
                      <p className="text-[#FFFFFF] text-base font-normal leading-[24px]">
                        Now Playing:
                      </p>
                      <p className="font-bold text-[#FFFFFF] text-4xl tracking-[-0.9px]">
                        {movie.title}
                      </p>
                      <div className="text-[#FFFFFF] flex items-center gap-1">
                        <StarIcon />
                        <p className="font-semibold text-lg text-[#FFFFFF] flex items-center gap-1">
                          {movie.vote_average}
                          <span className="text-base font-normal text-[#71717A]">
                            /10
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-[#FFFFFF] text-xs font-normal">
                      {movie.overview}
                    </div>
                    <button className="h-[40px] w-[145px] bg-[#F4F4F5] flex items-center justify-center py-2 px-4 gap-2 rounded-md text-sm font-medium text-[#18181B]">
                      <PlayIcon /> Watch Trailer
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots />
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
