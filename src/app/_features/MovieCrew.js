"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

const MovieCrew = () => {
  const [movieCrewsData, setMovieCrewsData] = useState({
    cast: [],
    crew: [],
  });
  const { id } = useParams();

  const movieCrewsDataList = async () => {
    const movieCrewsEndpoint = `${BASE_URL}/movie/${id}/credits?language=en-US`;
    const movieCrewsResponse = await fetch(movieCrewsEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await movieCrewsResponse.json();
    setMovieCrewsData(data);
  };

  useEffect(() => {
    movieCrewsDataList();
  }, [id]);

  const director = movieCrewsData.crew.filter(
    (member) => member.job === "Director"
  );
  const writers = movieCrewsData.crew.filter(
    (member) => member.job === "Writer"
  );
  const stars = movieCrewsData.cast.slice(0, 3);

  console.log("movieCrewsData", movieCrewsData);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-base font-bold leading-[28px]">
            Director
          </p>
          <p>{director.map((d) => d.name).join(" · ") || "---"}</p>
        </div>
        <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-base font-bold leading-[28px]">Writers</p>
          <p>{writers.map((w) => w.name).join(" · ") || "---"}</p>
        </div>
        <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-base font-bold leading-[28px]">Stars</p>
          <p>{stars.map((s) => s.name).join(" · ") || "---"}</p>
        </div>
        <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
      </div>
    </div>
  );
};

export default MovieCrew;
