# Build Week 1 – Quiz SPA "light" (Epicode)

## Obiettivo

Realizzare una versione semplificata del quizone Epicode: un'app di quiz con **timer**, **calcolo del punteggio** e **schermata dei risultati**.

## Flusso dell'app

1. **Welcome**: schermata di benvenuto
2. **Quiz**: sequenza di domande con timer e feedback immediato
3. **Risultati**: esito finale con percentuali, numeri e barre

## Requisiti funzionali

### Domande

- Più risposte per domanda, con feedback immediato: risposta sbagliata in **rosso**, corretta in **verde**
- Contatore di progresso (es. "Domanda 3/10")

### Timer

- Conto alla rovescia su ogni domanda
- Negli ultimi secondi (es. ≤ 5) diventa **rosso**
- A zero: il timer si ferma, le risposte non sono più cliccabili e viene mostrata quella giusta

### Risultati

- Percentuale di risposte corrette con esito promosso/bocciato (es. 8/10 = 80%)
- Numero di risposte corrette e sbagliate
- Due barre colorate (corrette/sbagliate)
- Pulsante **"Ricomincia"** che azzera domande, punteggio, timer e risultati

### Vincoli tecnici

- **SPA**: l'URL resta sempre `index.html`. Le schermate sono viste renderizzate da JS, non pagine separate
- **Niente localStorage**: lo stato vive in memoria nel JavaScript
- **Hover** obbligatorio su tutti gli elementi cliccabili
- **Sfondo e logo Epicode** obbligatori. I colori devono essere coerenti con il brand, lo stile è libero

## Starter pack

- `index.html` con un contenitore (`main` / `#app`) dove avviene il rendering
- Sfondo, logo e CSS di base
- File JS con:
  - array di circa 10 domande
  - variabili di supporto
  - una variabile di stato che indica quale vista mostrare (welcome / quiz / risultati)
- Funzioni suggerite: `renderWelcome`, `renderQuiz`, `renderResults`, gestione del timer (start/stop/timeout), `advance`, conteggio delle domande svolte

> La struttura è indicativa: nomi, organizzazione e domande si possono personalizzare.

## Personalizzazioni facoltative

- **Shuffle**: ordine casuale di domande e risposte a ogni restart (`Math.random`, `Math.round`)
- **Domande custom**: aggiungere, togliere o modificare (es. portarle a 15), gestendo le percentuali decimali
- **Timer grafico**: progress bar, spinner o altra rappresentazione
- **Grafici risultati**: a barre o a torta con **Chart.js**
- **Rating**: feedback di gradimento (es. stelline)
- **Grafica libera**: tutto modificabile tranne sfondo e logo

## Organizzazione del gruppo

### Ruoli

- **Team leader** (a rotazione, *primus inter pares*): coordina il lavoro, cerca compromessi nel gruppo e tiene i contatti con il docente per le questioni organizzative
- Suddivisione tipica:
  - 2–3 persone su CSS/grafica
  - 2–3 persone su JavaScript/logica
  - 1 persona su Git/organizzazione repo
  - altri ruoli secondo necessità (documentazione, test)

### Metodo di lavoro

- **Lunedì**: niente codice, ci si organizza (chi fa cosa e piano giorno per giorno)
- Piano con obiettivi per martedì, mercoledì e giovedì
- **Stand-up ogni giorno alle 17:00–17:15** in plenaria: cosa è stato fatto, criticità, piano per il giorno dopo
- Il docente fa da project manager:
  - incontri pomeridiani registrati
  - disponibile anche al mattino, ma quegli incontri non vengono registrati

## Strumenti di collaborazione

- **Git/GitHub**: una sola repo per gruppo, con branch personali e merge sul main. Conviene che **una sola persona** gestisca repo, branch, merge e PR
- **Live Share** (VS Code): editing condiviso in tempo reale. In alternativa basta GitHub con i collaboratori, equivalente per la consegna
- **Discord**: canali di gruppo, con il docente invitato nelle stanze

## README

Molto importante. Va impostato come quello delle grandi librerie (es. Angular) e deve spiegare:

- cosa fa il progetto
- come lo fa: architettura, tecnologie, scelte tecniche
- snippet di codice significativi

Va scritto **man mano**, non alla fine. Lo cura chi segue la struttura del quiz oppure un responsabile della documentazione.

## Consegna

- **Scadenza: venerdì ore 16:30**, seguita dalla presentazione del lavoro (modalità da definire)
- Sezione "Consegna Build Week 1" in piattaforma, con uno slot per team (1–5)
- **Un solo link** per gruppo: la repo associata all'account di chi gestisce Git
- Il link si può caricare da **venerdì mattina**
- Dopo la consegna, ognuno può fare fork o clone della repo sul proprio profilo GitHub

---

## Decisioni del team

> Sezione aggiunta dal Team 4. Il brief qui sopra resta quello originale di Epicode.
> Convenzioni e ruoli sono quelli scelti dal team; i ruoli sono definiti *per il momento* e possono cambiare.
> Aggiornata il 30/10, stato finale, con lo stato reale del codice: le voci che erano proposte e sono state adottate non hanno più l'etichetta **(proposta)**.

### Convenzioni di codice

Decise dal team, non si cambiano:

- **camelCase** per tutto.
- **Variabili, funzioni, costanti e chiavi degli oggetti in italiano**, con nomi sensati rispetto a ciò per cui servono (`punteggio`, non `p`).
- **Commenti con il nome di chi li scrive**, per sapere a chi chiedere in caso di bisogno: `// [Nicholas] ferma il timer quando scade il tempo`. Stesso formato in HTML (`<!-- [Luca] ... -->`) e CSS (`/* [Manuel] ... */`).

Regole già presenti nello starter (il commento `REGOLE` in cima a `script.js` è stato tolto il 30/10, ma il codice le rispetta):

- solo `const` / `let`, mai `var`;
- `querySelector` / `querySelectorAll` per il DOM;
- `addEventListener`, mai `onclick` inline nell'HTML;
- pattern **stato → render → eventi**.

**Nomi di riferimento.** Per non avere sette nomi diversi per la stessa cosa. La colonna "Nome italiano" dice cosa è stato davvero usato in `script.js`:

| Starter | Nome italiano | A cosa serve |
|---|---|---|
| `QUESTIONS` | `quizDomande`               | Array con le 20 domande del quiz: ogni elemento è un oggetto. Il quiz lavora su una copia mescolata, `domandeMischiate` |
| `question` | `domanda`                    | Chiave dell'oggetto: il testo della domanda |
| `correct_answer` | `rispostaCorretta`     | Chiave dell'oggetto: la risposta giusta, usata per la verifica e per colorare di verde |
| `incorrect_answers` | `opzioni`           | Chiave dell'oggetto: array con **tutte e quattro** le risposte, la corretta compresa, mescolato a ogni partita (al posto di `risposteSbagliate`) |
| `TOTAL_QUESTIONS` | *(non usata)*         | Il numero di domande (10) è scritto a mano in `caricaProssimaDomanda`, `renderQuiz` e `schermataFinale`; `numeroDomande` non esiste |
| `PASS_THRESHOLD` | *(non usata)*          | Soglia per essere **Promosso**: nel codice è scritta a mano in `schermataFinale` (6 risposte giuste su 10). `sogliaPromozione` è stata eliminata |
| `FEEDBACK_DELAY` | `ritardoFeedback`      | Millisecondi di attesa dopo una risposta prima di passare alla successiva (1500): lascia il tempo di vedere verde o rosso |
| *(nuovo)* | `soluzione`                   | Chiave di ogni domanda: la spiegazione breve della risposta giusta, mostrata nel riepilogo finale |
| *(nuovo)* | `arrayRisposte`               | Array che si riempie durante il quiz: per ogni domanda `domandaFatta`, `rispostaUtente`, `rispostaCorretta` e `soluzione`. Se il tempo scade, `rispostaUtente` vale «Non hai risposto nel tempo dato». Serve a costruire il riepilogo |
| `TIMER_DURATION` | `tempo`                | Chiave di ogni domanda: secondi a disposizione (oggi 20 per tutte). Al posto di `durataTimer` e di `timer` |
| `currentScreen` | *(non usata)*           | Quale schermata è visibile lo decide `mostraSchermataGiusta(id)` con la classe `nascosto`; `schermataAttiva` è stata eliminata |
| `currentQuestion` | `indiceDomanda`       | Posizione della domanda corrente nell'array: parte da 0, quindi a video si mostra +1 |
| `score` | `punteggio`                     | Numero di risposte corrette finora: a fine quiz serve per percentuale e barre |
| `timerId` | `timerIntervallo`             | Identificatore del timer attivo, per poterlo fermare; `null` se non ce n'è uno in corso. Accanto c'è `tempoRestante`, i secondi che mancano |
| `renderWelcome` | `mostraBenvenuto`       | Mostra la schermata iniziale: titolo, introduzione e pulsante Inizia |
| `startTimer` | `avviaTimer`               | Avvia il conto alla rovescia della domanda |
| `handleAnswer` | `gestisciRisposta`       | Gestisce il click su una risposta: la salva in `arrayRisposte`, verifica se è corretta, la colora e aggiorna il punteggio |
| *(nuovo)* | `mostraRisultati`             | Costruisce l'elenco del riepilogo (domanda, risposta data, soluzione) da `arrayRisposte`; lo mostra o nasconde il pulsante **Riepilogo risposte** della pagina finale |

### Cosa dobbiamo realizzare

- [x] Modificare gli oggetti dell'array delle domande: aggiungere `id` e il tempo (nel codice la chiave si chiama `tempo`)
- [x] Timer
- [x] Contatore interno delle domande
- [x] Lista delle domande con le risposte abbinate (fatta con `div` e bottoni, non con `ul` → `li`)
- [x] Verifica della risposta e feedback a video: corretta o sbagliata
- [x] Schermata iniziale con benvenuto e pulsante **Inizia**
- [x] Schermata finale con pulsante per tornare alla pagina principale (nel brief è **Ricomincia**: nel codice ricarica `index.html`, quindi azzera tutto e torna alla welcome)
- [x] Risultato finale del test

### File JavaScript

I file erano separati solo per dividersi il lavoro. **Il 27/10 sono stati uniti in `assets/js/script.js`**, che oggi è l'unico JavaScript caricato da `index.html`; gli altri file sono stati eliminati. Questa era la divisione:

| File (storico) | Contenuto | Responsabile |
|---|---|---|
| `impostazioni.js` | Impostazioni globali: costanti, stato condiviso, array delle domande con `id` e tempo | Manuel |
| `timer.js` | Conto alla rovescia: avvio, stop, tempo scaduto | Nicholas |
| `schermate.js` | Schermata iniziale e schermata finale | Alessandro, Giuseppe |
| `domande.js` | Lista domande e risposte, con verifica | Francesco, Manuel |

### Ruoli

Definiti per il momento.

| Persona | Ruolo | Cosa ha fatto |
|---|---|---|
| Gabriel | Operatore speciale Git, CSS | Tutta la parte GitHub (repo, branch, pull request, merge); CSS del timer rotondo; ripristino di `<!DOCTYPE html>` e `lang` in `index.html`; pulizia dei commenti dello starter in `script.js` |
| Nicholas | Timer | Cambio schermata, timer (logica e struttura dell'anello), mescolamento di domande e risposte, passaggio alla domanda successiva |
| Luca | README, CSS | README, istruzioni progetto, CSS di pagina iniziale e finale, bozza delle 20 domande; pulizia finale di codice e commenti e barre finali su tre colonne (29/10) |
| Alessandro | Schermate e contatore giuste/sbagliate | Prima versione della pagina iniziale; il 29/10 correzione del nome della classe del titolo, tolto il codice commentato e commenti nella schermata finale |
| Francesco | Lista domande e risposte con verifica | `renderQuiz` e verifica della risposta (`gestisciRisposta`) |
| Giuseppe | Contatore interno, contatore finale | Contatore delle domande, schermata finale con percentuale, esito e barre, pulsante che mostra e nasconde il riepilogo (30/10) |
| Manuel | CSS, lista domande e risposte con verifica | Struttura HTML, unione dei file in `script.js`, classi e CSS del quiz, pagina iniziale e pulsanti, messa a punto del timer; il 30/10 soluzioni delle 20 domande, riepilogo delle risposte, font Creepster, icona della scheda e colori dei pulsanti |

**Divisione del CSS**

| Persona | Parte di CSS |
|---|---|
| Luca | Pagina iniziale e pagina finale |
| Manuel | Interno del quiz: domande e risposte, riepilogo delle risposte |
| Gabriel, Manuel | Timer |

### Scadenziario del team

| Persona | Martedì | Mercoledì |
|---|---|---|
| Francesco | Lista delle domande | Verifica della risposta; se è sbagliata, mostrare quella giusta |
| Alessandro | Pagina iniziale | Pagina finale |
| Giuseppe | Contatore interno | Contatore finale |
| Nicholas | Finire il timer | Aiutare chi è più indietro |
| Manuel, Luca, Gabriel (CSS) | Dare le classi a chi gestisce il JS e fare le prime impostazioni | Rifinire il CSS e migliorare lo stile della pagina |

- **Giovedì**: ognuno rivede le proprie sezioni insieme a chi si è occupato del CSS; snellire il codice, allineare i dati, controllare il funzionamento, sistemare il CSS, aggiornare il README.
- **Venerdì mattina**: ultimi controlli, debug e rifiniture finali.
- **Venerdì 16:30**: esporre il progetto al resto dei colleghi (è anche la scadenza della consegna, vedi *Consegna*).

### Comportamento di riferimento

Card bianca di circa 720px su sfondo viola/blu, logo Epicode in alto a sinistra: 

- **Welcome**: titolo "Benvenuto al tuo esame", testo con numero di domande e secondi a disposizione, tre punti elenco (domanda a tempo con una sola risposta; una volta cliccata la domanda si chiude; durata circa 3 minuti), pulsante **Inizia**.
- **Quiz**: in alto "Domanda N di 10" a sinistra e il timer a destra (es. "19s"); sotto la domanda in grassetto e le risposte come pulsanti a tutta larghezza, con **hover** a riempimento blu scuro.
- **Feedback**: dopo il click la risposta corretta diventa **verde** e quella sbagliata scelta **rossa**; poi si passa da sole alla domanda successiva.
- **Risultati**: "Risultati", "Hai completato il quiz.", percentuale grande (80%, 40%, 20%), riquadro **Promosso** (verde chiaro) o **Bocciato** (rosa), due barre **Corrette** (verde, es. 8/10) e **Sbagliate** (rossa, es. 2/10), pulsante **Ricomincia** che riporta alla welcome.
- **Shuffle**: a ogni nuovo giro l'ordine delle risposte cambia; l'ordine delle domande resta lo stesso. *Nel nostro quiz cambiano entrambi*: si pescano 10 domande da 20 in ordine casuale (scelta del team, diversa dall'app di Epicode).
- **Timer Rosso**: timer rosso negli ultimi secondi e comportamento a tempo scaduto. Valgono i requisiti del brief (≤ 5 secondi rosso; a zero timer fermo, risposte non cliccabili, risposta giusta mostrata). Il nostro timer è un anello rotondo: verde, giallo sotto i 10 secondi, rosso sotto i 5.

### Punti aperti

**Risolti**

1. **Lista domande e risposte con verifica**: `renderQuiz` e `gestisciRisposta` sono di Francesco; Manuel ha messo le classi e unito i file.
2. **Risultato finale**: calcolo e schermata sono entrambi di Giuseppe (`schermataFinale`).
3. **Caricamento degli script**: un solo `script.js`, nessun ordine di `<script>` da rispettare.
4. **`index.html`**: ripristinati `<!DOCTYPE html>` e `<html lang="it">` (Gabriel, 29/10).
5. **Titolo della pagina iniziale**: il refuso `titoloInziale` è stato corretto in `titoloIniziale`, quindi ora prende lo stile (29/10).
6. **Lista della pagina iniziale**: la `ul` ha la classe `regoleIniziali` e `puntiLista` tiene solo la dimensione del testo (29/10).
7. **Barre della pagina finale**: struttura a tre colonne (etichetta, barra, conteggio) con `barreFinali` e `rigaBarra` (29/10).
8. **Timer rotondo**: anello con `conic-gradient`, verde, giallo sotto i 10 secondi e rosso sotto i 5 (29/10).
9. **Pulizia del codice e dei commenti**: tolti i div vuoti del timer, `sogliaPromozione`, `schermataAttiva`, il commento `// ciao`, le regole CSS non usate; commenti corretti (commit `547d9c3`, 29/10).
   Il 30/10 Nicholas ha tolto anche i `console.log` di controllo e ha sostituito il `1500` di `gestisciTempoScaduto` con `ritardoFeedback`; `gestisciRisposta` ora evidenzia la risposta giusta nello stesso ciclo che blocca i bottoni.
10. **Riepilogo delle risposte** (personalizzazione, 30/10): a fine quiz il pulsante **Riepilogo risposte** mostra e nasconde l'elenco delle domande con risposta data e soluzione, verde se corretta e rosso se sbagliata o non data. Si appoggia a `arrayRisposte`, alla chiave `soluzione` di ogni domanda e alla funzione `mostraRisultati`.
11. **Font Halloween** (personalizzazione, 30/10): Creepster da Google Fonts, caricato con `@import` in `style.css` e usato solo nel riepilogo. Senza connessione si ricade su `system-ui`.
12. **Icona della scheda**: `index.html` ha il `<link rel="icon">` con `assets/EPICODE-pitto-color (1).png`.
