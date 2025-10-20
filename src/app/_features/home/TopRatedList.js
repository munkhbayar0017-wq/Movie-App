import { MovieCard } from "@/app/_components/MovieCard";
import SeeMoreIcon from "@/app/_Icons/SeeMoreIcon";

export const TopRatedList = () => {
  return (
    <div className="flex flex-col gap-8 py-[52px]">
      <div className="w-[1277px] h-[36px] flex justify-between items-center ">
        <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
          Top Rated
        </p>
        <button className="flex items-center justify-center gap-2 px-16px">
          <p className="text-sm font-medium text-[#09090B]">See more</p>
          <SeeMoreIcon />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8 px-[32px]">
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
        <MovieCard title={"Pulp Fiction"} rating={"6.9"} />
      </div>
    </div>
  );
};
