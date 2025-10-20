import MovieZIcon from "../_Icons/MovieZIcon";
import GenreIcon from "../_Icons/GenreIcon";
import SearchIcon from "../_Icons/SearchIcon";
import DarkModeIcon from "../_Icons/DarkModeIcon";

export const Header = () => {
  return (
    <div className=" w-[1440px] h-[59px] flex items-center justify-center py-4">
      <div className=" w-[1280px] h-auto flex justify-between items-center">
        <div className="flex gap-2  items-center text-[#4338CA] text-base italic font-bold leading-[20px] tracking-[0.32px]">
          <MovieZIcon />
          Movie Z
        </div>
        <div className="flex gap-3 items-center ">
          <button className="flex gap-2 items-center justify-center rounded-md w-[97px] h-[36px] border border-[#E4E4E7] text-[#18181B] text-sm font-medium leading-[20px] ">
            <GenreIcon />
            Genre
          </button>
          <div className="flex gap-2 items-center pl-[12px] w-[379px]  h-[36px] border border-[#E4E4E7]  rounded-md">
            <SearchIcon />
            <input placeholder="Search.." />
          </div>
        </div>
        <button className="w-[36px] h-[36px] flex items-center justify-center border border-[#E4E4E7]  rounded-md">
          <DarkModeIcon />
        </button>
      </div>
    </div>
  );
};
