import axios from "axios";
// import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Tv() {
  //react Hooks
  let [tvShows, setTvshows] = useState([]);
  let lang = useSelector((state) => state.lang);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=790392d65f15e65ab054f72d158f72c2&language=${lang}&page=1`
      )
      .then((tvData) => {
        console.log(tvData.data.results);
        setTvshows(tvData.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  let toggleDetails = (tvid) => {
    let newTvs = tvShows.filter((tv) => {
      if (tv.id === tvid) {
        tv.isVisable = !tv.isVisable;
      }
      return tv;
    });
    setTvshows(newTvs);
  };

  return (
    <>
      <div className="container m-5 text-center">
        <div className="row">
          {tvShows.map((singleTv) => (
            <div
              className="card col-3"
            >
              <img
                className="card-img-top"
                src={
                  "https://image.tmdb.org/t/p/original" + singleTv.poster_path
                }
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title mb-3">{singleTv.name}</h6>
                {singleTv.isVisable && (
                  <p className="card-text">{singleTv.overview}</p>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    toggleDetails(singleTv.id);
                  }}
                >
                  {singleTv.isVisable ? "Hide Details" : "See Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary">page 2</button>
      </div>
    </>
  );
}
