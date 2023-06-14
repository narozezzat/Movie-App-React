import React, { useState } from "react";
import "./navbar.css";
// import HomeIcon from "@mui/material/Icon";
// import Icon from "@mui/material/Icon";
import NavLink from "../link/link";
import { useDispatch, useSelector } from "react-redux";
import changeLang from "../../store/actions";

function Navbar() {
  const dispatch=useDispatch()
  let [navelements] = useState([
    { data: "/", content: "Home" },
    { data: "/movies", content: "Movies" },
    { data: "/tvs", content: "Tv" },
    { data: "/favs", content: "Favorities" },
    // { data: "/login", content: "Login" },
  ]);
  let lang = useSelector((state) => state.lang);
  let toggleLanguage=()=>{
          dispatch(changeLang(lang==='en-US'?'ar-SA':'en-US'))
  }
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand bg-light">
            Movies App
          </button>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
              <button className="btn btn-light" onClick={toggleLanguage}>{lang}</button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
