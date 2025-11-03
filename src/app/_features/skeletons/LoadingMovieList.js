import { Skeleton } from "@/components/ui/skeleton";

export function LoadingMovieList() {
  return (
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
        <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        <Skeleton className="w-[230px] h-[439px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
      </div>
    </div>
  );
}
