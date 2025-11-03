"use client";

import MovieZIcon from "../_Icons/MovieZIcon";
import SearchIcon from "../_Icons/SearchIcon";
import DarkModeIcon from "../_Icons/DarkModeIcon";
import { HeaderGenre } from "./HeaderGenre";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const handleClickMovieZButton = () => {
    router.push(`/`);
  };

  return (
    <div className=" w-[1440px] h-[59px] flex items-center justify-center py-4">
      <div className=" w-[1280px] h-auto flex justify-between items-center">
        <div
          className="flex gap-2  items-center text-[#4338CA] text-base italic font-bold leading-[20px] tracking-[0.32px] cursor-pointer"
          onClick={handleClickMovieZButton}
        >
          <MovieZIcon />
          Movie Z
        </div>
        <div className="flex gap-3 items-center">
          <HeaderGenre />
          <div className="flex gap-2 items-center pl-[12px] w-[379px]  h-[36px] border border-[#E4E4E7]  rounded-md">
            <SearchIcon />
            <input placeholder="Search.." />
          </div>
        </div>
        <button className="w-[36px] h-[36px] flex items-center justify-center border border-[#E4E4E7]  rounded-md cursor-pointer">
          <DarkModeIcon />
        </button>
      </div>
    </div>
  );
};
