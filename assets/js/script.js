/*
  REGOLE
  - Codice in JavaScript moderno: solo const/let, mai var.
  - DOM: usa querySelector / querySelectorAll.
  - Eventi: usa addEventListener (mai onclick inline nell'HTML).
  - Pattern: stato → render → eventi.
*/

/*
  Array di domande.
  Ogni domanda è un oggetto con:
   - id: numero della domanda
   - categoria: HTML, CSS o JavaScript
   - domanda: testo della domanda
   - opzioni: array delle risposte possibili (string[])
   - rispostaCorretta: la risposta corretta (string)
   - tempo: secondi a disposizione
*/

const quizDomande = [
  {
    id: 1,
    categoria: "HTML",
    domanda:
      "Quale tag HTML rappresenta il livello di intestazione più importante nel contenuto di una pagina?",
    opzioni: ["<h6>", "<header>", "<h1>", "<head>"],
    rispostaCorretta: "<h1>",
    tempo: 20,
    soluzione: "<h1> è il titolo principale della pagina: i livelli vanno da <h1> (il più importante) a <h6> (il meno importante).",
  },
  {
    id: 2,
    categoria: "HTML",
    domanda:
      "Quale attributo del tag <img> contiene il testo alternativo mostrato se l'immagine non si carica?",
    opzioni: ["alt", "src", "title", "href"],
    rispostaCorretta: "alt",
    tempo: 20,
    soluzione: "L'attributo alt descrive l'immagine: appare se non si carica e viene letto dagli screen reader.",
  },
  {
    id: 3,
    categoria: "HTML",
    domanda:
      "Quale tag HTML si usa per creare una lista non ordinata (con i pallini)?",
    opzioni: ["<ol>", "<li>", "<dl>", "<ul>"],
    rispostaCorretta: "<ul>",
    tempo: 20,
    soluzione: "<ul> crea una lista non ordinata (puntata); <ol> è ordinata e <li> è solo la singola voce.",
  },
  {
    id: 4,
    categoria: "HTML",
    domanda:
      "Cosa indica la dichiarazione <!DOCTYPE html> all'inizio di una pagina?",
    opzioni: [
      "Che il browser deve eseguire JavaScript",
      "Che il documento è scritto in HTML5",
      "Il titolo della pagina",
      "La lingua della pagina",
    ],
    rispostaCorretta: "Che il documento è scritto in HTML5",
    tempo: 20,
    soluzione: "<!DOCTYPE html> dice al browser di interpretare la pagina come HTML5, evitando la modalità di compatibilità.",
  },
  {
    id: 5,
    categoria: "HTML",
    domanda:
      "Quale attributo rende obbligatorio un campo <input> prima dell'invio del form?",
    opzioni: ["mandatory", "validate", "required", "needed"],
    rispostaCorretta: "required",
    tempo: 20,
    soluzione: "required impedisce l'invio del form finché il campo non viene compilato.",
  },
  {
    id: 6,
    categoria: "HTML",
    domanda:
      "Quale tag HTML5 è pensato per il contenuto principale e unico di una pagina?",
    opzioni: ["<main>", "<section>", "<article>", "<div>"],
    rispostaCorretta: "<main>",
    tempo: 20,
    soluzione: "<main> racchiude il contenuto principale e unico della pagina, e ne dovrebbe esistere uno solo.",
  },
  {
    id: 7,
    categoria: "CSS",
    domanda:
      "Quale proprietà CSS controlla lo spazio tra il contenuto di un elemento e il suo bordo?",
    opzioni: ["margin", "border-spacing", "gap", "padding"],
    rispostaCorretta: "padding",
    tempo: 20,
    soluzione: "padding è lo spazio interno, tra il contenuto e il bordo; margin è lo spazio esterno.",
  },
  {
    id: 8,
    categoria: "CSS",
    domanda:
      "Quale valore di display trasforma un contenitore in un contenitore flessibile (flexbox)?",
    opzioni: ["block", "flex", "inline", "float"],
    rispostaCorretta: "flex",
    tempo: 20,
    soluzione: "display: flex trasforma il contenitore in flexbox e permette di allineare e distribuire i figli facilmente.",
  },
  {
    id: 9,
    categoria: "CSS",
    domanda:
      'Quale selettore CSS seleziona tutti gli elementi con class="bottone"?',
    opzioni: ["#bottone", "bottone", ".bottone", "*bottone"],
    rispostaCorretta: ".bottone",
    tempo: 20,
    soluzione: "Il punto (.) seleziona per classe, mentre # seleziona per id.",
  },
  {
    id: 10,
    categoria: "CSS",
    domanda: "Quale proprietà CSS arrotonda gli angoli di un elemento?",
    opzioni: ["border-radius", "corner-style", "round-corner", "box-round"],
    rispostaCorretta: "border-radius",
    tempo: 20,
    soluzione: "border-radius arrotonda gli angoli; con il 50% su un quadrato si ottiene un cerchio.",
  },
  {
    id: 11,
    categoria: "CSS",
    domanda:
      "Quale pseudo-classe CSS si applica quando il mouse passa sopra un elemento?",
    opzioni: [":active", ":focus", ":visited", ":hover"],
    rispostaCorretta: ":hover",
    tempo: 20,
    soluzione: ":hover si attiva quando il puntatore del mouse passa sopra l'elemento.",
  },
  {
    id: 12,
    categoria: "CSS",
    domanda: "Cosa fa la regola box-sizing: border-box?",
    opzioni: [
      "Aggiunge un bordo a tutti gli elementi",
      "Include padding e bordo nella larghezza e nell'altezza dichiarate",
      "Toglie il margine all'elemento",
      "Rende l'elemento più grande del suo contenitore",
    ],
    rispostaCorretta:
      "Include padding e bordo nella larghezza e nell'altezza dichiarate",
    tempo: 20,
    soluzione: "Con border-box padding e bordo sono compresi nella width/height dichiarata, quindi le dimensioni non crescono.",
  },
  {
    id: 13,
    categoria: "JavaScript",
    domanda: "Quale metodo converte una stringa JSON in un oggetto JavaScript?",
    opzioni: [
      "JSON.stringify()",
      "JSON.object()",
      "JSON.parse()",
      "JSON.convert()",
    ],
    rispostaCorretta: "JSON.parse()",
    tempo: 20,
    soluzione: "JSON.parse() trasforma una stringa JSON in un oggetto; JSON.stringify() fa l'operazione inversa.",
  },
  {
    id: 14,
    categoria: "JavaScript",
    domanda: "Qual è il risultato dell'espressione '5' + 3 in JavaScript?",
    opzioni: ["'53'", "8", "NaN", "undefined"],
    rispostaCorretta: "'53'",
    tempo: 20,
    soluzione: "Se un operando di + è una stringa, JavaScript concatena invece di sommare, quindi '5' + 3 diventa '53'.",
  },
  {
    id: 15,
    categoria: "JavaScript",
    domanda: "Quale operatore confronta valore e tipo senza fare conversioni?",
    opzioni: ["==", "=", "!=", "==="],
    rispostaCorretta: "===",
    tempo: 20,
    soluzione: "=== confronta valore e tipo senza conversioni, mentre == converte i tipi prima di confrontare.",
  },
  {
    id: 16,
    categoria: "JavaScript",
    domanda:
      "Quale metodo degli array crea un nuovo array applicando una funzione a ogni elemento?",
    opzioni: ["forEach()", "map()", "filter()", "pop()"],
    rispostaCorretta: "map()",
    tempo: 20,
    soluzione: "map() restituisce un nuovo array con il risultato della funzione applicata a ogni elemento.",
  },
  {
    id: 17,
    categoria: "JavaScript",
    domanda:
      "Quale metodo restituisce il primo elemento della pagina che corrisponde a un selettore CSS?",
    opzioni: [
      "getElementsByClassName()",
      "getElement()",
      "querySelector()",
      "selectFirst()",
    ],
    rispostaCorretta: "querySelector()",
    tempo: 20,
    soluzione: "querySelector() accetta un selettore CSS e restituisce il primo elemento che corrisponde.",
  },
  {
    id: 18,
    categoria: "JavaScript",
    domanda:
      "Quale metodo collega una funzione a un evento (per esempio il click) di un elemento?",
    opzioni: ["addEventListener()", "onEvent()", "listen()", "attachClick()"],
    rispostaCorretta: "addEventListener()",
    tempo: 20,
    soluzione: "addEventListener() collega una funzione a un evento (click, input, ecc.) di un elemento.",
  },
  {
    id: 19,
    categoria: "JavaScript",
    domanda: "Quale funzione ripete un'azione a intervalli regolari di tempo?",
    opzioni: ["setTimeout()", "repeat()", "delay()", "setInterval()"],
    rispostaCorretta: "setInterval()",
    tempo: 20,
    soluzione: "setInterval() ripete la funzione a intervalli regolari; setTimeout() la esegue una sola volta.",
  },
  {
    id: 20,
    categoria: "JavaScript",
    domanda: "Cosa restituisce Math.random()?",
    opzioni: [
      "Un intero casuale tra 0 e 10",
      "Un numero decimale casuale tra 0 (incluso) e 1 (escluso)",
      "Un array mescolato",
      "Un numero casuale tra 1 e 100",
    ],
    rispostaCorretta:
      "Un numero decimale casuale tra 0 (incluso) e 1 (escluso)",
    tempo: 20,
    soluzione: "Math.random() restituisce un decimale tra 0 (incluso) e 1 (escluso).",
  },
];
//array in cui pushare risposte cliccate
let arrayRisposte = [];
/* Costanti del quiz */
const ritardoFeedback = 1500; // ms di attesa dopo risposta prima di avanzare
const sezioneDomande = document.querySelector('#domande');
const paginaIniziale = document.querySelector('#paginaIniziale');
const paginaFinale = document.querySelector('#paginaFinale');

/* Stato globale */
let indiceDomanda = 0; //usato per caricaProssimaDomanda
let punteggio = 0;
let timerIntervallo = null;
let tempoRestante = 0;

//NICHOLAS
//le section in index.html hanno tutte la classe (schermata); quella del quiz e quella finale partono con la classe (nascosto)
//la classe nascosto in css ha display: none;
function mostraSchermataGiusta(idSchermata) {
  //FUNZIONE PER CAMBIARE SCHERMATA IN SPA PASSARE ID DELLA SCHERMATA
  const tutteLeSchermate = document.querySelectorAll('.schermata');
  tutteLeSchermate.forEach((schermata) => {
    //assegniamo la classe per nascondere tutte le schermate
    schermata.classList.add('nascosto');
  });
  const schermataDaMostrare = document.getElementById(idSchermata);
  if (schermataDaMostrare) {
    schermataDaMostrare.classList.remove('nascosto'); //rimuoviamo la classe che la nasconde a schermo
  }
}
//vediamo la pagina iniziale giusta grazie alla classe css .nascosto assegnata alle 2 che vogliamo nascondere

/*[Manuel, Alessandro, Nicholas, Giuseppe e Gabriel]*/
//funzione mostra pagina iniziale
function mostraBenvenuto() {
  //creazione h1 della pagina
  const titoloIniziale = document.createElement('h1');
  titoloIniziale.classList.add('titoloIniziale');
  titoloIniziale.textContent = 'Benvenuto al Quiz! 🤗';

  //p di presentazione
  const introIniziale = document.createElement('p');
  introIniziale.classList.add('introIniziale');
  introIniziale.textContent =
    'Metti alla prova le tue conoscenze di HTML, CSS e JavaScript. Per ogni domanda hai 20 secondi!';

  //creazione ul per appenderci i vari li
  const listaIstruzioni = document.createElement('ul');
  listaIstruzioni.classList.add('regoleIniziali');

  //creazione dei vari li per le diverse istruzioni
  const puntiLista = document.createElement('li');
  puntiLista.classList.add('puntiLista');
  puntiLista.textContent =
    'Ogni domanda è a tempo e può ricevere una sola risposta.';

  const punto2 = document.createElement('li');
  punto2.classList.add('puntiLista');
  punto2.textContent = 'Una volta cliccata una risposta non si può cambiare.';

  const punto3 = document.createElement('li');
  punto3.classList.add('puntiLista');
  punto3.textContent = 'Il quiz dura circa 3 minuti.';

  //bottone per iniziare il quiz
  const bottoneInizia = document.createElement('button');
  bottoneInizia.classList.add('pulsantePrimario');
  bottoneInizia.textContent = 'Inizia Quiz';
  bottoneInizia.id = 'iniziaQuiz';

  //appendiamo i li a ul
  listaIstruzioni.appendChild(puntiLista);
  listaIstruzioni.appendChild(punto2);
  listaIstruzioni.appendChild(punto3);

  //appendiamo tutto alla paginaIniziale
  paginaIniziale.appendChild(titoloIniziale);
  paginaIniziale.appendChild(introIniziale);
  paginaIniziale.appendChild(listaIstruzioni);
  paginaIniziale.appendChild(bottoneInizia);

  //listener per il click del bottone che fa iniziare le domande
  bottoneInizia.addEventListener('click', function () {
    mostraSchermataGiusta('domande');
    caricaProssimaDomanda();
  });
}

mostraBenvenuto();

//NICHOLAS
function mescolaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // usiamo Math.floor() per arrotondare per difetto e rendere il numero un intero
    //math.random() lo usiamo per estrarre il numero decimale casuale e lo moltiplichiamo per i + 1 altrimenti non peschiamo l'ultimo elemento
    const j = Math.floor(Math.random() * (i + 1)); //usata come indice casuale  usiamo i + 1 in modo da poter estrarre l'ultimo elemento dell'array
    [array[i], array[j]] = [array[j], array[i]]; //prendiamo l'ultimo elemento dell array e lo scambiamo di posto con un elemento con indice j (j-pescata casualmente)
  } //al secondo giro prendiamo il penultimo e cosi via
  return array;
}
// Creiamo una copia e la mescoliamo subito all'avvio della pagina
let domandeMischiate = mescolaArray([...quizDomande]);
//trasformiamo l array con .map() utilizzando mescolaArray anche sulle risposte
domandeMischiate = domandeMischiate.map((domanda) => ({
  ...domanda,
  opzioni: mescolaArray([...domanda.opzioni]),
}));
console.log(domandeMischiate);

function caricaProssimaDomanda() {
  //NICHOLAS
  if (indiceDomanda <= 9) {
    // stampiamo solo le prime 10 domande
    const domandaCorrente = domandeMischiate[indiceDomanda]; // Prende la domanda corrente
    tempoRestante = domandaCorrente.tempo; //impostiamo il tempo della domanda giusta
    console.log(
      `Domanda: "${domandaCorrente.domanda}" | Tempo: ${tempoRestante}s`,
    ); // console di controllo
    renderQuiz();
    // Avvia il timer usando il tempo specifico della domandaCorrente
    avviaTimer(domandaCorrente.tempo, () => {
      //allo scadere avviaTimer chiama questa funzione, che richiama caricaProssimaDomanda fino ad uscire dall if
      console.log('Tempo scaduto per questa domanda!'); //Controllo azzeramento timer
      gestisciTempoScaduto(); // illumina la risposta giusta se non hai risposto in tempo e richiama la prossima domanda
    });
  } else {
    //controllo fine array
    schermataFinale();
    mostraSchermataGiusta('paginaFinale');
  }
}

//NICHOLAS
// primo parametro = durata della domanda in secondi, secondo = funzione da chiamare allo scadere
function avviaTimer(durataInSecondi, onTempoScaduto) {
  fermaTimer();
  tempoRestante = durataInSecondi;

  timerIntervallo = setInterval(() => {
    tempoRestante--;

    //selezioniamo il numero e il cerchio (cerchioTimer nasce QUI)
    const elementoTimer = document.querySelector('.tempoRimasto');
    const cerchioTimer = document.querySelector('.timerRotondo');

    if (elementoTimer && cerchioTimer) {
      // aggiorniamo il testo
      elementoTimer.textContent = `${tempoRestante}s`;

      // scegliamo il colore in base al tempo che resta
      let colore = '#2a7d57';
      if (tempoRestante <= 10) {
        colore = '#ecc115';
        elementoTimer.classList.add('tempoGiallo');
      }
      if (tempoRestante <= 5) {
        colore = '#d32f2f';
        elementoTimer.classList.remove('tempoGiallo');
        elementoTimer.classList.add('tempoRosso');
      }

      //il colore cambia in base al tempo che scorre
      const percentualeGrigia = 100 - (tempoRestante / durataInSecondi) * 100;
      cerchioTimer.style.background = `conic-gradient(#e2e4ec ${percentualeGrigia}%, ${colore} 0)`;
    }

    //controllo fine tempo
    if (tempoRestante <= 0) {
      fermaTimer();
      if (typeof onTempoScaduto === 'function') {
        onTempoScaduto();
      }
    }
  }, 1000);
}

//NICHOLAS
// Funzione per fermare/azzerare il timer
function fermaTimer() {
  if (timerIntervallo) {
    clearInterval(timerIntervallo); //blocca il timer
    timerIntervallo = null; //usiamo null per svuotare la variabile
  }
}

//NICHOLAS
// illumina risposta esatta allo scadere se nessun btn e stato premuto e passa alla prossima domanda, viene richiamata in caricaProssimaDomanda
function gestisciTempoScaduto() {
  let domanda = domandeMischiate[indiceDomanda];
  const tuttiIBottoni = document.querySelectorAll('.rispostaQuiz'); //selezioniamo tutti i btn creati in renderQuiz()

  arrayRisposte.push({
    domandaFatta: domanda.domanda,
    rispostaUtente: 'Non hai risposto nel tempo dato',
    rispostaCorretta: domanda.rispostaCorretta,
    soluzione: domanda.soluzione
  });
  tuttiIBottoni.forEach((btn) => {
    btn.disabled = true; // disattiva i btn
    //verifichiamo la risposta giusta e gli diamo la classe corretta per illuminarla allo scadere
    if (btn.dataset.testoRisposta === domanda.rispostaCorretta) {
      btn.classList.add('corretta');
    }
  });
  // Aspetta 1,5 secondi e richiama caricaProssimaDomanda
  setTimeout(() => {
    indiceDomanda++;
    caricaProssimaDomanda();
  }, 1500);
}

//FRANCESCO
function gestisciRisposta(bottone, rispostaCliccata) {
  fermaTimer();

  const tuttiIBottoni = document.querySelectorAll('.rispostaQuiz');

  let domanda = domandeMischiate[indiceDomanda];

  //[Tutti insieme] push per mettere domanda dell'array mescolato, la risposta cliccata, la rispostaCorretta e la soluzione 
  //in un nuovo array da visualizzare nella pagina finale.
  arrayRisposte.push({
    domandaFatta: domanda.domanda,
    rispostaUtente: rispostaCliccata,
    rispostaCorretta: domanda.rispostaCorretta,
    soluzione: domanda.soluzione
  });

  console.log(arrayRisposte);

  tuttiIBottoni.forEach((btn) => {
    btn.disabled = true; //blocca tutti i click seguenti
  });
  if (rispostaCliccata === domanda.rispostaCorretta) {
    bottone.classList.add('corretta');
    punteggio++;
  } else {
    bottone.classList.add('sbagliata');
    tuttiIBottoni.forEach((btn) => {
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
  //variabile per tenere traccia della domanda che verra visualizzata dall'array domandeMischiate
  let domandaCorrente = domandeMischiate[indiceDomanda];

  //Creazione degli elementi html per la visualizzazione
  const contenitore = document.createElement('div'); //contenitore che contiene tutta la visualizzazione della domanda
  contenitore.classList.add('quiz');

  const intestazione = document.createElement('div'); //Raggruppa il contatore
  intestazione.classList.add('intestazioneQuiz');

  const categoria = document.createElement('p'); // serve per mostrare la categoria della domanda corrente (facoltativo)
  categoria.classList.add('categoriaQuiz');
  // recupero la categoria della domanda corrente e la scrivo nell'elemento categoria creato in precedenza
  categoria.textContent = domandaCorrente.categoria;

  const contatore = document.createElement('p'); //mostra il numero della domanda corrente esempio 3 di 10
  contatore.classList.add('contatoreQuiz');
  //aggiorno il contatore
  contatore.textContent = `DOMANDA ${indiceDomanda + 1} DI 10`;

  const timer = document.createElement('p')
  timer.classList.add('tempoRimasto'); // già stilizzata da Gabriel in CSS

  const containerTimer = document.createElement('div'); // per il tempo rimanente alla risposta
  containerTimer.classList.add('timerRotondo');

  const cerchioCentrale = document.createElement('div');
  cerchioCentrale.classList.add('cerchioCentrale');

  containerTimer.appendChild(cerchioCentrale)
  cerchioCentrale.appendChild(timer);
  /*[Manuel]*/
  const domanda = document.createElement('h2'); // Domanda
  domanda.classList.add('domandaQuiz');

  const listaRisposte = document.createElement('div'); //possibili risposte
  listaRisposte.classList.add('listaRisposte');

  //visualizzazione del tempo
  timer.textContent = `${tempoRestante}s`;
  //visualizzazione del testo della domanda
  domanda.textContent = domandaCorrente.domanda;
  //raggruppo gli elementi nell'intestazione <div>
  intestazione.appendChild(contatore);

  //raggruppo tutto nel contenitore principale <div>
  contenitore.appendChild(containerTimer);
  contenitore.appendChild(intestazione);
  contenitore.appendChild(categoria);
  contenitore.appendChild(domanda);
  contenitore.appendChild(listaRisposte);

  //utilizzo foreach per eseguire la funzione una volta per ogni elemento 'opzioni' dell'array opzioni
  //risposta = stringa
  // indice = indice a cui corrisponde la risposta nell'array opzioni
  domandaCorrente.opzioni.forEach((risposta, indice) => {
    //creo gli elementi
    const bottone = document.createElement('button'); // bottone
    const lettera = document.createElement('span'); // visualizzazione della lettera, esempio A risposta. B risposta. ecc.
    const testoRisposta = document.createElement('span');

    //assgnazione classe ai bottoni

    bottone.classList.add('rispostaQuiz');
    lettera.classList.add('letteraRisposta');
    testoRisposta.classList.add('testoRisposta');
    bottone.dataset.testoRisposta = risposta; //ogni bottone memorizza il contenuto che ha

    //in questa istruzione sto dicendo di prendere il codice asci della lettera A quindi 65, e di sommarci l'indice
    //quindi avremo che a indice zero corrisponde la A, a indice 1 corrisponde la B e cosi via
    lettera.textContent = String.fromCharCode(65 + indice);
    //scrivo la risposta nell'elemento span
    testoRisposta.textContent = risposta;

    //inserisco Lettera e risposta nel bottone
    bottone.append(lettera, testoRisposta);

    //inserisco il bottone appena creato in listaRisposte <div>
    listaRisposte.appendChild(bottone);

    bottone.addEventListener('click', () => {

      gestisciRisposta(bottone, risposta);

    });
  });
  sezioneDomande.replaceChildren(contenitore);
}

//Giuseppe (revisione team) function schermataFinale();
function schermataFinale() {
  // assegnazione costanti
  const totaleDomande = 10;
  const risposteCorrette = punteggio;
  const risposteSbagliate = totaleDomande - risposteCorrette; // calcolo risposte sbagliate
  const percentuale = (risposteCorrette / totaleDomande) * 100; // calcolo percentuale
  //creazione elementi con assegnazioni classi
  const titoloFinale = document.createElement('h2');
  titoloFinale.textContent = 'Risultati';
  titoloFinale.classList.add('titoloFinale');

  const sottotitoloFinale = document.createElement('p');
  sottotitoloFinale.textContent = 'Hai completato il quiz.';
  sottotitoloFinale.classList.add('sottotitoloFinale');

  const risultatoPercentuale = document.createElement('p');
  risultatoPercentuale.classList.add('percentualeFinale');
  risultatoPercentuale.textContent = `${percentuale}%`;

  // controllo esito quiz
  const esitoFinale = document.createElement('p');
  esitoFinale.classList.add('esitoFinale');
  if (punteggio >= 6) {
    esitoFinale.textContent = 'Promosso 🥳';
    esitoFinale.classList.add('esitoPromosso');
  } else {
    esitoFinale.textContent = 'Bocciato 😩';
    esitoFinale.classList.add('esitoBocciato');
  }

  //contenitore delle due righe con le barre
  const barreFinali = document.createElement('div');
  barreFinali.classList.add('barreFinali');

  //riga delle corrette: etichetta, barra, conteggio
  const contenitoreCorrette = document.createElement('div');
  contenitoreCorrette.classList.add('rigaBarra');

  const percentualeCorrette = document.createElement('span');
  percentualeCorrette.classList.add('etichettaBarra');
  percentualeCorrette.textContent = 'Corrette';

  const barraCorrette = document.createElement('div');
  barraCorrette.classList.add('tracciaBarra');

  const barraInternaCorrette = document.createElement('div');
  barraInternaCorrette.classList.add('riempimentoBarra', 'barraCorrette');
  barraInternaCorrette.style.width = `${percentuale}%`; //Percentuale di domande corrette

  const risultatoDomandeCorrette = document.createElement('span');
  risultatoDomandeCorrette.classList.add('conteggioBarra');
  risultatoDomandeCorrette.textContent = `${risposteCorrette} / 10`; // Numero risposte corrette

  //riga delle sbagliate: etichetta, barra, conteggio
  const contenitoreSbagliate = document.createElement('div');
  contenitoreSbagliate.classList.add('rigaBarra');

  const percentualeSbagliate = document.createElement('span');
  percentualeSbagliate.classList.add('etichettaBarra');
  percentualeSbagliate.textContent = 'Sbagliate';

  const barraSbagliate = document.createElement('div');
  const barraInternaSbagliate = document.createElement('div');
  barraSbagliate.classList.add('tracciaBarra');
  barraInternaSbagliate.classList.add('riempimentoBarra', 'barraSbagliate');
  barraInternaSbagliate.style.width = `${100 - percentuale}%`; // Calcola la differenza tra larghezza massima dell'elemento (100) meno la % delle risposte corrette

  const risultatoDomandeSbagliate = document.createElement('span');
  risultatoDomandeSbagliate.classList.add('conteggioBarra');
  risultatoDomandeSbagliate.textContent = `${risposteSbagliate} / 10`; // Numero risposte sbagliate
  // Creazione bottone, appendChild
  const bottoneRicomincia = document.createElement('button');
  bottoneRicomincia.textContent = 'Ricomincia';
  bottoneRicomincia.classList.add('pulsantePrimario');

  const bottoneRisposte = document.createElement('button');
  bottoneRisposte.classList.add('bottoneRisposte')
  bottoneRisposte.textContent = `Riepilogo risposte`

  let riepilogoVisibile = false; // stato attuale
  const schermataRisultati = mostraRisultati(); //mostraRiultati() ritorna il div contenitoreArray in modo da assegnargli una classe
  schermataRisultati.classList.add('nascosto');//classe di partenza per nascondere la schermata
  bottoneRisposte.addEventListener('click', () => {
    riepilogoVisibile = !riepilogoVisibile; // il ! si usa per invertire il valore di riepilogoVisibile

    if (riepilogoVisibile) {
      schermataRisultati.classList.remove('nascosto'); //rimozione della classe al primo click
      bottoneRisposte.textContent = 'Nascondi riepilogo';
    } else {
      schermataRisultati.classList.add('nascosto'); //assegnamo nuovamnete la classe al secondo click
      bottoneRisposte.textContent = 'Mostra riepilogo';
    }
  });

  barraCorrette.appendChild(barraInternaCorrette);
  contenitoreCorrette.appendChild(percentualeCorrette);
  contenitoreCorrette.appendChild(barraCorrette);
  contenitoreCorrette.appendChild(risultatoDomandeCorrette);

  barraSbagliate.appendChild(barraInternaSbagliate);
  contenitoreSbagliate.appendChild(percentualeSbagliate);
  contenitoreSbagliate.appendChild(barraSbagliate);
  contenitoreSbagliate.appendChild(risultatoDomandeSbagliate);

  barreFinali.appendChild(contenitoreCorrette);
  barreFinali.appendChild(contenitoreSbagliate);

  paginaFinale.appendChild(titoloFinale);
  paginaFinale.appendChild(sottotitoloFinale);
  paginaFinale.appendChild(risultatoPercentuale);
  paginaFinale.appendChild(esitoFinale);
  paginaFinale.appendChild(barreFinali);

  paginaFinale.appendChild(bottoneRicomincia);
  paginaFinale.appendChild(bottoneRisposte);

  //Bottone che reindirizza a index.html ricaricando la pagina da capo
  bottoneRicomincia.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  paginaFinale.appendChild(schermataRisultati);
}

//funzione per vedere le domande, risposte e risposte corrette del quiz
function mostraRisultati() {
  const contenitoreArray = document.createElement('div');
  contenitoreArray.classList.add('contenitoreArray');

  const risposteDate = document.createElement('h3');
  risposteDate.classList.add('risposteDate');
  risposteDate.textContent = 'Ecco il riepilogo delle tue domande con le relative risposte!';

  //creazione lista ordinata
  const listaRiepilogativa = document.createElement('ol');
  listaRiepilogativa.classList.add('listaRiepilogativa');

  //usato per dare ad ogni li il contenuto
  arrayRisposte.forEach((unita) => {
    const liInterno = document.createElement('li');
    liInterno.classList.add('liInterno');
    if (unita.rispostaUtente === unita.rispostaCorretta) { //confronta la risposta data dall'utente con quella corretta per dare lo sfondo al li
      liInterno.classList.add('sfondoVerde');
    } else {
      liInterno.classList.add('sfondoRosso');
    }

    const testoDomanda = document.createElement('p');
    testoDomanda.classList.add('testoDomanda');
    testoDomanda.textContent = `${unita.domandaFatta}`;

    //div che contiene i primi 2 span
    const divPrimoSpan = document.createElement('div')
    divPrimoSpan.classList.add('divSpan')

    const spanLi = document.createElement('span')
    spanLi.classList.add('spanLi')
    spanLi.textContent = 'La tua risposta è: ';

    const rispostaData = document.createElement('span');
    rispostaData.classList.add('rispostaData');
    rispostaData.textContent = `${unita.rispostaUtente}`;

    //div che contiene i secondi 2 span
    const divSecondoSpan = document.createElement('div')
    divSecondoSpan.classList.add('divSpan')

    const spanLi2 = document.createElement('span')
    spanLi2.classList.add('spanLi')
    spanLi2.textContent = 'La soluzione è: ';

    const soluzioneCorretta = document.createElement('span');
    soluzioneCorretta.classList.add('soluzioneCorretta');
    soluzioneCorretta.textContent = `${unita.soluzione}`;

    divPrimoSpan.appendChild(spanLi);
    divPrimoSpan.appendChild(rispostaData);

    divSecondoSpan.appendChild(spanLi2);
    divSecondoSpan.appendChild(soluzioneCorretta);

    liInterno.appendChild(testoDomanda);
    liInterno.appendChild(divPrimoSpan);
    liInterno.appendChild(divSecondoSpan);

    listaRiepilogativa.appendChild(liInterno);

    contenitoreArray.appendChild(risposteDate);
    contenitoreArray.appendChild(listaRiepilogativa);
  });

  return contenitoreArray; //ritorna il div che richiamiamo nella funzione precedente
}
