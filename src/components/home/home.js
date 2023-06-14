
import React from "react";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Home(props) {

  let history=useHistory() //console.log(props);
let goToMovies=()=>{
     history.push('/movies')  //props.history.push('/movies')
}

  return (
  <>
    <div className="container my-5 text-center">
    <h1 className="my-3">Home Page</h1>
  
    <button className="btn btn-success m-3 " onClick={goToMovies}>Go to movies</button>
    <button className="btn btn-success">Go to Tv</button>
    </div>
  </>
  );
}
