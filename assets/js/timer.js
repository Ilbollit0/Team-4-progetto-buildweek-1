


function caricaProssimaDomanda() { //NICHOLAS
  if (indiceDomanda < domandeMischiate.length) {  // Controlla se l array è finito  fin quuando ci sono domande le mostra altrimenti entra nell'else
    const domandaCorrente = domandeMischiate[indiceDomanda];  // Prende la domanda corrente
    console.log(`Domanda: "${domandaCorrente.domanda}" | Tempo: ${domandaCorrente.tempo}s`); // console di controllo
    // Avvia il timer usando il tempo specifico della domandaCorrente
     //funzione anonima usata in avviaQuizTime 
     avviaTimer(domandaCorrente.tempo, () => {    //richiama AvviaQuizTimer che a sua volta richiama caricaProssimaDomanda fino ad uscire dall if 
       console.log("Tempo scaduto per questa domanda!"); //Controllo azzeramento timer
       indiceDomanda++;       // aumentiamo l indice per pescare la prossima domanda
       caricaProssimaDomanda(); // Ricarica la funzione per la nuova domanda
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
}