//FRANCESCO
// Creo una costante per selezionare il contenitore main html
const app = document.querySelector("#app");

function renderQuiz() {
    //costante per tenere traccia della domanda che verra visualizzata dall'array quizDomande
     const domandaCorrente = quizDomande[currentQuestion];

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
    contatore.textContent = `DOMANDA ${currentQuestion + 1} DI ${quizDomande.length}`;
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

renderQuiz();

//contatore domande: Giuseppe
const sezioneDomande = document.querySelector('#domande');
const contatore = document.createElement('p');
function aggiornaContatore() {
  contatore.textContent = `Domanda ${indiceDomanda + 1} di ${quizDomande.length}`;
}
sezioneDomande.appendChild(contatore);