"use client";

import StarIcon from "@/app/_Icons/StarIcon";
import { Footer } from "../../_features/Footer";
import { Header } from "../../_features/Header";
import PlayIcon from "@/app/_Icons/PlayIcon";
import { Badge } from "@/components/ui/badge";
import { MovieCard } from "@/app/_components/MovieCard";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

const Page = () => {
  const [movieDetailsData, setMovieDetailsData] = useState([]);
  const { movieId } = useParams();
  const MovieDetailsDataList = async () => {
    const MovieDetailsEndpoint = `${BASE_URL}/movie/${movieId}?language=en-US`;
    const MovieDetailsResponse = await fetch(MovieDetailsEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await MovieDetailsResponse.json();
    setMovieDetailsData(data.results);
  };
  useEffect(() => {
    MovieDetailsDataList();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-6 pt-[52px]">
        <div className="flex w-[1080px] h-[72px] justify-between">
          <div>
            <p className="text-4xl font-bold leading-[40px]">
              {movieDetailsData?.title}
            </p>
            <p className="text-lg font-normal leading-[28px]">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>
          <div>
            <p className="text-xs font-medium leading-[16px]">Rating</p>
            <div className="text-[#FFFFFF] flex items-center gap-1">
              <StarIcon />
              <div>
                <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
                  6.9
                  <span className="text-base font-normal text-[#71717A]">
                    /10
                  </span>
                </p>
                <p className="text-base font-normal text-[#71717A]">37k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-[290px] h-[428px] bg-[url('/PulpFiction.jpg')] bg-cover bg-center"></div>
          <div className="w-[760px] h-[428px] bg-[url('/HeroImage.jpg')] bg-cover bg-center relative">
            <div className="flex gap-3 justify-center items-center absolute left-6 top-[364px]">
              <button className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center">
                <PlayIcon />
              </button>
              <p className="text-[#FFFFFF] text-base font-normal">
                Play trailer
              </p>
              <p className="text-[#FFFFFF] text-base font-normal">2:35</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1080px] h-[271px] flex flex-col gap-5 pt-8">
        <Badge
          variant="secondary"
          className="w-min h-min rounded-full bg-background border border-[#E4E4E7]"
        >
          Fairy tale
        </Badge>
        <p className="text-base font-normal leading-[24px] h-[48px]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-[53px]">
            <p className="w-[64px] text-base font-bold leading-[28px]">
              Director
            </p>
            <p>Jon M. Chu</p>
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-[53px]">
            <p className="w-[64px] text-base font-bold leading-[28px]">
              Writers
            </p>
            <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-[53px]">
            <p className="w-[64px] text-base font-bold leading-[28px]">Stars</p>
            <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 px-[32px]">
        {movieDetailsData.slice(0, 5).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Page;
