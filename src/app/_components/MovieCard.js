"use client";

import { useRouter } from "next/navigation";
import StarIcon from "../_Icons/StarIcon";
import SeeMoreIcon from "../_Icons/SeeMoreIcon";
import MiniStarIcon from "../_Icons/MiniStarIcon";

export const MovieCard = ({ rating, title, image, movieId, direction }) => {
  const router = useRouter();

  const handleClickMovieCard = () => {
    router.push(`/moviesDetails/${movieId}`);
  };

  if (direction === "horizontal") {
    return (
      <div
        onClick={handleClickMovieCard}
        className="cursor-pointer flex gap-4 w-[553px] p-2"
      >
        <div
          className="relative w-[67px] h-[100px] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 hover:bg-black/20 transition-colors duration-300 ease-in-out"></div>
        </div>

        <div className="flex flex-col gap-3 w-[454px] h-[99px]">
          <div>
            <p className="font-semibold text-[#09090B] text-xl tracking-[-0.5px] drop-shadow-lg">
              {title}
            </p>
            <div className="text-[#09090B] flex items-center gap-1">
              <MiniStarIcon />
              <p className="font-medium text-sm flex items-center gap-1">
                {rating}
                <span className="text-xs font-normal text-[#71717A]">/10</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center text-sm font-medium ">
              2024
            </div>
            <button className="w-[120px] h-[36px] flex items-center justify-center gap-2 px-16px cursor-pointer rounded-lg hover:bg-black/5 transition-colors duration-300 ease-in-out">
              <p className="text-sm font-medium text-[#09090B]">See more</p>
              <SeeMoreIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
  console.log("IMAGE URL:", image);
  const rate = Math.round(rating * 10) / 10;
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
        <p className="h-[56px] w-[230px] text-lg font-normal leading-[28px] p-1">
          {title}
        </p>
      </div>
    </div>
  );
};
