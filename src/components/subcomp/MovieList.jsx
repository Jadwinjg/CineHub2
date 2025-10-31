import React from 'react';
import { motion } from 'framer-motion';

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            whileHover={{
              scale: 1.04,
              boxShadow: '0px 0px 13px white',
              borderRadius: '16px'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group bg-black/50"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black bg-opacity-50 text-white text-sm text-center opacity-0 group-hover:opacity-100 transition duration-300">
              {movie.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
