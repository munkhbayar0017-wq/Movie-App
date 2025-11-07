"use client";

import StarIcon from "@/app/_Icons/StarIcon";
import PlayIcon from "@/app/_Icons/PlayIcon";
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LoadingHeroSection } from "../skeletons/LoadingHeroSection";
import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function HeroSection() {
  const [heroSectionData, setHeroSectionData] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [activeTrailerId, setActiveTrailerId] = useState(null);
  const [loading, setLoading] = useState(false);

  const HeroSectionDataList = async () => {
    setLoading(true);
    const res = await fetch(
      `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setHeroSectionData(data.results);
    setTimeout(() => setLoading(false), 1500);
  };

  const fetchTrailer = async (movieId) => {
    const res = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    const trailer = data.results?.find((v) => v.type === "Trailer");
    if (trailer) {
      setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      setActiveTrailerId(movieId);
    }
  };

  useEffect(() => {
    HeroSectionDataList();
  }, []);

  if (loading) return <LoadingHeroSection />;

  return (
    <div className="w-full">
      <Carousel className="w-full max-w-[1440px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <CarouselContent>
          {heroSectionData.slice(0, 5).map((movie, index) => {
            const rate = Math.floor(movie.vote_average * 10) / 10;
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent
                    className="flex w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] items-center justify-center p-4 sm:p-6 bg-center bg-cover relative"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                  >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="relative z-10 w-full max-w-[404px] flex flex-col gap-2 sm:gap-3 md:gap-4 px-4 sm:px-8 md:px-12 lg:pl-[140px]">
                      <div>
                        <p className="text-white text-xs sm:text-sm md:text-base font-normal leading-[24px]">
                          Now Playing:
                        </p>
                        <p className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-0.9px] drop-shadow-lg line-clamp-2">
                          {movie.title}
                        </p>
                        <div className="text-white flex items-center gap-1">
                          <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <p className="font-semibold text-base sm:text-lg flex items-center gap-1">
                            {rate}
                            <span className="text-sm sm:text-base font-normal text-[#71717A]">
                              /10
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="text-white/80 text-xs sm:text-sm font-normal line-clamp-2 sm:line-clamp-3">
                        {movie.overview}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => fetchTrailer(movie.id)}
                            className="h-[36px] sm:h-[40px] w-[130px] sm:w-[145px] bg-[#F4F4F5] hover:bg-white transition flex items-center justify-center py-2 px-3 sm:px-4 gap-1 sm:gap-2 rounded-md text-xs sm:text-sm font-medium text-[#18181B] cursor-pointer shadow-md"
                          >
                            <PlayIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">
                              Watch Trailer
                            </span>
                            <span className="sm:hidden">Trailer</span>
                          </button>
                        </DialogTrigger>

                        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[997px] bg-transparent border-none shadow-none flex justify-center items-center p-4">
                          <VisuallyHidden>
                            <DialogTitle>{movie.title} Trailer</DialogTitle>
                          </VisuallyHidden>
                          {activeTrailerId === movie.id && trailerUrl ? (
                            <iframe
                              src={trailerUrl}
                              allowFullScreen
                              title="Movie Trailer"
                              className="w-full aspect-video max-w-[997px] rounded-lg sm:rounded-xl shadow-2xl"
                            />
                          ) : (
                            <p className="text-white">Loading trailer...</p>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselDots className="hidden sm:flex" />
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
// "use client";

// import StarIcon from "@/app/_Icons/StarIcon";
// import PlayIcon from "@/app/_Icons/PlayIcon";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselDots,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { LoadingHeroSection } from "../skeletons/LoadingHeroSection";
// import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";

// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// export function HeroSection() {
//   const [heroSectionData, setHeroSectionData] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState(null);
//   const [activeTrailerId, setActiveTrailerId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const HeroSectionDataList = async () => {
//     setLoading(true);
//     const res = await fetch(
//       `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await res.json();
//     setHeroSectionData(data.results);
//     setTimeout(() => setLoading(false), 1500);
//   };

//   const fetchTrailer = async (movieId) => {
//     const res = await fetch(
//       `${BASE_URL}/movie/${movieId}/videos?language=en-US`,
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await res.json();
//     const trailer = data.results?.find((v) => v.type === "Trailer");
//     if (trailer) {
//       setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
//       setActiveTrailerId(movieId);
//     }
//   };

//   useEffect(() => {
//     HeroSectionDataList();
//   }, []);

//   if (loading) return <LoadingHeroSection />;

//   return (
//     <div>
//       <Carousel className="w-[1440px] h-[600px]">
//         <CarouselContent>
//           {heroSectionData.slice(0, 5).map((movie, index) => {
//             const rate = Math.floor(movie.vote_average * 10) / 10;
//             return (
//               <CarouselItem key={index}>
//                 <Card>
//                   <CardContent
//                     className="flex w-[1440px] h-[600px] items-center p-6 bg-center bg-cover"
//                     style={{
//                       backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
//                     }}
//                   >
//                     <div className="left-[140px] bottom-[158px] w-[404px] flex flex-col gap-4 pl-[140px]">
//                       <div>
//                         <p className="text-white text-base font-normal leading-[24px]">
//                           Now Playing:
//                         </p>
//                         <p className="font-bold text-white text-4xl tracking-[-0.9px] drop-shadow-lg">
//                           {movie.title}
//                         </p>
//                         <div className="text-white flex items-center gap-1">
//                           <StarIcon />
//                           <p className="font-semibold text-lg flex items-center gap-1">
//                             {rate}
//                             <span className="text-base font-normal text-[#71717A]">
//                               /10
//                             </span>
//                           </p>
//                         </div>
//                       </div>

//                       <div className="text-white/80 text-xs font-normal line-clamp-3">
//                         {movie.overview}
//                       </div>
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <button
//                             onClick={() => fetchTrailer(movie.id)}
//                             className="h-[40px] w-[145px] bg-[#F4F4F5] hover:bg-white transition flex items-center justify-center py-2 px-4 gap-2 rounded-md text-sm font-medium text-[#18181B] cursor-pointer shadow-md"
//                           >
//                             <PlayIcon /> Watch Trailer
//                           </button>
//                         </DialogTrigger>

//                         <DialogContent className="max-w-none bg-transparent border-none shadow-none flex justify-center items-center">
//                           <VisuallyHidden>
//                             <DialogTitle>{movie.title} Trailer</DialogTitle>
//                           </VisuallyHidden>
//                           {activeTrailerId === movie.id && trailerUrl ? (
//                             <iframe
//                               src={trailerUrl}
//                               allowFullScreen
//                               title="Movie Trailer"
//                               className="w-[997px] h-[561px] rounded-xl shadow-2xl"
//                             />
//                           ) : (
//                             <p className="text-white">Loading trailer...</p>
//                           )}
//                         </DialogContent>
//                       </Dialog>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//         <CarouselDots />
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
