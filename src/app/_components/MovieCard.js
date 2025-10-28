"use client";

import { useRouter, useParams } from "next/navigation";
import StarIcon from "../_Icons/StarIcon";
import { useState, useEffect } from "react";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export const MovieCard = ({ rating, title, image, movieId }) => {
  const [movieCardData, setMovieCardData] = useState([]);
  const router = useRouter();
  const MovieCardDataList = async () => {
    try {
      const movieCardEndpoint = `${BASE_URL}/movie/${movieId}?language=en-US`;
      const movieCardResponse = await fetch(movieCardEndpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await movieCardResponse.json();
      setMovieCardData(data.results);
    } catch (err) {
      console.error("Failed to fetch upcoming movies:", err);
    }
  };

  useEffect(() => {
    MovieCardDataList();
  }, []);

  const handleClickMovieCard = () => {
    router.push(`/moviesDetails/${movieId}`);
  };

  return (
    <div onClick={handleClickMovieCard}>
      <div
        className="w-[230px] h-[340px] bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-[230px] h-[95px] bg-[#F4F4F5] rounded-b-lg p-2">
        <div className="flex items-center gap-1">
          <StarIcon />
          <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
            {rating}
            <span className="text-base font-normal text-[#71717A]">/10</span>
          </p>
        </div>
        <p className="h-[56px] w-[230px] text-lg font-normal leading-[28px] p-1">
          {title}
        </p>
      </div>
    </div>
  );
};
