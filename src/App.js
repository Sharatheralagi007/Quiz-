import React from "react";
import Quizapp from "./Quizapp";

export default function App() {
  return (
    <div>
      <b
        style={{
          color: "wheat",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>QUIZ ON REDUX</h1>
      </b>

      <Quizapp />
    </div>
  );
}
