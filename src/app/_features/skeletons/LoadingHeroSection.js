import { Skeleton } from "@/components/ui/skeleton";
export const LoadingHeroSection = () => {
  return (
    <Skeleton className="w-[1440px] h-[600px]  bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
  );
};
