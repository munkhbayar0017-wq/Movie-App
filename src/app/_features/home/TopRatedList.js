"use client";

import { MovieCard } from "@/app/_components/MovieCard";
import SeeMoreIcon from "@/app/_Icons/SeeMoreIcon";
import { useState, useEffect } from "react";
import { LoadingMovieList } from "../skeletons/LoadingMovieList";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export const TopRatedList = () => {
  const [topRatedData, setTopRatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const TopRatedDataList = async () => {
    setLoading(true);
    const TopRatedEndpoint = `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
    const TopRatedResponse = await fetch(TopRatedEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await TopRatedResponse.json();
    setTopRatedData(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    TopRatedDataList();
  }, []);
  if (loading) {
    return <LoadingMovieList className="py=[52px]" />;
  }

  return (
    <div className="flex flex-col gap-8 py-[52px]">
      <div className="w-[1277px] h-[36px] flex justify-between items-center ">
        <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
          Top Rated
        </p>
        <button className="flex items-center justify-center gap-2 px-16px">
          <p className="text-sm font-medium text-[#09090B]">See more</p>
          <SeeMoreIcon />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8 px-[32px]">
        {topRatedData.slice(0, 10).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
