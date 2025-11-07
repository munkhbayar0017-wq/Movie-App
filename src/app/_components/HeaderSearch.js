// "use client";

// import { MovieCard } from "./MovieCard";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import SearchIcon from "../_Icons/SearchIcon";
// import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";
// import { LoadingSearchResult } from "../_features/skeletons/LoadingSearchResult";

// export const HeaderSearch = () => {
//   const [headerSearchData, setHeaderSearchData] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const headerSearchDataList = async () => {
//     setLoading(true);
//     const headerSearchDataEndpoint = `${BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=1`;
//     const headerSearchDataResponse = await fetch(headerSearchDataEndpoint, {
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await headerSearchDataResponse.json();
//     setHeaderSearchData(data.results);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };

//   useEffect(() => {
//     headerSearchDataList();
//   }, [searchValue]);

//   const handleClickSeeAllResultsButton = () => {
//     router.push(`/seeAllResults/${searchValue}`);
//   };

//   return (
//     <div className="relative group">
//       <div className="flex gap-2 items-center pl-[12px] w-[379px] h-[36px] border border-[#E4E4E7] rounded-md">
//         <SearchIcon />
//         <input
//           placeholder="Search.."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleClickSeeAllResultsButton();
//             }
//           }}
//           className="border-none outline-none w-full"
//         />
//       </div>

//       {searchValue && (
//         <div
//           className="
//           absolute z-50 bg-white rounded-lg border border-[#E4E4E7] mt-1 w-[577px]
//           opacity-0 invisible
//           group-hover:opacity-100 group-hover:visible
//           transition-all duration-300
//         "
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-[128px]">
//               <LoadingSearchResult />
//             </div>
//           ) : headerSearchData.length === 0 ? (
//             <div className="flex justify-center items-center h-[95px]">
//               No results found.
//             </div>
//           ) : (
//             <>
//               {headerSearchData.slice(0, 5).map((movie) => (
//                 <MovieCard
//                   key={movie.id}
//                   direction="horizontal"
//                   year={movie.release_date?.substring(0, 4)}
//                   movieId={movie.id}
//                   title={movie.title}
//                   rating={movie.vote_average}
//                   image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//                 />
//               ))}

//               <button
//                 className="text-sm font-medium leading-[20px] py-[8px] px-[16px] cursor-pointer w-full text-left hover:bg-gray-100"
//                 onClick={() => router.push(`/seeAllResults/${searchValue}`)}
//               >
//                 See all results for &quot;{searchValue}&quot;
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const headerSearchDataList = async () => {
    if (!searchValue.trim()) {
      setHeaderSearchData([]);
      return;
    }
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
    const debounceTimer = setTimeout(() => {
      headerSearchDataList();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  const handleClickSeeAllResultsButton = () => {
    if (searchValue.trim()) {
      router.push(`/seeAllResults/${searchValue}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full sm:w-auto">
      {/* Search Input */}
      <div className="flex gap-2 items-center pl-3 w-full sm:w-[300px] md:w-[350px] lg:w-[379px] h-[36px] border border-[#E4E4E7] dark:border-gray-700 rounded-md bg-white dark:bg-gray-800">
        <SearchIcon className="w-4 h-4 shrink-0 text-gray-500 dark:text-gray-400" />
        <input
          placeholder="Search.."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            // Delay to allow clicking on results
            setTimeout(() => setIsOpen(false), 200);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClickSeeAllResultsButton();
            }
            if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
          className="border-none outline-none w-full bg-transparent text-[#09090B] dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
      </div>

      {/* Search Results Dropdown */}
      {searchValue && isOpen && (
        <div
          className="
          absolute z-50 bg-white dark:bg-gray-800 rounded-lg border border-[#E4E4E7] dark:border-gray-700 
          mt-1 
          w-full sm:w-[400px] md:w-[500px] lg:w-[577px]
          left-0 sm:left-auto sm:right-0
          max-h-[70vh] overflow-y-auto
          shadow-lg
          opacity-100 visible
          transition-all duration-200
        "
        >
          {loading ? (
            <div className="flex justify-center items-center h-[128px]">
              <LoadingSearchResult />
            </div>
          ) : headerSearchData.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-[95px] text-[#71717A] dark:text-gray-400 text-sm">
              <p>No results found for &quot;{searchValue}&quot;</p>
            </div>
          ) : (
            <>
              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto">
                {headerSearchData.slice(0, 5).map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      router.push(`/moviesDetails/${movie.id}`);
                      setIsOpen(false);
                    }}
                  >
                    <MovieCard
                      direction="horizontal"
                      year={movie.release_date?.substring(0, 4)}
                      movieId={movie.id}
                      title={movie.title}
                      rating={Math.round(movie.vote_average * 10) / 10}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                  </div>
                ))}
              </div>

              {/* See All Button */}
              <button
                className="text-sm font-medium leading-[20px] py-3 px-4 cursor-pointer w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 border-t border-[#E4E4E7] dark:border-gray-700 text-[#09090B] dark:text-white transition-colors sticky bottom-0 bg-white dark:bg-gray-800"
                onClick={handleClickSeeAllResultsButton}
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
