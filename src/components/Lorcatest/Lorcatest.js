import React, { useState } from "react";
import preguntas from "../../preguntas.js";

function Lorcatest() {
  const [numPregunta, setNumPregunta] = useState(0);
  const [score, setScore] = useState(0);

  function answer(choice) {
    if (
      preguntas.generacion27[0].lorca[numPregunta].rightAnswer === choice
    ) {
      setScore(score + 1);
    }
    setNumPregunta(numPregunta + 1);
  }
  if (numPregunta < 10) {
    return (
      <div>
        <p>Vas por la pregunta {numPregunta + 1} de 10</p>
        {preguntas.generacion27[0].lorca[numPregunta].question}
        {console.log(score)}
      

        <button onClick={() => answer(0)}>
          {preguntas.generacion27[0].lorca[numPregunta].answers[0]}
        </button>
        <button onClick={() => answer(1)}>
          {preguntas.generacion27[0].lorca[numPregunta].answers[1]}
        </button>
        <button onClick={() => answer(2)}>
          {preguntas.generacion27[0].lorca[numPregunta].answers[2]}
        </button>
        {/* <Question
        pregunta={pregunta[numPregunta]}
        metodoCambioPregunta={setNumPregunta}
      /> */}
      </div>
    );
  } else {
    return (
      <div>
        <p>Has acertado {score} de 10 preguntas.</p>
      </div>
    );
  }
}

export default Lorcatest;
