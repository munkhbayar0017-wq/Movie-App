"use client";

import { useRouter } from "next/navigation";
import StarIcon from "../_Icons/StarIcon";
import SeeMoreIcon from "../_Icons/SeeMoreIcon";
import MiniStarIcon from "../_Icons/MiniStarIcon";

export const MovieCard = ({
  rating,
  title,
  image,
  movieId,
  direction,
  year,
}) => {
  const router = useRouter();

  const handleClickMovieCard = () => {
    router.push(`/moviesDetails/${movieId}`);
  };

  if (direction === "horizontal") {
    return (
      <div onClick={handleClickMovieCard} className="cursor-pointer">
        <div className="flex gap-4 w-full p-2">
          <div
            className="relative w-[67px] h-[100px] bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 hover:bg-black/20 transition-colors duration-300 ease-in-out"></div>
          </div>
          <div className="flex flex-col gap-3 w-[454px] h-[99px]">
            <div>
              <p className="font-semibold truncate text-[#09090B] text-xl tracking-[-0.5px] drop-shadow-lg">
                {title}
              </p>
              <div className="text-[#09090B] flex items-center gap-1">
                <MiniStarIcon />
                <p className="font-medium text-sm flex items-center gap-1">
                  {rating}
                  <span className="text-xs font-normal text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center justify-center leading-[20px] text-sm font-medium ">
                {String(year).substring(0, 4)}
              </div>
              <button className="w-[120px] h-[36px] flex items-center justify-center gap-2 px-16px cursor-pointer ">
                <p className="text-sm font-medium text-[#09090B]">See more</p>
                <SeeMoreIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-100% h-[1px] border border-[#E4E4E7] m-2"></div>
      </div>
    );
  }
  const rate = Math.round(rating * 10) / 10;
  if (direction === "min") {
    return (
      <div onClick={handleClickMovieCard} className="cursor-pointer">
        <div
          className="w-[165px] h-[244px] bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-full h-full overflow-hidden rounded-t-lg hover:bg-black/20 transition-colors duration-300 ease-in-out"></div>
        </div>
        <div className="w-[165px] h-[87px] bg-[#F4F4F5] rounded-b-lg px-2 py-1">
          <div className="flex items-center gap-1">
            <StarIcon />
            <p className="text-[#09090B] font-inter text-[14px] font-medium leading-[20px]">
              {rate}
              <span className="text-[#71717A] font-inter text-[12px] font-normal leading-[16px]">
                /10
              </span>
            </p>
          </div>
          <p className="overflow-hidden text-[#09090B] text-ellipsis  font-inter text-[16px] font-normal leading-[28px] line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div onClick={handleClickMovieCard} className="cursor-pointer">
      <div
        className="w-[230px] h-[340px] bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-full h-full overflow-hidden rounded-t-lg hover:bg-black/20 transition-colors duration-300 ease-in-out"></div>
      </div>
      <div className="w-[230px] h-[95px] bg-[#F4F4F5] rounded-b-lg p-2">
        <div className="flex items-center gap-1">
          <StarIcon />
          <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
            {rate}
            <span className="text-base font-normal text-[#71717A]">/10</span>
          </p>
        </div>
        <p className=" text-lg text-[#09090B] text-ellipsis font-normal leading-[28px] p-1 line-clamp-2 overflow-hidden">
          {title}
        </p>
      </div>
    </div>
  );
};
