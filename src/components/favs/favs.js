// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Favs() {
    let favList=useSelector((state)=>state.favorties)
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {favList.map((movie) => (
            <div
              className="card col-3"
            >
              <img
                class="card-img-top"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt="..."
              />
              <div class="card-body">
                <Link className="text-center" to={`/movies/${movie.id}`}>{movie.title}</Link>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favs;