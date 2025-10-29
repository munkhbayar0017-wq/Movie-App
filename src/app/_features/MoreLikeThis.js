"use client";
import { useState, useEffect } from "react";
import { MovieCard } from "@/app/_components/MovieCard";
import { useParams } from "next/navigation";
import SeeMoreIcon from "@/app/_Icons/SeeMoreIcon";
const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

const MoreLikeThis = ({ title }) => {
  const [moreLikeThis, setMoreLikeThis] = useState([]);
  const { id } = useParams();

  const movieDetailsDataList = async () => {
    const moreLikeThisEndpoint = `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`;
    const moreLikeThisResponse = await fetch(moreLikeThisEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await moreLikeThisResponse.json();
    setMoreLikeThis(data);
  };

  useEffect(() => {
    movieDetailsDataList();
  }, [id]);

  const handleClickSeeMoreButton = () => {
    router.push(`/movies/${type}`);
  };
  return (
    <div className="flex flex-col gap-8 pt-[52px] items-center">
      <div className="w-[1277px] h-[36px] flex justify-between items-center ">
        <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
          {title}
        </p>
        <button
          className="flex items-center justify-center gap-2 px-16px"
          onClick={handleClickSeeMoreButton}
        >
          <p className="text-sm font-medium text-[#09090B]">See more</p>
          <SeeMoreIcon />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8 px-[32px]">
        {moreLikeThis.movie?.slice(0, 10).map((movie) => {
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
    </div>
  );
};
export default MoreLikeThis;
