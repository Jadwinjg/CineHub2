import React from 'react';
import MovieCardWrap from './MovieCardWrap';

function Thumbnail({ movies, label }) {


  return (
    <div className="py-8">
      <h4 className="mb-5 text-2xl text-white">{label}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((data,index)=>(
            <div key={index}>
             <MovieCardWrap id={data.id} img={data.cardImg}/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Thumbnail;
