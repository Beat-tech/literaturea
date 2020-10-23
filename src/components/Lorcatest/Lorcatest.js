import React, { Component } from "react";
import "./Lorcatest.css";

class Lorcatest extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return <div></div>;
  }
}

export default Lorcatest;

// let preguntas = [
//   {
//     question: "¿A qué grupo poético pertenece Lorca?",
//     answers: ["Generación del 98", "Románticos", "Grupo poético del 27"],
//     rightAnswer: 2,
//   },
//   {
//     question: "¿Cuál es el símbolo más usado en el Romancero Gitano?",
//     answers: ["La luna", "El color verde", "La tierra"],
//     rightAnswer: 0,
//   },
//   {
//     question: "¿A qué se denomina la triología de tragedias de Lorca?",
//     answers: [
//       "Romancero Gitano, Poeta en NY e Impresiones y paisajes",
//       "Bodas de sangre, Yerma y La casa de Bernarda Alba",
//       "La triología de tragedias no es de Lorca",
//     ],
//     rightAnswer: 1,
//   },
//   {
//     question: "Lorca nació en...",
//     answers: ["Málaga", "Granada", "Madrid"],
//     rightAnswer: 1,
//   },
//   {
//     question: "¿Cómo vino la luna a la fragua?",
//     answers: [
//       "Con los ojillos cerrados",
//       "Tranquila",
//       "Con su polisón de nardos",
//     ],
//     rightAnswer: 2,
//   },
//   {
//     question: "¿Quién es Leonardo?",
//     answers: [
//       "Un gitano del Romancero",
//       "El protagonista de Así que pasen cinco años",
//       "Con quien se fuga la novia en Bodas de Sangre",
//     ],
//     rightAnswer: 2,
//   },
//   {
//     question: "¿Cómo se llamó el grupo de teatro en el que Lorca participaba?",
//     answers: ["Teatro ambulante", "La Barraca", "Teatro del pueblo"],
//     rightAnswer: 1,
//   },
//   {
//     question:
//       "¿ Quién arrancaba los ojos a los cocodrilos y golpeaba el trasero de los monos?",
//     answers: ["La guardia civil", "Los niños", "El rey de Harlem"],
//     rightAnswer: 2,
//   },
//   {
//     question: "Si digo Adela, Martirio, Angustias, Magdalena, hablo de...",
//     answers: ["Hermanas de Lorca", "La Casa de Bernarda Alba", "Yerma"],
//     rightAnswer: 1,
//   },
//   {
//     question: "Sus muslos se me escapaban/ como peces sorprendidos...",
//     answers: [
//       "la mitad llenos de lumbre/ la mitad llenos de frío.",
//       "y se me abrieron de pronto/ como ramos de jacintos.",
//       "ni los cristales con luna/ relumbran con ese brillo.",
//     ],
//     rightAnswer: 0,
//   },
// ];

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
