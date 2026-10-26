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
