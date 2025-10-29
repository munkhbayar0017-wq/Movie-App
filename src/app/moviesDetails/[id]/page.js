"use client";

import StarIcon from "@/app/_Icons/StarIcon";
import { Footer } from "../../_features/Footer";
import { Header } from "../../_features/Header";
import PlayIcon from "@/app/_Icons/PlayIcon";
import { Badge } from "@/components/ui/badge";
import { MovieCard } from "@/app/_components/MovieCard";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieCrew from "@/app/_features/MovieCrew";
import MoreLikeThis from "@/app/_features/MoreLikeThis";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

const Page = () => {
  const [movieDetailsData, setMovieDetailsData] = useState({});
  const { id } = useParams();

  const movieDetailsDataList = async () => {
    const movieDetailsEndpoint = `${BASE_URL}/movie/${id}?language=en-US`;
    const movieDetailsResponse = await fetch(movieDetailsEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await movieDetailsResponse.json();
    setMovieDetailsData(data);
  };

  useEffect(() => {
    movieDetailsDataList();
  }, [id]);

  let time = movieDetailsData.runtime || 0;
  var hours = Math.floor(time / 60);
  var minutes = time % 60;

  let budget = Math.floor(movieDetailsData.revenue / 100000);
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-6 pt-[52px]">
        <div className="flex w-[1080px] h-[72px] justify-between">
          <div>
            <p className="text-4xl font-bold leading-[40px]">
              {movieDetailsData.title}
            </p>
            <p className="text-lg font-normal leading-[28px]">
              {movieDetailsData.release_date} · PG · {hours}h {minutes}m
            </p>
          </div>
          <div>
            <p className="text-xs font-medium leading-[16px]">Rating</p>
            <div className="text-[#FFFFFF] flex items-center gap-1">
              <StarIcon />
              <div>
                <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
                  {movieDetailsData.vote_average}
                  <span className="text-base font-normal text-[#71717A]">
                    /10
                  </span>
                </p>
                <p className="text-base font-normal text-[#71717A]">
                  {budget}k
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div
            className="w-[290px] h-[428px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetailsData.poster_path})`,
            }}
          ></div>
          <div
            className="w-[760px] h-[428px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetailsData.backdrop_path})`,
            }}
          >
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
        <div className="flex gap-3">
          {movieDetailsData.genres?.map((genres) => {
            return (
              <Badge
                key={genres.id}
                variant="secondary"
                className="w-min h-min rounded-full bg-background border border-[#E4E4E7] flex"
              >
                {genres.name}
              </Badge>
            );
          })}
        </div>

        <p className="text-base font-normal leading-[24px] h-fit">
          {movieDetailsData.overview}
        </p>
        <MovieCrew />
      </div>
      <MoreLikeThis />
      <Footer />
    </div>
  );
};
export default Page;
