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
    tempo: 20
  },
  {
    id: 2,
    categoria: "HTML",
    domanda: "Quale attributo del tag <img> contiene il testo alternativo mostrato se l'immagine non si carica?",
    opzioni: ["alt", "src", "title", "href"],
    rispostaCorretta: "alt",
    tempo: 20
  },
  {
    id: 3,
    categoria: "HTML",
    domanda: "Quale tag HTML si usa per creare una lista non ordinata (con i pallini)?",
    opzioni: ["<ol>", "<li>", "<dl>", "<ul>"],
    rispostaCorretta: "<ul>",
    tempo: 20
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
    tempo: 20
  },
  {
    id: 6,
    categoria: "HTML",
    domanda: "Quale tag HTML5 è pensato per il contenuto principale e unico di una pagina?",
    opzioni: ["<main>", "<section>", "<article>", "<div>"],
    rispostaCorretta: "<main>",
    tempo: 20
  },
  {
    id: 7,
    categoria: "CSS",
    domanda: "Quale proprietà CSS controlla lo spazio tra il contenuto di un elemento e il suo bordo?",
    opzioni: ["margin", "border-spacing", "gap", "padding"],
    rispostaCorretta: "padding",
    tempo: 20
  },
  {
    id: 8,
    categoria: "CSS",
    domanda: "Quale valore di display trasforma un contenitore in un contenitore flessibile (flexbox)?",
    opzioni: ["block", "flex", "inline", "float"],
    rispostaCorretta: "flex",
    tempo: 20
  },
  {
    id: 9,
    categoria: "CSS",
    domanda: "Quale selettore CSS seleziona tutti gli elementi con class=\"bottone\"?",
    opzioni: ["#bottone", "bottone", ".bottone", "*bottone"],
    rispostaCorretta: ".bottone",
    tempo: 20
  },
  {
    id: 10,
    categoria: "CSS",
    domanda: "Quale proprietà CSS arrotonda gli angoli di un elemento?",
    opzioni: ["border-radius", "corner-style", "round-corner", "box-round"],
    rispostaCorretta: "border-radius",
    tempo: 20
  },
  {
    id: 11,
    categoria: "CSS",
    domanda: "Quale pseudo-classe CSS si applica quando il mouse passa sopra un elemento?",
    opzioni: [":active", ":focus", ":visited", ":hover"],
    rispostaCorretta: ":hover",
    tempo: 20
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
    tempo: 20
  },
  {
    id: 14,
    categoria: "JavaScript",
    domanda: "Qual è il risultato dell'espressione '5' + 3 in JavaScript?",
    opzioni: ["'53'", "8", "NaN", "undefined"],
    rispostaCorretta: "'53'",
    tempo: 20
  },
  {
    id: 15,
    categoria: "JavaScript",
    domanda: "Quale operatore confronta valore e tipo senza fare conversioni?",
    opzioni: ["==", "=", "!=", "==="],
    rispostaCorretta: "===",
    tempo: 20
  },
  {
    id: 16,
    categoria: "JavaScript",
    domanda: "Quale metodo degli array crea un nuovo array applicando una funzione a ogni elemento?",
    opzioni: ["forEach()", "map()", "filter()", "pop()"],
    rispostaCorretta: "map()",
    tempo: 20
  },
  {
    id: 17,
    categoria: "JavaScript",
    domanda: "Quale metodo restituisce il primo elemento della pagina che corrisponde a un selettore CSS?",
    opzioni: ["getElementsByClassName()", "getElement()", "querySelector()", "selectFirst()"],
    rispostaCorretta: "querySelector()",
    tempo: 20
  },
  {
    id: 18,
    categoria: "JavaScript",
    domanda: "Quale metodo collega una funzione a un evento (per esempio il click) di un elemento?",
    opzioni: ["addEventListener()", "onEvent()", "listen()", "attachClick()"],
    rispostaCorretta: "addEventListener()",
    tempo: 20
  },
  {
    id: 19,
    categoria: "JavaScript",
    domanda: "Quale funzione ripete un'azione a intervalli regolari di tempo?",
    opzioni: ["setTimeout()", "repeat()", "delay()", "setInterval()"],
    rispostaCorretta: "setInterval()",
    tempo: 20
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
const sezioneDomande = document.querySelector('#domande');
const paginaIniziale = document.querySelector("#paginaIniziale");

/* Stato globale */
let schermataAttiva = "welcome"; // "welcome" | "quiz" | "results"
let indiceDomanda = 0; //usato per caricaProssimaDomanda
let punteggio = 0;
let timerIntervallo = null;
let tempoRestante = 0;

// function mostraBenvenuto() {  };   // chi fa la pagina iniziale (Alessandro)
// function avviaTimer() { };        // Nicholas
// function gestisciRisposta()  {}; // Francesco

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
  if (schermataDaMostrare) {
    schermataDaMostrare.classList.remove('nascosto');
  };
};
//vediamo la pagina iniziale giusta grazie alla classe css .nascosto assegnata alle 2 che vogliamo nascondere


/*[Manuel, Alessandro, Nicholas, Giuseppe e Gabriel]*/ 
//funzione mostra pagina iniziale
function mostraBenvenuto() {

  //creazione h1 della pagina
  const titoloInziale = document.createElement('h1');
  titoloInziale.classList.add('titoloInziale');
  titoloInziale.textContent = 'Benvenuto al Quiz! 🤗';

  //p di presentazione
  const introIniziale = document.createElement('p');
  introIniziale.classList.add('introIniziale');
  introIniziale.textContent = 'Metti alla prova le tue conoscenze di HTML, CSS e JavaScript. Per ogni domanda hai 20 secondi!';

  //creazione ul per appenderci i vari li
  const listaIstruzioni = document.createElement('ul');

  //creazione dei vari li per le diverse istruzioni
  const puntiLista = document.createElement('li');
  puntiLista.classList.add('puntiLista');
  puntiLista.textContent = 'Ogni domanda è a tempo e può ricevere una sola risposta.';

  const punto2 = document.createElement('li');
  punto2.classList.add('puntiLista');
  punto2.textContent = 'Una volta cliccata una risposta non si può cambiare.';

  const punto3 = document.createElement('li');
  punto3.classList.add('puntiLista');
  punto3.textContent = 'Il quiz dura circa 3 minuti.';

  //bottone per iniziare il quiz
  const bottoneInizia = document.createElement("button");
  bottoneInizia.classList.add('pulsantePrimario')
  bottoneInizia.textContent = "Inizia Quiz";
  bottoneInizia.id = "iniziaQuiz";

  //appendiamo i li a ul
  listaIstruzioni.appendChild(puntiLista);
  listaIstruzioni.appendChild(punto2);
  listaIstruzioni.appendChild(punto3);
  
  //appendiamo tutto alla paginaIniziale
  paginaIniziale.appendChild(titoloInziale);
  paginaIniziale.appendChild(introIniziale);
  paginaIniziale.appendChild(listaIstruzioni);
  paginaIniziale.appendChild(bottoneInizia);

  //listener per il click del bottone che fa iniziare le domande
  bottoneInizia.addEventListener("click", function () {
    schermataAttiva = "quiz";
    mostraSchermataGiusta("domande");
    caricaProssimaDomanda();
  });
}



/*function mostraBenvenuto() {
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
    caricaProssimaDomanda();
  });
}*/

mostraBenvenuto();

//NICHOLAS
function mescolaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {        // usiamo Math.floor() per arrotondare per difetto e rendere il numero un  intero
    //math.random() lu usiamo per estrarre il numero decimale casuale e lo moltiplichiamo per i + 1 altrimenti non peschiamo l'ultimo elemento 
    const j = Math.floor(Math.random() * (i + 1)); //usata come indice casuale  usiamo i + 1 in modo da poter estrarre l'ultimo elemento dell'array 
    [array[i], array[j]] = [array[j], array[i]]; //prendiamo l'ultimoo elemento dell array e lo scambiamo di posto con un elemento con indice j (j-pescata casualmente)
  }                                              //al secondo giro prendiamo il penultimo e cosi via
  return array;
}
// Creiamo una copia e la mescoliamo subito all'avvio della pagina
let domandeMischiate = mescolaArray([...quizDomande]);
//trasformiano l array con .map() utilizzando mescolaArray anche sulle risposte
domandeMischiate = domandeMischiate.map(domanda => ({
  ...domanda,
  opzioni: mescolaArray([...domanda.opzioni])
}));
console.log(domandeMischiate);





function caricaProssimaDomanda() { //NICHOLAS
  if (indiceDomanda <= 9) {  // stampiamo solo le prime 10 domande 
    const domandaCorrente = domandeMischiate[indiceDomanda];  // Prende la domanda corrente
    tempoRestante = domandaCorrente.tempo //impostiamo il tempo della domanda giusta
    console.log(`Domanda: "${domandaCorrente.domanda}" | Tempo: ${tempoRestante}s`); // console di controllo
    renderQuiz();
    // Avvia il timer usando il tempo specifico della domandaCorrente
    avviaTimer(domandaCorrente.tempo, () => {    //richiama AvviaQuizTimer che a sua volta richiama caricaProssimaDomanda fino ad uscire dall if 
      console.log("Tempo scaduto per questa domanda!"); //Controllo azzeramento timer
      gestisciTempoScaduto(); // gestisce il btn che si ullima se non dai risposta in contatore e richiama la prossima domanda
    });
  } else {
    //controllo fine array
    schermataFinale();
    mostraSchermataGiusta('paginaFinale');

  }
}



//NICHOLAS                                             // primo parametro = quanti secondi sono passati
function avviaTimer(durataInSecondi, onTempoScaduto) {  //secondo parametro = funzione da richiamare allo scadere del tempo overo caricaProssimaDomanda
  fermaTimer();
  tempoRestante = durataInSecondi;
  console.log(`Timer avviato: ${tempoRestante} secondi`);

  timerIntervallo = setInterval(() => {  //ripete il codice ogni millisecondo indicato a fine funzione ogni 1000ms viene ripetuta la funzione nel blocco
    tempoRestante--;
    console.log(`Tempo restante: ${tempoRestante}s`);

    const elementoTimer = document.querySelector('.tempoRimasto');  // assegnare classe al timer o aggiornare se ggia ha una classe
    if (elementoTimer) {
      elementoTimer.textContent = `${tempoRestante}s`
    }
    if (tempoRestante <= 5) {
      elementoTimer.classList.add('tempoRosso')  //cambiare con classe creata in css per il timer quasi scaduto
    }

    if (tempoRestante <= 0) {  //
      fermaTimer();

      if (typeof onTempoScaduto === 'function') {
        onTempoScaduto();  //richiamiamo funzione anonima per incremento e passare alla prossima domanda richiama caricaProssimaDomanda allo scadere del timer
      }
    }
  }, 1000);
}

// Funzione per fermare/azzerare il timer
function fermaTimer() { //NICHOLAS
  if (timerIntervallo) {
    clearInterval(timerIntervallo); //blocca il timer
    timerIntervallo = null;  //usiamo null per svuotare la variante 
  }
};

// illumina risposta esatta allo scadere se nessun btn e stato premuto e passa alla prossima domanda funzione da richiamare in caricaProssimaDomanda
function gestisciTempoScaduto() {  //NICHOLAS
  let domanda = domandeMischiate[indiceDomanda];
  const tuttiIBottoni = document.querySelectorAll('.rispostaQuiz');  //selezioniamo tutti i btn cambiare classe con la classe assegnata da francesco in renderQuiz()

  tuttiIBottoni.forEach(btn => {
    btn.disabled = true; // disattiva i btn
  });
  //possibilita' di unire i due forEach
  tuttiIBottoni.forEach(btn => {   //assegna classe cerretto per illuminare risposta giusta allo scadere
    if (btn.dataset.testoRisposta === domanda.rispostaCorretta) {  //verifichiamo la risposta giusta e gli diamo la classe
      btn.classList.add('corretta'); //cambiare col nome della classe assegnata alle risposte corrette
    }
  });
  // Aspetta 2 secondi e richiama caricaProssimaDomanda 
  setTimeout(() => {
    indiceDomanda++;
    caricaProssimaDomanda();
  }, 1500);
}


//FRANCESCO
// Creo una costante per selezionare il contenitore main html

function gestisciRisposta(bottone, rispostaCliccata) {
  fermaTimer();

  const tuttiIBottoni = document.querySelectorAll('.rispostaQuiz');

  let domanda = domandeMischiate[indiceDomanda];

  tuttiIBottoni.forEach(btn => {
    btn.disabled = true; //blocca tutti i click seguenti
  });

  if (rispostaCliccata === domanda.rispostaCorretta) {
    bottone.classList.add('corretta');
    punteggio++;
  } else {
    bottone.classList.add('sbagliata');
    tuttiIBottoni.forEach(btn => {
      if (btn.dataset.testoRisposta === domanda.rispostaCorretta) {
        btn.classList.add('corretta');
      }
    });
  }
  setTimeout(() => {
    indiceDomanda++;
    caricaProssimaDomanda();
  }, ritardoFeedback);

}


function renderQuiz() {
  //costante per tenere traccia della domanda che verra visualizzata dall'array quizDomande
  let domandaCorrente = domandeMischiate[indiceDomanda];

  //Creazione degli elementi html per la visualizzazione
  const contenitore = document.createElement("div"); //contenitore che contiene tutta la visualizzazione della domanda
  const intestazione = document.createElement("div"); //Raggruppa contatore e timer
  const categoria = document.createElement("p"); // serve per mostrare la categoria della domanda corrente (facoltativo)
  const contatore = document.createElement("p"); //mostra il numero della domanda corrente esempio 3 di 5
  const timer = document.createElement("p"); // per il tempo rimanente alla risposta 
  const domanda = document.createElement("h2"); // Domanda
  const listaRisposte = document.createElement("div"); //possibili risposte

  /*[Manuel]*/
  contenitore.classList.add("quiz");
  intestazione.classList.add("intestazioneQuiz");
  contatore.classList.add("contatoreQuiz");
  timer.classList.add("tempoRimasto");      // già stilizzata da Gabriel in CSS
  categoria.classList.add("categoriaQuiz");
  domanda.classList.add("domandaQuiz");
  listaRisposte.classList.add("listaRisposte");

  // recupero la categoria della domanda corrente e la scrivo nell'elemento categoria creato in precedenza
  categoria.textContent = domandaCorrente.categoria;
  //aggiorno il contatore
  contatore.textContent = `DOMANDA ${indiceDomanda + 1} DI 10`;

  //visualizzazione del tempo 
  timer.textContent = `${domandaCorrente.tempo}s`;
  timer.textContent = `${tempoRestante}s`;
  //visualizzazione del testo della domanda 
  domanda.textContent = domandaCorrente.domanda;
  //raggruppo gli elementi nell'intestazione <div> 
  intestazione.append(contatore, timer);

  //raggruppo tutto nel contenitore principale <section>
  contenitore.append(
    intestazione,
    categoria,
    domanda,
    listaRisposte
  );

  //utilizzo foreach per eseguire la funzione una volta per ogni elemento "opzioni" dell'array opzioni
  //risposta = stringa 
  // indice = indice a cui corrisponde la risposta nell'array opzioni
  domandaCorrente.opzioni.forEach((risposta, indice) => {
    //creo gli elementi 
    const bottone = document.createElement("button"); // bottone 
    const lettera = document.createElement("span"); // visualizzazione della lettera, esempio A risposta. B risposta. ecc.
    const testoRisposta = document.createElement("span");

    //assgnazione classe ai bottoni

    bottone.classList.add('rispostaQuiz');
    lettera.classList.add('letteraRisposta');
    testoRisposta.classList.add('testoRisposta');
    bottone.dataset.testoRisposta = risposta //ogni bottone memorizza il contenuto che ha

    //in questa istruzione sto dicendo di prendere il codice asci della lettera A quindi 65, e di sommarci l'indice
    //quindi avremo che a indice zero corrisponde la A, a indice 1 corrisponde la B e cosi via
    lettera.textContent = String.fromCharCode(65 + indice);
    //scrivo la risposta nell'elemento span
    testoRisposta.textContent = risposta;

    //inserisco Lettera e risposta nel bottone 
    bottone.append(lettera, testoRisposta);

    //inserisco il bottone appena creato in listaRisposte <div>
    listaRisposte.appendChild(bottone);

    testoRisposta.textContent = risposta;

    bottone.addEventListener("click", () => {
      gestisciRisposta(bottone, risposta);
    });

  });
  sezioneDomande.replaceChildren(contenitore);
}
//contatore domande: Giuseppe
// const sezioneDomande = document.querySelector('#domande');
// const contatore = document.createElement('p');
// function aggiornaContatore() {
//     contatore.textContent = `Domanda ${indiceDomanda + 1} di ${quizDomande.length}`;
// }
// sezioneDomande.appendChild(contatore);
//Giuseppe function schermataFinale();
function schermataFinale() {
  const paginaFinale = document.querySelector('#paginaFinale')

  const totaleDomande = 10;
  const risposteCorrette = punteggio;
  const risposteSbagliate = totaleDomande - risposteCorrette;
  const percentuale = (risposteCorrette / totaleDomande) * 100;

  const titoloFinale = document.createElement('h2');
  titoloFinale.textContent = 'Risultati'
  titoloFinale.classList.add('titoloFinale');

  const sottotitoloFinale = document.createElement('p');
  sottotitoloFinale.textContent = 'Hai completato il quiz.'
  sottotitoloFinale.classList.add('sottotitoloFinale');


  const risultatoPercentuale = document.createElement('p');
  risultatoPercentuale.classList.add('percentualeFinale');
  risultatoPercentuale.textContent = `${percentuale}%`


const esitoFinale = document.createElement('p');
esitoFinale.classList.add('esitoFinale');
if ( punteggio >= 6 ) {
  esitoFinale.textContent = 'Promosso 🥳'
  esitoFinale.classList.add('esitoPromosso');
} if(punteggio < 6) {
  esitoFinale.textContent = 'Bocciato 😩'
  esitoFinale.classList.add('esitoBocciato');
}


const contenitoreCorrette = document.createElement('div');

const percentualeCorrette = document.createElement('span');
percentualeCorrette.textContent = 'Corrette'

const barraCorrette = document.createElement('div');
const barraInternaCorrette = document.createElement('div');
barraCorrette.classList.add('tracciaBarra');
barraInternaCorrette.classList.add('barraCorrette');
barraInternaCorrette.style.width = `${percentuale}%`

const risultatoDomandeCorrette = document.createElement('span');
risultatoDomandeCorrette.textContent = `${risposteCorrette} / 10`

const contenitoreSbagliate = document.createElement('div');

const percentualeSbagliate = document.createElement('span');
percentualeSbagliate.textContent = 'Sbagliate'

const barraSbagliate = document.createElement('div');
const barraInternaSbagliate = document.createElement('div');
barraSbagliate.classList.add('tracciaBarra');
barraInternaSbagliate.classList.add('barraSbagliate');
barraInternaSbagliate.style.width = `${100 - percentuale}%`

const risultatoDomandeSbagliate = document.createElement('span');
risultatoDomandeSbagliate.textContent = `${risposteSbagliate} / 10`

const bottoneRicomincia = document.createElement('button');
bottoneRicomincia.textContent = 'Ricomincia'
bottoneRicomincia.classList.add('pulsantePrimario');




barraCorrette.appendChild(barraInternaCorrette);
contenitoreCorrette.appendChild(percentualeCorrette);
contenitoreCorrette.appendChild(barraCorrette);
contenitoreCorrette.appendChild(risultatoDomandeCorrette);


barraSbagliate.appendChild(barraInternaSbagliate);
contenitoreSbagliate.appendChild(percentualeSbagliate);
contenitoreSbagliate.appendChild(barraSbagliate);
contenitoreSbagliate.appendChild(risultatoDomandeSbagliate);

paginaFinale.appendChild(titoloFinale);
paginaFinale.appendChild(sottotitoloFinale);

paginaFinale.appendChild(risultatoPercentuale);
paginaFinale.appendChild(esitoFinale);
paginaFinale.appendChild(contenitoreCorrette);
paginaFinale.appendChild(contenitoreSbagliate);

paginaFinale.appendChild(bottoneRicomincia);

bottoneRicomincia.addEventListener("click", function () {
  window.location.href = 'index.html'
  });
}
