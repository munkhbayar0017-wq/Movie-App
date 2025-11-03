"use client";

import StarIcon from "@/app/_Icons/StarIcon";
import { Footer } from "../../_features/Footer";
import { Header } from "../../_features/Header";
import PlayIcon from "@/app/_Icons/PlayIcon";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieCrew from "@/app/_features/MovieCrew";
import MoreLikeThis from "@/app/_features/MoreLikeThis";
import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LoadingMovieDetails } from "@/app/_features/skeletons/LoadingMovieDetails";

const Page = () => {
  const [movieDetailsData, setMovieDetailsData] = useState({});
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const movieDetailsDataList = async () => {
    setLoading(true);
    const movieDetailsEndpoint = `${BASE_URL}/movie/${id}?language=en-US`;
    const movieDetailsResponse = await fetch(movieDetailsEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await movieDetailsResponse.json();
    setMovieDetailsData(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
    }
  };

  useEffect(() => {
    movieDetailsDataList();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <Header />
        <LoadingMovieDetails />
        <Footer />
      </div>
    );
  }

  let time = movieDetailsData.runtime || 0;
  var hours = Math.floor(time / 60);
  var minutes = time % 60;

  let budget = Math.floor(movieDetailsData.revenue / 100000);
  const rate = Math.floor(movieDetailsData.vote_average * 10) / 10;
  console.log("movieDetailsData", movieDetailsData);
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-6 pt-[52px]">
        <div className="flex w-[1080px] h-[72px] justify-between">
          <div>
            <p className="text-4xl font-bold leading-[40px]">
              {movieDetailsData.title}
            </p>
            <p className="text-lg font-normal leading-[28px]">
              {movieDetailsData.release_date} · PG · {hours}h {minutes}m
            </p>
          </div>
          <div>
            <p className="text-xs font-medium leading-[16px]">Rating</p>
            <div className="text-[#FFFFFF] flex items-center gap-1">
              <StarIcon />
              <div>
                <p className="font-semibold text-lg text-[#09090B] flex items-center gap-1">
                  {rate}
                  <span className="text-base font-normal text-[#71717A]">
                    /10
                  </span>
                </p>
                <p className="text-base font-normal text-[#71717A]">
                  {budget}k
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div
            className="w-[290px] h-[428px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetailsData.poster_path})`,
            }}
          ></div>
          <div
            className="w-[760px] h-[428px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetailsData.backdrop_path})`,
            }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="flex gap-3 justify-center items-center absolute left-6 top-[364px] "
                  onClick={() => fetchTrailer(id)}
                >
                  <div className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center cursor-pointer">
                    <PlayIcon />
                  </div>
                  <p className="text-[#FFFFFF] text-base font-normal">
                    Play trailer
                  </p>
                  <p className="text-[#FFFFFF] text-base font-normal">2:35</p>
                </button>
              </DialogTrigger>

              <DialogContent
                className="
                  fixed top-1/2 left-1/2 z-50 
                  translate-x-[-50%] translate-y-[-50%]
                  bg-transparent border-none shadow-none 
                  p-0 w-auto h-auto flex items-center justify-center
                "
              >
                <VisuallyHidden>
                  <DialogTitle>{movieDetailsData.title} Trailer</DialogTitle>
                </VisuallyHidden>

                {trailerUrl && (
                  <iframe
                    src={trailerUrl}
                    allowFullScreen
                    title={`${movieDetailsData.title} Trailer`}
                    className="w-[997px] h-[561px] rounded-xl shadow-2xl"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-[1080px] flex flex-col gap-5 pt-8">
        <div className="flex gap-3">
          {movieDetailsData.genres?.map((genres) => {
            return (
              <Badge
                key={genres.id}
                variant="secondary"
                className="w-min h-min rounded-full bg-background border border-[#E4E4E7] flex"
              >
                {genres.name}
              </Badge>
            );
          })}
        </div>

        <p className="text-base font-normal leading-[24px] h-fit">
          {movieDetailsData.overview}
        </p>
        <MovieCrew />
      </div>
      <MoreLikeThis />
      <Footer />
    </div>
  );
};
export default Page;
