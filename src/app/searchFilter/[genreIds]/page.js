"use client";

import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MovieCard } from "@/app/_components/MovieCard";
import { BadgeDemo } from "@/app/_components/BadgeDemo";
import { LoadingSearchFilter } from "@/app/_features/skeletons/LoadingSearchFilter";

export default function Page() {
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { genreIds } = useParams();

  const searchFilterList = async () => {
    setLoading(true);
    const searchFilterEndpoint = `${BASE_URL}/discover/movie?language=en&with_genres=${genreIds}&page=${page}`;
    const searchFilterResponse = await fetch(searchFilterEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await searchFilterResponse.json();
    setSearchFilterData(data);
    setTimeout(() => setLoading(false), 2000);
  };

  const [genreData, setGenreData] = useState([]);
  const router = useRouter();
  const GenreDataList = async () => {
    const GenreEndpoint = `${BASE_URL}/genre/movie/list?language=en`;
    const GenreResponse = await fetch(GenreEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await GenreResponse.json();
    setGenreData(data.genres || []);
  };
  useEffect(() => {
    GenreDataList();
  }, []);

  useEffect(() => {
    searchFilterList();
  }, [page, genreIds]);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Header />
        <LoadingSearchFilter />
        <Footer />
      </div>
    );
  }

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
          <div className="w-[1280px] h-[36px] flex justify-between items-center">
            <p className="font-semibold text-2xl leading-[32px] tracking-[-0.6px] text-[#09090B]">
              Search results
            </p>
          </div>
          <div className="flex gap-7 w-100%">
            <ul className="w-[387px] h-auto">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold leading-[32px] tracking-[-0.6px]">
                  Genres
                </p>
                <p className="text-base font-normal leading-[24px]">
                  See lists of movies by genre
                </p>
                <div className="h-[16.5px] w-full border-b"></div>
                <div className="h-[16.5px] w-full"></div>
              </div>
              <div className="flex flex-wrap max-h-[333px] w-full gap-4 overflow-y-auto">
                {genreData.map((genre) => {
                  return (
                    <BadgeDemo
                      key={genre.id}
                      genre={genre.name}
                      genreIds={genre.id}
                    />
                  );
                })}
              </div>
            </ul>
            <div className="w-[1px] h-auto border border-[#E4E4E7] m-4"></div>
            <div className="flex flex-col gap-8">
              <p className="text-[#09090B] font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.5px]">
                {searchFilterData.total_results} titles in &quot;
                {
                  genreData.find(
                    (genreName) => genreName.id === Number(genreIds)
                  )?.name
                }
                &quot;
              </p>
              <div className="grid grid-cols-4 gap-12">
                {searchFilterData.results?.map((movie) => (
                  <MovieCard
                    direction="min"
                    key={movie.id}
                    movieId={movie.id}
                    year={movie.release_date}
                    title={movie.title}
                    rating={movie.vote_average}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={handleClickPreviousButton}
                      className={
                        page === 1 ? "opacity-50 pointer-events-none" : ""
                      }
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
                        page === totalPages
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
