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
    domanda: "Qual è il tag HTML corretto per inserire un collegamento ipertestuale (link)?",
    opzioni: ["<link>", "<a>", "<href>", "<url>"],
    rispostaCorretta: "<a>",
    tempo: 15
  },
  {
    id: 2,
    categoria: "HTML",
    domanda: "Quale attributo HTML viene utilizzato per definire gli stili in linea (inline)?",
    opzioni: ["class", "styles", "style", "font"],
    rispostaCorretta: "style",
    tempo: 10
  },
  {
    id: 3,
    categoria: "CSS",
    domanda: "Quale proprietà CSS viene utilizzata per cambiare il colore del testo di un elemento?",
    opzioni: ["text-color", "color", "font-color", "background-color"],
    rispostaCorretta: "color",
    tempo: 12
  },
  {
    id: 4,
    categoria: "CSS",
    domanda: "In CSS, come si seleziona un elemento con id 'principale'?",
    opzioni: [".principale", "#principale", "*principale", "id:principale"],
    rispostaCorretta: "#principale",
    tempo: 10
  },
  {
    id: 5,
    categoria: "JavaScript",
    domanda: "Come si dichiara una variabile che non può essere riassegnata in JavaScript moderno?",
    opzioni: ["var", "let", "const", "static"],
    rispostaCorretta: "const",
    tempo: 15
  },
  {
    id: 6,
    categoria: "JavaScript",
    domanda: "Quale metodo viene utilizzato per aggiungere un elemento alla fine di un array?",
    opzioni: ["push()", "pop()", "shift()", "unshift()"],
    rispostaCorretta: "push()",
    tempo: 12
  },
  {
    id: 7,
    categoria: "JavaScript",
    domanda: "Cosa restituisce l'espressione `typeof []` in JavaScript?",
    opzioni: ["array", "object", "list", "undefined"],
    rispostaCorretta: "object",
    tempo: 20
  }
];

/* Costanti del quiz */
const sogliaPromozione = 60;     // percentuale minima per "Promosso"
const ritardoFeedback = 1500;   // ms di attesa dopo risposta prima di avanzare

/* Stato globale */
let schermataAttiva = "welcome"; // "welcome" | "quiz" | "results"
let indiceDomanda = 0;
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