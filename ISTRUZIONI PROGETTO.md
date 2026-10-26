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
> Le voci segnate **(proposta)** non sono ancora state decise dal team: vanno confermate o corrette.

### Convenzioni di codice

Decise dal team, non si cambiano:

- **camelCase** per tutto.
- **Variabili, funzioni, costanti e chiavi degli oggetti in italiano**, con nomi sensati rispetto a ciò per cui servono (`punteggio`, non `p`).
- **Commenti con il nome di chi li scrive**, per sapere a chi chiedere in caso di bisogno: `// [Nicholas] ferma il timer quando scade il tempo`. Stesso formato in HTML (`<!-- [Luca] ... -->`) e CSS (`/* [Manuel] ... */`) **(proposta)**.

Regole già presenti nello starter (`assets/js/script.js`):

- solo `const` / `let`, mai `var`;
- `querySelector` / `querySelectorAll` per il DOM;
- `addEventListener`, mai `onclick` inline nell'HTML;
- pattern **stato → render → eventi**.

**Nomi di riferimento (proposta).** Per non avere sette nomi diversi per la stessa cosa:

| Starter | Nome italiano | A cosa serve |
|---|---|---|
| `QUESTIONS` | `domande`                   | Array con tutte le domande del quiz: ogni elemento è un oggetto |
| `question` | `domanda`                    | Chiave dell'oggetto: il testo della domanda |
| `correct_answer` | `rispostaCorretta`     | Chiave dell'oggetto: la risposta giusta, usata per la verifica e per colorare di verde |
| `incorrect_answers` | `risposteSbagliate` | Chiave dell'oggetto: array con le risposte errate, da mostrare insieme alla corretta |
| `TOTAL_QUESTIONS` | `numeroDomande`       | Quante domande ci sono (`domande.length`): serve per il contatore "Domanda 3 di 10" e per la percentuale |
| `PASS_THRESHOLD` | `sogliaPromozione`     | Percentuale minima per essere **Promosso** (60) |
| `FEEDBACK_DELAY` | `ritardoFeedback`      | Millisecondi di attesa dopo una risposta prima di passare alla successiva (1500): lascia il tempo di vedere verde o rosso |
| `TIMER_DURATION` | `durataTimer`          | Secondi a disposizione per ogni domanda (20); con il campo `timer` nell'array può diventare un tempo per singola domanda |
| `currentScreen` | `schermataAttiva`       | Variabile di stato: dice quale vista mostrare (benvenuto, quiz o risultati) |
| `currentQuestion` | `indiceDomanda`       | Posizione della domanda corrente nell'array: parte da 0, quindi a video si mostra +1 |
| `score` | `punteggio`                     | Numero di risposte corrette finora: a fine quiz serve per percentuale e barre |
| `timerId` | `idTimer`                     | Identificatore del timer attivo, per poterlo fermare; `null` se non ce n'è uno in corso |
| `renderWelcome` / `renderQuiz` / `renderResults` | `mostraBenvenuto` / `mostraQuiz` / `mostraRisultati`    | Le tre funzioni che disegnano le schermate dentro `#app` a partire dallo stato |
| `startTimer` / `stopTimer` / `handleTimeUp` | `avviaTimer` / `fermaTimer` / `gestisciTempoScaduto`         | Avvia il conto alla rovescia; lo ferma; cosa fare a zero (blocca le risposte e mostra la giusta) |
| `handleAnswer` / `advance` | `gestisciRisposta` / `avanza`                                                 | Gestisce il click su una risposta (verifica, colore, punteggio); passa alla domanda successiva o ai risultati |

### Cosa dobbiamo realizzare

- [ ] Modificare gli oggetti dell'array delle domande: aggiungere `id` e `timer`
- [ ] Timer
- [ ] Contatore interno delle domande
- [ ] Lista (`ul` → `li`) delle domande con le risposte abbinate
- [ ] Verifica della risposta e feedback a video: corretta o sbagliata
- [ ] Schermata iniziale con benvenuto e pulsante **Inizia**
- [ ] Schermata finale con pulsante per tornare alla pagina principale (nel brief è **Ricomincia**: azzera tutto e torna alla welcome, come nell'app di riferimento)
- [ ] Risultato finale del test

### File JavaScript

| File **(nomi in proposta)** | Contenuto | Responsabile |
|---|---|---|
| `impostazioni.js` | Impostazioni globali: costanti, stato condiviso, array delle domande con `id` e `timer` | **da assegnare** |
| `timer.js` | Conto alla rovescia: avvio, stop, tempo scaduto | Nicholas |
| `schermate.js` | Schermata iniziale e schermata finale | Alessandro |
| `domande.js` | Lista domande e risposte, con verifica | Francesco, Manuel |

L'`index.html` oggi carica un solo `script.js`: con più file vanno aggiunti più `<script>` **in ordine di dipendenza** (impostazioni → domande → timer → schermate) **(proposta)**.

### Ruoli

Definiti per il momento.

| Persona | Ruolo |
|---|---|
| Gabriel | Operatore speciale Git, CSS |
| Nicholas | Timer |
| Luca | README, CSS |
| Alessandro | Schermate e contatore giuste/sbagliate |
| Francesco | Lista domande e risposte con verifica |
| Giuseppe | Contatore interno, contatore finale |
| Manuel | CSS, lista domande e risposte con verifica |

### Comportamento di riferimento

Card bianca di circa 720px su sfondo viola/blu, logo Epicode in alto a sinistra: 

- **Welcome**: titolo "Benvenuto al tuo esame", testo con numero di domande e secondi a disposizione, tre punti elenco (domanda a tempo con una sola risposta; una volta cliccata la domanda si chiude; durata circa 3 minuti), pulsante **Inizia**.
- **Quiz**: in alto "Domanda N di 10" a sinistra e il timer a destra (es. "19s"); sotto la domanda in grassetto e le risposte come pulsanti a tutta larghezza, con **hover** a riempimento blu scuro.
- **Feedback**: dopo il click la risposta corretta diventa **verde** e quella sbagliata scelta **rossa**; poi si passa da sole alla domanda successiva.
- **Risultati**: "Risultati", "Hai completato il quiz.", percentuale grande (80%, 40%, 20%), riquadro **Promosso** (verde chiaro) o **Bocciato** (rosa), due barre **Corrette** (verde, es. 8/10) e **Sbagliate** (rossa, es. 2/10), pulsante **Ricomincia** che riporta alla welcome.
- **Shuffle**: a ogni nuovo giro l'ordine delle risposte cambia; l'ordine delle domande resta lo stesso.
- **Timer Rosso**: timer rosso negli ultimi secondi e comportamento a tempo scaduto. Valgono i requisiti del brief (≤ 5 secondi rosso; a zero timer fermo, risposte non cliccabili, risposta giusta mostrata).

### Punti aperti

Da decidere ancora nel team; nessuno è stato ancora deciso, può essere una divisione più precisa:

1. **Impostazioni globali** e modifica dell'array (`id` e `timer`): ancora nessun responsabile.
2. **Lista domande e risposte con verifica**: assegnata sia a Francesco sia a Manuel. Come si dividono concretamente il lavoro?
3. **Risultato finale**: Giuseppe ha il contatore finale, Alessandro le schermate. Chi calcola la percentuale e chi la mostra?
4. **CSS**: tre persone (Gabriel, Luca, Manuel). Dividere per schermata o per tipo di elemento?
5. **Caricamento degli script**: conferma dei nomi dei file e dell'ordine dei `<script>` (vedi sopra).