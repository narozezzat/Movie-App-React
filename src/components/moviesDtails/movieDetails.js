import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./movieDetails.css"

function Moviedetails() {
  let params = useParams();

  let [movie, setMovie] = useState({});
  let lang = useSelector((state) => state.lang);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=790392d65f15e65ab054f72d158f72c2&language=${lang}`
      )
      .then((singleMovie) => {
        console.log(singleMovie.data);
        setMovie(singleMovie.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
    <div className="container justify-content-center">
      <div class="wrapper">
        <div class="main_card">
          <div class="card_left">
            <div class="card_datails">
              <h2>{movie.title}</h2>
              <div class="card_cat">
                <p class="year" className="text-secondary">Year: {movie.release_date}</p>
                
                <p class="time" className="text-secondary">{movie.runtime} Min</p>
              </div>
              <p class="disc">{movie.overview}</p>
              
            </div>
          </div>
          <div class="card_right">
            <div class="img_container">
              <img 
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Moviedetails;
