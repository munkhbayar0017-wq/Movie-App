"use client";

import { Header } from "../../_features/Header";
import { Footer } from "../../_features/Footer";
import { useParams } from "next/navigation";
import { LoadingMovieList } from "@/app/_features/skeletons/LoadingMovieList";
import { useEffect, useState } from "react";

import MoviesPage from "@/app/_components/MoviesPage";
import { ACCESS_TOKEN, BASE_URL } from "@/app/_constants";

export default function Page() {
  const [moreLikeThis, setMoreLikeThis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  const moreLikeThisList = async () => {
    setLoading(true);
    const moreLikeThisEndpoint = `${BASE_URL}/movie/${id}/similar?language=en-US&page=${page}`;
    const moreLikeThisResponse = await fetch(moreLikeThisEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await moreLikeThisResponse.json();
    setMoreLikeThis(data.results);
    setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    moreLikeThisList();
  }, [page]);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Header />
        <LoadingMovieList />;
        <Footer />
      </div>
    );
  }
  console.log(moreLikeThis, "morelikethis");

  return (
    <MoviesPage data={moreLikeThis} page={page} setPage={setPage} param={""} />
  );
}
