
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Home(props) {

  let history=useHistory()
  // console.log(props);
let goToMovies=()=>{
     history.push('/movies')
    //  props.history.push('/movies')
     
}

  return (
  <div className="container">
  <h1>home component</h1>
  
  </div>
  );
}
