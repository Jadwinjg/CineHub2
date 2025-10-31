import React from "react";
import MovieCardWrap from "../components/subcomp/MovieCardWrap";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector((state) => state.movies.movies); 

  return (
    <div className="min-h-full w-full bg-home-bg bg-cover bg-fixed bg-center bg-no-repeat px-[70px] pb-10 pt-[90px]">
      <h4 className="mb-5 text-2xl text-white">All Movies</h4>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {movies.length > 0 ? (
          movies.map((item, i) => (
            <div key={i}>
              <MovieCardWrap id={item.id} img={item.carding} />
            </div>
          ))
        ) : (
          <p className="text-white">No movies to display.</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
