import StarIcon from "../_Icons/StarIcon";
export const MovieCard = ({ rating, title }) => {
  return (
    <div>
      <div className="w-[230px] h-[340px] bg-[url('/PulpFiction.jpg')] bg-cover bg-center rounded-t-lg"></div>
      <div className="w-[230px] h-[95px] bg-[#F4F4F5] rounded-b-lg p-2">
        <div className="flex items-center gap-1">
          <StarIcon />
          <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
            {rating}
            <span className="text-base font-normal text-[#71717A]">/10</span>
          </p>
        </div>
        <p className="h-[56px] w-[230px] text-lg font-normal leading-[28px]">
          {title}
        </p>
      </div>
    </div>
  );
};
