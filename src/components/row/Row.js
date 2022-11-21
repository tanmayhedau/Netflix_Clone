import React from "react";
import "./Row.css";
import Card from "../card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Row(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(props.url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="row_wrapper">
      <h3 className="row_title">{props.title}</h3>
      <div className="row_card">{
        movies.map((ele) => {
          return <Card title={ele.title} poster={ele.backdrop_path} id={ele.id} />;
        })}
      </div>
    </div>
  );
}
