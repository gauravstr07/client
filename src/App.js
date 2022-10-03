import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState();
  const [review, setReview] = useState();

  const submitReview = () => {
    Axios.post("http://localhost:5000/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert("successfull insert")
    }).catch((err) => {
      alert("feild to insert");
      console.log(err);
    })
  };

  return (
    <div className="App">
      <h1>CRUD-Application🤩</h1>

      <div className="form">
        <label>Movie Name🎦 </label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review🚮 </label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />

        <button type="button" onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
