import React, { useState } from "react";
import preguntas from "../../preguntas.js";

function Lorcatest() {
  const [numPregunta, setNumPregunta] = useState(0);

  const [score, setScore] = useState(0);
  function answer(zapato) {
    if (preguntas.generacion27[0].lorca[0].rightAnswer === zapato) {
      setScore(score + 1);
    }
    setNumPregunta(numPregunta + 1);
  }
  return (
    <div>
      <h1>vamos por la pregunta {numPregunta}</h1>
      {preguntas.generacion27[0].lorca[0].question}

      <button onClick={() => answer(0)}>
        {preguntas.generacion27[0].lorca[0].answers[0]}
      </button>
      <button onClick={() => answer(1)}>
        {preguntas.generacion27[0].lorca[0].answers[1]}
      </button>
      <button onClick={() => answer(2)}>
        {preguntas.generacion27[0].lorca[0].answers[2]}
      </button>
      {/* <Question
        pregunta={pregunta[numPregunta]}
        metodoCambioPregunta={setNumPregunta}
      /> */}
    </div>
  );
}

export default Lorcatest;

// let aciertos = 0;
// let counter = 0;

// function cambiarScreen(respuestaUsuario1) {

//   if (counter != 0) {
//     if (respuestaUsuario1 === preguntas[counter - 1].rightAnswer) {
//       aciertos++;
//     } else {
//       console.log("error");
//     }
//   }
//   let phase = `
//              <article>
//      <p> ${preguntas[counter].question} </p>
//         <div class="respuestas">
//         <p class="answer" id="first" onclick= "change1(0)">${questions1[counter].answers[0]}</a>
//         <p class="answer" id="second" onclick= "change1(1)">${questions1[counter].answers[1]}</a>
//         <p class="answer" id="third" onclick= "change1(2)">${questions1[counter].answers[2]}</a>
//         </div>
//      </article>
//             `;
//   container.innerHTML = phase;
// }

// function change1(respuestaUsuario1) {
//   if (counter < 9) {
//     counter++;

//     cambiarScreen(respuestaUsuario1);
//   } else {
//     let final = `
//           <section id= "final">
//           <article>
//             <p>${aciertos} ACIERTOS</p>

//           </article>

//           <a href="questions.html"> Start again</a>
//           </section>
//       `;
//     document.getElementById("question").innerHTML = final;
//   }
// }
