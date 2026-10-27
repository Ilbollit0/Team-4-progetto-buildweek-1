/*
  [ALESSANDRO]

  Questo file gestisce le schermate iniziale e finale del quiz.

  - mostraBenvenuto(): crea la schermata iniziale e il pulsante "Inizia Quiz"
  - mostraRisultati(): mostra punteggio, percentuale e risultato finale
*/
/*
  [ALESSANDRO]

  Questo file gestisce la schermata iniziale del quiz.

  - mostraBenvenuto(): crea titolo, descrizione e pulsante "Inizia Quiz"
  - al click passa alla schermata delle domande
*/

function mostraBenvenuto() {
  const paginaIniziale = document.querySelector("#paginaIniziale");

  paginaIniziale.innerHTML = `
    <h1>Benvenuto al Quiz!</h1>

    <p>
      Metti alla prova le tue conoscenze di HTML, CSS e JavaScript.
    </p>

    <button id="iniziaQuiz">
      Inizia Quiz
    </button>
  `;

  const bottoneInizia = document.querySelector("#iniziaQuiz");

  bottoneInizia.addEventListener("click", function () {
    schermataAttiva = "quiz";
    mostraSchermataGiusta("domande");
  });
}