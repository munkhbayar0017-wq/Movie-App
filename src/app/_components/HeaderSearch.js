"use client";

import { MovieCard } from "./MovieCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "../_Icons/SearchIcon";
import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";
import { LoadingSearchResult } from "../_features/skeletons/LoadingSearchResult";

export const HeaderSearch = () => {
  const [headerSearchData, setHeaderSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const headerSearchDataList = async () => {
    setLoading(true);
    const headerSearchDataEndpoint = `${BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=1`;
    const headerSearchDataResponse = await fetch(headerSearchDataEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await headerSearchDataResponse.json();
    setHeaderSearchData(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    headerSearchDataList();
  }, [searchValue]);

  const handleClickSeeAllResultsButton = () => {
    router.push(`/seeAllResults/${searchValue}`);
  };

  return (
    <div className="relative group">
      <div className="flex gap-2 items-center pl-[12px] w-[379px] h-[36px] border border-[#E4E4E7] rounded-md">
        <SearchIcon />
        <input
          placeholder="Search.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClickSeeAllResultsButton();
            }
          }}
          className="border-none outline-none w-full"
        />
      </div>

      {searchValue && (
        <div
          className="
          absolute z-50 bg-white rounded-lg border border-[#E4E4E7] mt-1 w-[577px]
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-300
        "
        >
          {loading ? (
            <div className="flex justify-center items-center h-[128px]">
              <LoadingSearchResult />
            </div>
          ) : headerSearchData.length === 0 ? (
            <div className="flex justify-center items-center h-[95px]">
              No results found.
            </div>
          ) : (
            <>
              {headerSearchData.slice(0, 5).map((movie) => (
                <MovieCard
                  key={movie.id}
                  direction="horizontal"
                  year={movie.release_date?.substring(0, 4)}
                  movieId={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              ))}

              <button
                className="text-sm font-medium leading-[20px] py-[8px] px-[16px] cursor-pointer w-full text-left hover:bg-gray-100"
                onClick={() => router.push(`/seeAllResults/${searchValue}`)}
              >
                See all results for &quot;{searchValue}&quot;
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
