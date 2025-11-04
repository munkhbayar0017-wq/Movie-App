"use client";
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

const titles = {
  top_rated: "Top rated",
  upcoming: "Upcoming",
  popular: "Popular",
};

export default function MoviesPage({ data, page, setPage, param }) {
  const totalPages = 50;
  const visiblePages = 3;

  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handlePageClick = (p) => {
    if (p !== page) setPage(p);
  };

  const handleClickPreviousButton = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleClickNextButton = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center box-border justify-center">
      <Header />

      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-8 pt-[52px] items-center">
          <div className="w-[1277px] h-[36px] flex justify-between items-center">
            <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
              {param ? titles[param.type] : "More like this"}
            </p>
          </div>

          <div className="grid grid-cols-5 gap-8 px-[32px]">
            {data.slice(0, 10).map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            ))}
          </div>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={handleClickPreviousButton}
                className={page === 1 ? "opacity-50 pointer-events-none" : ""}
              />
            </PaginationItem>
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
              const pageNum = startPage + i;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    isActive={pageNum === page}
                    onClick={() => handlePageClick(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            {endPage < totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={handleClickNextButton}
                className={
                  page === totalPages ? "opacity-50 pointer-events-none" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </div>
  );
}
