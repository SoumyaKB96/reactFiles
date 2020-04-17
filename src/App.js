import React from "react";
import "./styles.css";

import Joke from "./Joke";
import jokesData from "./JokesData";

export default function App() {
  const jokeComponents = jokesData.map(joke => (
    <Joke question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div>{jokeComponents}</div>;
}
