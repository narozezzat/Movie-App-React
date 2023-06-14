import React, { useEffect, useState } from "react";
import "./movies.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/actions";

function Movies() {
  let [moviesList, setmoviesList] = useState([]);
  let [page,setPage]=useState(1)
  let lang=useSelector((state)=>state.lang)
  const dispatch=useDispatch()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=790392d65f15e65ab054f72d158f72c2&language=${lang}&page=${page}`
      )
      .then((moviesData) => {
        setmoviesList(moviesData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page,lang]);

  let goNext=()=>{
    setPage(++page)
    console.log(page)
  }
  let goPrev=()=>{
    if(page>0){
      setPage(--page)
    }
    console.log(page)
  }

  return (
    <>
      <div className="container my-5">
        <div className="text-center my-2">
          <button className="btn btn-success arro" onClick={goPrev}>←Prev</button>
          <button className="btn btn-success mx-2 arro" onClick={goNext}>Next→</button>
        </div>
        <div className="row">
          {moviesList.map((movie) => (
            <div
              className="card col-3"
            >
              <img
                class="card-img-top"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt="..."
              />
              <div class="card-body">
              <h6 class="card-title" className="text-center mb-3">{movie.title}</h6>
                <Link className='text-center mb-2' to={`/movies/${movie.id}`}>Details</Link>
                  
                <div className="text-center">
                  <button  class="btn btn-primary" onClick={()=>dispatch(setFavorite(movie))}>
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
