"use client";
import { useState, useEffect } from "react";
import { MovieCard } from "@/app/_components/MovieCard";
import { useParams } from "next/navigation";
import SeeMoreIcon from "@/app/_Icons/SeeMoreIcon";
import { useRouter } from "next/navigation";
import { ACCESS_TOKEN, BASE_URL } from "../_constants";

const MoreLikeThis = () => {
  const [moreLikeThis, setMoreLikeThis] = useState([]);
  const { id } = useParams();
  const router = useRouter();

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
    router.push(`/moreLikeThis/${id}`);
  };

  return (
    <div className="flex flex-col gap-8 pt-[52px] items-center">
      <div className="w-[1277px] h-[36px] flex justify-between items-center ">
        <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
          More like this
        </p>
        <button
          className="w-[100px] h-[36px] flex items-center justify-center gap-2 px-16px cursor-pointer rounded-lg hover:bg-black/5 transition-colors duration-300 ease-in-out"
          onClick={handleClickSeeMoreButton}
        >
          <p className="text-sm font-medium text-[#09090B]">See more</p>
          <SeeMoreIcon />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8 px-[32px]">
        {moreLikeThis.results?.slice(0, 5).map((movie) => {
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
