import React from "react";
import { Link } from "react-router-dom";

function MovieCardWrap(props) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border-2 border-white hover:scale-105">
      <Link to="/">
        <img src={props.img} alt="Movie" className="h-40 w-full object-cover" />
      </Link>
    </div>
  );
}

export default MovieCardWrap;
