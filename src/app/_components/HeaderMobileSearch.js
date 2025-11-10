"use client";

import { useState } from "react";
import SearchIcon from "../_Icons/SearchIcon";
import { HeaderSearch } from "./HeaderSearch";
import DownIcon from "../_Icons/DownIcon";
import EscIcon from "../_Icons/EscIcon";
import { HeaderGenre } from "../_features/HeaderGenre";

export const HeaderMobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickSearchButton = () => {
    setIsOpen(true);
  };

  const handleClickEscButton = () => {
    setIsOpen(false);
  };

  const handleClickDownButton = () => {
    console.log("genre orno");
  };

  return (
    <div className="relative lg:hidden md:hidden ">
      {!isOpen && (
        <div
          className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
          onClick={handleClickSearchButton}
        >
          <SearchIcon />
        </div>
      )}

      {isOpen && (
        <div className="flex w-full h-[40px] items-center gap-2 border border-[#E4E4E7] rounded-md px-2">
          <button
            className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
            onClick={handleClickDownButton}
          >
            <DownIcon />
          </button>

          <div className="flex-1">
            <HeaderSearch />
          </div>

          <button
            className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
            onClick={handleClickEscButton}
          >
            <EscIcon />
          </button>
        </div>
      )}
    </div>
  );
};
