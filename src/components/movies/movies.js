import React, { useEffect, useState } from "react";
import "./movies.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/actions";

function Movies() {
  let [moviesList, setmoviesList] = useState([]);
  let [page,setPage]=useState(1)
  let lang=useSelector((state)=>state.lang)
  const dispatch=useDispatch()
//lifecyclehooks
//componentdidmount
//componentdidupdate
//componentwillunmount
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
      <div className="container">
        <button className="btn btn-success m-4 me-5" onClick={goPrev}>Prev</button>
        <button className="btn btn-success" onClick={goNext}>Next</button>
        <div className="row">
          {moviesList.map((movie) => (
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
                {/* <h4 class="card-title">{movie.title}</h4>
                    </Link> */}
                <p class="card-text">Some example text.</p>
                <button  class="btn btn-primary" onClick={()=>dispatch(setFavorite(movie))}>
                 Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
