/*
  REGOLE
  - Codice in JavaScript moderno: solo const/let, mai var.
  - DOM: usa querySelector / querySelectorAll.
  - Eventi: usa addEventListener (mai onclick inline nell'HTML).
  - Pattern: stato → render → eventi.
*/

/*
  Array di domande.
  Ogni question è un object con:
   - question: testo della domanda
   - correct_answer: la risposta corretta (string)
   - incorrect_answers: array di risposte sbagliate (string[])
*/




const quizDomande = [
  {
    id: 1,
    categoria: "HTML",
    domanda: "Quale tag HTML rappresenta il livello di intestazione più importante nel contenuto di una pagina?",
    opzioni: ["<h6>", "<header>", "<h1>", "<head>"],
    rispostaCorretta: "<h1>",
    tempo: 15
  },
  {
    id: 2,
    categoria: "HTML",
    domanda: "Quale attributo del tag <img> contiene il testo alternativo mostrato se l'immagine non si carica?",
    opzioni: ["alt", "src", "title", "href"],
    rispostaCorretta: "alt",
    tempo: 15
  },
  {
    id: 3,
    categoria: "HTML",
    domanda: "Quale tag HTML si usa per creare una lista non ordinata (con i pallini)?",
    opzioni: ["<ol>", "<li>", "<dl>", "<ul>"],
    rispostaCorretta: "<ul>",
    tempo: 10
  },
  {
    id: 4,
    categoria: "HTML",
    domanda: "Cosa indica la dichiarazione <!DOCTYPE html> all'inizio di una pagina?",
    opzioni: [
      "Che il browser deve eseguire JavaScript",
      "Che il documento è scritto in HTML5",
      "Il titolo della pagina",
      "La lingua della pagina"
    ],
    rispostaCorretta: "Che il documento è scritto in HTML5",
    tempo: 20
  },
  {
    id: 5,
    categoria: "HTML",
    domanda: "Quale attributo rende obbligatorio un campo <input> prima dell'invio del form?",
    opzioni: ["mandatory", "validate", "required", "needed"],
    rispostaCorretta: "required",
    tempo: 15
  },
  {
    id: 6,
    categoria: "HTML",
    domanda: "Quale tag HTML5 è pensato per il contenuto principale e unico di una pagina?",
    opzioni: ["<main>", "<section>", "<article>", "<div>"],
    rispostaCorretta: "<main>",
    tempo: 15
  },
  {
    id: 7,
    categoria: "CSS",
    domanda: "Quale proprietà CSS controlla lo spazio tra il contenuto di un elemento e il suo bordo?",
    opzioni: ["margin", "border-spacing", "gap", "padding"],
    rispostaCorretta: "padding",
    tempo: 15
  },
  {
    id: 8,
    categoria: "CSS",
    domanda: "Quale valore di display trasforma un contenitore in un contenitore flessibile (flexbox)?",
    opzioni: ["block", "flex", "inline", "float"],
    rispostaCorretta: "flex",
    tempo: 10
  },
  {
    id: 9,
    categoria: "CSS",
    domanda: "Quale selettore CSS seleziona tutti gli elementi con class=\"bottone\"?",
    opzioni: ["#bottone", "bottone", ".bottone", "*bottone"],
    rispostaCorretta: ".bottone",
    tempo: 10
  },
  {
    id: 10,
    categoria: "CSS",
    domanda: "Quale proprietà CSS arrotonda gli angoli di un elemento?",
    opzioni: ["border-radius", "corner-style", "round-corner", "box-round"],
    rispostaCorretta: "border-radius",
    tempo: 10
  },
  {
    id: 11,
    categoria: "CSS",
    domanda: "Quale pseudo-classe CSS si applica quando il mouse passa sopra un elemento?",
    opzioni: [":active", ":focus", ":visited", ":hover"],
    rispostaCorretta: ":hover",
    tempo: 10
  },
  {
    id: 12,
    categoria: "CSS",
    domanda: "Cosa fa la regola box-sizing: border-box?",
    opzioni: [
      "Aggiunge un bordo a tutti gli elementi",
      "Include padding e bordo nella larghezza e nell'altezza dichiarate",
      "Toglie il margine all'elemento",
      "Rende l'elemento più grande del suo contenitore"
    ],
    rispostaCorretta: "Include padding e bordo nella larghezza e nell'altezza dichiarate",
    tempo: 20
  },
  {
    id: 13,
    categoria: "JavaScript",
    domanda: "Quale metodo converte una stringa JSON in un oggetto JavaScript?",
    opzioni: ["JSON.stringify()", "JSON.object()", "JSON.parse()", "JSON.convert()"],
    rispostaCorretta: "JSON.parse()",
    tempo: 15
  },
  {
    id: 14,
    categoria: "JavaScript",
    domanda: "Qual è il risultato dell'espressione '5' + 3 in JavaScript?",
    opzioni: ["53", "8", "NaN", "undefined"],
    rispostaCorretta: "53",
    tempo: 15
  },
  {
    id: 15,
    categoria: "JavaScript",
    domanda: "Quale operatore confronta valore e tipo senza fare conversioni?",
    opzioni: ["==", "=", "!=", "==="],
    rispostaCorretta: "===",
    tempo: 10
  },
  {
    id: 16,
    categoria: "JavaScript",
    domanda: "Quale metodo degli array crea un nuovo array applicando una funzione a ogni elemento?",
    opzioni: ["forEach()", "map()", "filter()", "pop()"],
    rispostaCorretta: "map()",
    tempo: 15
  },
  {
    id: 17,
    categoria: "JavaScript",
    domanda: "Quale metodo restituisce il primo elemento della pagina che corrisponde a un selettore CSS?",
    opzioni: ["getElementsByClassName()", "getElement()", "querySelector()", "selectFirst()"],
    rispostaCorretta: "querySelector()",
    tempo: 15
  },
  {
    id: 18,
    categoria: "JavaScript",
    domanda: "Quale metodo collega una funzione a un evento (per esempio il click) di un elemento?",
    opzioni: ["addEventListener()", "onEvent()", "listen()", "attachClick()"],
    rispostaCorretta: "addEventListener()",
    tempo: 15
  },
  {
    id: 19,
    categoria: "JavaScript",
    domanda: "Quale funzione ripete un'azione a intervalli regolari di tempo?",
    opzioni: ["setTimeout()", "repeat()", "delay()", "setInterval()"],
    rispostaCorretta: "setInterval()",
    tempo: 10
  },
  {
    id: 20,
    categoria: "JavaScript",
    domanda: "Cosa restituisce Math.random()?",
    opzioni: [
      "Un intero casuale tra 0 e 10",
      "Un numero decimale casuale tra 0 (incluso) e 1 (escluso)",
      "Un array mescolato",
      "Un numero casuale tra 1 e 100"
    ],
    rispostaCorretta: "Un numero decimale casuale tra 0 (incluso) e 1 (escluso)",
    tempo: 20
  }
];

/* Costanti del quiz */
const sogliaPromozione = 60;     // percentuale minima per "Promosso"
const ritardoFeedback = 1500;   // ms di attesa dopo risposta prima di avanzare

/* Stato globale */
let schermataAttiva = "welcome"; // "welcome" | "quiz" | "results"
let indiceDomanda = 0; //usato per caricaProssimaDomanda
let punteggio = 0;
let idTimer = null;

function mostraBenvenuto() {  };   // chi fa la pagina iniziale (Alessandro)
function avviaTimer() { };        // Nicholas
function gestisciRisposta()  {}; // Francesco

/* SCRIVI QUI LE TUE FUNZIONI:
   - render() che chiama renderWelcome / renderQuiz / renderResults in base a currentScreen
   - renderWelcome() per la schermata iniziale con button Inizia
   - renderQuiz() per la domanda corrente con i button risposta + counter + timer
   - renderResults() per la schermata finale con percentuale + barre + verdetto
   - startTimer() / stopTimer() per il countdown
   - handleAnswer(button, answer) per il click su una risposta
   - handleTimeUp() per il tempo scaduto
   - advance() per andare alla domanda successiva o ai risultati
*/



//NICHOLAS
//creare section con html con id diversi tutte le section devono avere la classe (schermata) la pagina del quiz e la pagina finale devono avere la classe (nascosto)
//creare classe nascosto in css con display: none;
function mostraSchermataGiusta(idSchermata) {  //FUNZIONE PER CAMBIARE SCHERMATA IN SPA PASSARE ID DELLA SCHERMATA
const tutteLeSchermate = document.querySelectorAll('.schermata');
tutteLeSchermate.forEach(schermata => {  //assegniamo la classe per nascondere tutte le schermate
  schermata.classList.add('nascosto');
});
const schermataDaMostrare = document.getElementById(idSchermata);  //rimuoviamo la classe che la nasconde a schermo
if(schermataDaMostrare) {
  schermataDaMostrare.classList.remove('nascosto');
  };
};
//vediamo la pagina iniziale giusta grazie alla classe css .nascosto assegnata alle 2 che vogliamo nascondere


}
