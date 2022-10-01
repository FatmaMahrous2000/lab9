import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Favs() {
    let favList=useSelector((state)=>state.favorties)
  return (
    <>
      <div className="container">
        <div className="row">
          {favList.map((movie) => (
            <div
              className="card col-3"
              // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
            >
              <img
                class="card-img-top"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt="Card image"
              />
              <div class="card-body">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <p class="card-text">Some example text.</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favs;
