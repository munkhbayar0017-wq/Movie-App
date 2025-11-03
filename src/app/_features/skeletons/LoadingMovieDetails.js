"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const LoadingMovieDetails = () => {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className="w-[1080px] pt-[52px] flex justify-between mb-8">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-10 w-[400px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="h-6 w-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>

        <div className="flex flex-col gap-2 items-end">
          <Skeleton className="h-4 w-[80px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="h-6 w-[120px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>
      </div>

      <div className="flex gap-8">
        <Skeleton className="w-[290px] h-[428px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <Skeleton className="w-[760px] h-[428px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
      </div>
      <div className="flex flex-col gap-5 pt-8">
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-6 w-[100px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
            />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="w-[1080px] h-[22px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[699px] h-[22px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>
        <div>
          <div className="flex gap-[53px]">
            <Skeleton className="w-[64px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <Skeleton className="w-[137px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
        <div>
          <div className="flex gap-[53px]">
            <Skeleton className="w-[64px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <Skeleton className="w-[360px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
        <div>
          <div className="flex gap-[53px]">
            <Skeleton className="w-[64px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <Skeleton className="w-[355px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          </div>
          <div className="w-[1080px] h-[1px] border border-[#E4E4E7] m-1"></div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-[52px] items-center">
        <div className="w-[1277px] h-[36px] flex justify-between items-center">
          <Skeleton className="w-[250px] h-[32px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[165px] h-[36px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>
        <div className="grid grid-cols-5 gap-8">
          <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
          <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>
      </div>
    </div>
  );
};
