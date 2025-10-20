import StarIcon from "@/app/_Icons/StarIcon";
import PlayIcon from "@/app/_Icons/PlayIcon";

export const HeroSection = ({ title, rating, description }) => {
  return (
    <div className="w-[1440px] h-[600px] bg-[url('/HeroImage.jpg')] bg-cover bg-center relative mt-[24px]">
      <div className="absolute left-[140px] bottom-[158px] w-[404px] flex flex-col gap-4">
        <div>
          <p className="text-[#FFFFFF] text-base font-normal leading-[24px]">
            Now Playing:
          </p>
          <p className="font-bold text-[#FFFFFF] text-4xl tracking-[-0.9px]">
            {title}
          </p>
          <div className="text-[#FFFFFF] flex items-center gap-1">
            <StarIcon />
            <p className="font-semibold text-lg text-[#FFFFFF] flex items-center gap-1">
              {rating}
              <span className="text-base font-normal text-[#71717A]">/10</span>
            </p>
          </div>
        </div>
        <div className="text-[#FFFFFF] text-xs font-normal">{description}</div>
        <button className="h-[40px] w-[145px] bg-[#F4F4F5] flex items-center justify-center py-2 px-4 gap-2 rounded-md text-sm font-medium text-[#18181B]">
          <PlayIcon /> Watch Trailer
        </button>
      </div>
    </div>
  );
};
