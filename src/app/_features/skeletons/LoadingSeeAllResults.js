import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSeeAllResults() {
  return (
    <div className="flex flex-col gap-[32px] items-center">
      <div className="flex flex-col gap-8 pt-[52px] items-center">
        {/* Title */}
        <div className="w-[1280px] h-[36px] flex justify-between items-center">
          <Skeleton className="w-[150px] h-[32px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        </div>

        <div className="flex gap-7 w-full">
          {/* Left column (movies grid) */}
          <div className="flex flex-col gap-8">
            <Skeleton className="w-[300px] h-[24px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <div className="grid grid-cols-4 gap-12">
              {Array.from({ length: 20 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-[165px] h-[331px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex gap-3 mt-8 pl-[600px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-[36px] h-[36px] rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-auto border border-[#E4E4E7] m-4 "></div>

          {/* Right column (genres list) */}
          <div className="w-[387px] flex flex-col gap-4">
            <Skeleton className="w-[120px] h-[28px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <Skeleton className="w-[250px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            <div className="border-b h-[16.5px] w-full"></div>

            <div className="flex flex-wrap gap-4 mt-2">
              <Skeleton className="w-[70px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[93px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[92px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[81px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[68px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[111px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[70px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[70px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[78px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[78px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[70px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[70px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[80px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[87px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[112px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[87px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[75px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[56px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
              <Skeleton className="w-[82px] h-[20px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
