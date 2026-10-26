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
const TOTAL_QUESTIONS = QUESTIONS.length;
const PASS_THRESHOLD = 60;     // percentuale minima per "Promosso"
const FEEDBACK_DELAY = 1500;   // ms di attesa dopo risposta prima di avanzare
const TIMER_DURATION = 20;     // secondi per ogni domanda

/* Stato globale */
let currentScreen = "welcome"; // "welcome" | "quiz" | "results"
let currentQuestion = 0;
let score = 0;
let timerId = null;

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
