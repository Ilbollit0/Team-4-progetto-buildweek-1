function mescolaArray(array) {  //NICHOLAS
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
domandeMischiate = domandeMischiate.map( domanda => ({
  ...domanda,
  opzioni:mescolaArray([...domanda.opzioni])
}));
console.log(domandeMischiate);
                                                      
                                                      



function caricaProssimaDomanda() { //NICHOLAS
  if (indiceDomanda <= 9) {  // stampiamo solo le prime 10 domande 
    renderQuiz();
        const domandaCorrente = domandeMischiate[indiceDomanda];  // Prende la domanda corrente
    console.log(`Domanda: "${domandaCorrente.domanda}" | Tempo: ${domandaCorrente.tempo}s`); // console di controllo
    // Avvia il timer usando il tempo specifico della domandaCorrente
     //funzione anonima usata in avviaQuizTime 
     avviaTimer(domandaCorrente.tempo, () => {    //richiama AvviaQuizTimer che a sua volta richiama caricaProssimaDomanda fino ad uscire dall if 
       console.log("Tempo scaduto per questa domanda!"); //Controllo azzeramento timer
       gestisciTempoScaduto(); // gestisce il btn che si ullima se non dai risposta in contatore e richiama la prossima domanda
     });
    } else {
        //controllo fine array
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
const tuttiIBottoni = document.querySelectorAll('.soluzione');  //selezioniamo tutti i btn cambiare classe con la classe assegnata da francesco in renderQuiz()
  
tuttiIBottoni.forEach(btn => {
    btn.disabled = true; // disattiva i btn
  });
 //possibilita' di unire i due forEach
  tuttiIBottoni.forEach(btn => {   //assegna classe cerretto per illuminare risposta giusta allo scadere
    if (btn.dataset.testoRisposta === domanda.rispostaCorretta) {  //verifichiamo la risposta giusta e gli diamo la classe
      btn.classList.add('corretto'); //cambiare col nome della classe assegnata alle risposte corrette
    }
  });
// Aspetta 2 secondi e richiama caricaProssimaDomanda 
  setTimeout(() => { 
    indiceDomanda++;
    caricaProssimaDomanda();
  }, 2000);
}

//FRANCESCO
// Creo una costante per selezionare il contenitore main html
const app = document.querySelector("#app");
function renderQuiz() {
    //costante per tenere traccia della domanda che verra visualizzata dall'array quizDomande
     let domandaCorrente = domandeMischiate[indiceDomanda];

    //Creazione degli elementi html per la visualizzazione
    const contenitore = document.createElement("section"); //contenitore che contiene tutta la visualizzazione della domanda
    const intestazione = document.createElement("div"); //Raggruppa contatore e timer
    const categoria = document.createElement("p"); // serve per mostrare la categoria della domanda corrente (facoltativo)
    const contatore = document.createElement("p"); //mostra il numero della domanda corrente esempio 3 di 5
    const timer = document.createElement("p"); // per il tempo rimanente alla risposta 
    const domanda = document.createElement("h2"); // Domanda
    const listaRisposte = document.createElement("div"); //possibili risposte

    // recupero la categoria della domanda corrente e la scrivo nell'elemento categoria creato in precedenza
    categoria.textContent = domandaCorrente.categoria;
    //aggiorno il contatore
    contatore.textContent = `DOMANDA ${indiceDomanda + 1} DI ${quizDomande.length}`;
    //visualizzazione del tempo 
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
        
        //in questa istruzione sto dicendo di prendere il codice asci della lettera A quindi 65, e di sommarci l'indice
        //quindi avremo che a indice zero corrisponde la A, a indice 1 corrisponde la B e cosi via
        lettera.textContent = String.fromCharCode(65 + indice);
        //scrivo la risposta nell'elemento span
        testoRisposta.textContent = risposta;

        //inserisco Lettera e risposta nel bottone 
        bottone.append(lettera, testoRisposta);
        //inserisco il bottone appena creato in listaRisposte <div>
        listaRisposte.appendChild(bottone);
    });

    app.replaceChildren(contenitore);
}

//contatore domande: Giuseppe
const sezioneDomande = document.querySelector('#domande');
const contatore = document.createElement('p');
function aggiornaContatore() {
  contatore.textContent = `Domanda ${indiceDomanda + 1} di ${quizDomande.length}`;
}
sezioneDomande.appendChild(contatore);