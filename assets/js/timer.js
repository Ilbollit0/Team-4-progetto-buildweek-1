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
