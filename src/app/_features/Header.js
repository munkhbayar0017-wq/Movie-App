"use client";

import MovieZIcon from "../_Icons/MovieZIcon";
import DarkModeIcon from "../_Icons/DarkModeIcon";
import { HeaderGenre } from "./HeaderGenre";
import { useRouter } from "next/navigation";
import { HeaderSearch } from "../_components/HeaderSearch";
import { DarkMode } from "../_components/DarkMode";

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
          <HeaderSearch />
        </div>
        <DarkMode />
      </div>
    </div>
  );
};
