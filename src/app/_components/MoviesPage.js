import { MovieCard } from "@/app/_components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Footer } from "../_features/Footer";
import { Header } from "../_features/Header";
import { useState } from "react";

export default function MoviesPage({ upcomingData, page, setPage, param }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPreviousButton = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center box-border justify-center">
      <Header />
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-8 pt-[52px] items-center">
          <div className="w-[1277px] h-[36px] flex justify-between items-center ">
            <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
              {param ? param.type : "More like this"}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-8 px-[32px]">
            {upcomingData.slice(0, 10).map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => {
                  if (page === 1) {
                    return;
                  } else {
                    handleClickPreviousButton();
                  }
                }}
              />
            </PaginationItem>
            <PaginationItem
              onClick={() => {
                if (page === 1) {
                  return;
                } else {
                  handleClickPreviousButton();
                }
              }}
            >
              <PaginationLink href="#" isActive={page === 1}>
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive={page === 2}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem onClick={handleClickNextButton}>
              <PaginationLink href="#" isActive={page === 3}>
                {page + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={handleClickNextButton} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <Footer />
    </div>
  );
}
