# Quiz Epicode – Team 4

Un quiz a tempo in JavaScript puro: rispondi alle domande prima che scada il timer e scopri se sei promosso.

> **Stato del progetto:** in pianificazione. Questo README viene scritto man mano insieme al codice: le parti ancora da completare sono indicate dai commenti `TODO [Nome]` nel sorgente di questo file.

**Build Week 1 · Master Epicode · Team 4**

[Cosa fa](#cosa-fa) · [Come avviarlo](#come-avviarlo) · [Architettura](#architettura) · [Il team](#il-team)

---

## Indice

- [Cosa fa](#cosa-fa)
- [Anteprima](#anteprima)
- [Tecnologie](#tecnologie)
- [Come avviarlo](#come-avviarlo)
- [Struttura del progetto](#struttura-del-progetto)
- [Architettura](#architettura)
- [Come funziona](#come-funziona)
- [Convenzioni di codice](#convenzioni-di-codice)
- [Il team](#il-team)
- [Flusso di lavoro Git](#flusso-di-lavoro-git)
- [Personalizzazioni facoltative](#personalizzazioni-facoltative)
- [Crediti](#crediti)

---

## Cosa fa

Versione semplificata del quiz di Epicode. L'app ha tre schermate, che si susseguono senza mai cambiare pagina:

1. **Benvenuto**: presenta il quiz e ha il pulsante **Inizia**.
2. **Quiz**: mostra una domanda alla volta, con più risposte possibili.
3. **Risultati**: mostra l'esito finale e permette di ricominciare.

Funzioni principali:

- **Timer** a conto alla rovescia su ogni domanda. Negli ultimi secondi diventa rosso; a zero si ferma, le risposte non sono più cliccabili e viene mostrata quella giusta.
- **Feedback immediato**: la risposta corretta diventa verde, quella sbagliata scelta diventa rossa.
- **Contatore di progresso** ("Domanda 3 di 10").
- **Risultato finale**: percentuale di risposte corrette con esito **Promosso** o **Bocciato**, numero di risposte corrette e sbagliate, due barre colorate.
- **Ricomincia**: azzera domande, punteggio, timer e risultati e riporta alla schermata iniziale.

<!-- TODO [Luca]: aggiornare questo elenco quando le funzioni sono davvero implementate -->

## Anteprima

<!-- TODO [Luca]: inserire screenshot o GIF delle tre schermate a progetto avanzato -->

_Screenshot in arrivo._

## Tecnologie

| Tecnologia | Uso |
|---|---|
| HTML5 | Pagina unica `index.html` con il contenitore `#app` |
| CSS3 | Stile, hover sugli elementi cliccabili, colori coerenti con il brand Epicode |
| JavaScript (vanilla) | Logica del quiz e rendering delle schermate, senza framework |

Scelte tecniche:

- **SPA**: l'URL resta sempre `index.html`; le schermate sono viste renderizzate dal JavaScript dentro `#app`, non pagine separate.
- **Niente `localStorage`**: lo stato vive solo in memoria. Ricaricando la pagina si riparte da capo.
- **Nessuna build**: non servono `npm`, bundler o dipendenze.

## Come avviarlo

1. Clona la repo:

   ```bash
   git clone <URL-della-repo>
   cd Team-4-progetto-buildweek-1-
   ```

2. Apri `index.html` con l'estensione **Live Server** di VS Code (di solito parte su `http://127.0.0.1:5500`), oppure apri il file direttamente nel browser.

<!-- TODO [Gabriel]: sostituire <URL-della-repo> con il link reale della repo -->

## Struttura del progetto

```text
.
├── index.html                 pagina unica con il contenitore #app
├── ISTRUZIONI PROGETTO.md     brief Epicode + decisioni del team
├── README.md
└── assets/
    ├── bg.jpg                 sfondo
    ├── epicode-logo.png       logo
    ├── css/
    │   └── style.css          stile
    └── js/
        ├── script.js          starter: da dividere nei file qui sotto
        ├── impostazioni.js    previsto: impostazioni globali e array delle domande
        ├── domande.js         previsto: lista domande e risposte, verifica
        ├── timer.js           previsto: conto alla rovescia
        └── schermate.js       previsto: schermata iniziale e finale
```

I file marcati "previsto" non esistono ancora; nomi e ordine di caricamento vanno confermati dal team.

<!-- TODO [Luca]: aggiornare l'albero quando i file JS vengono creati -->

## Architettura

L'app segue il pattern **stato → render → eventi**:

1. **Stato**: variabili in memoria (schermata attiva, domanda corrente, punteggio, timer).
2. **Render**: una funzione per schermata ricostruisce il contenuto di `#app` a partire dallo stato.
3. **Eventi**: i click (Inizia, risposte, Ricomincia) aggiornano lo stato e richiamano il render con `addEventListener`.

Una variabile di stato indica quale vista mostrare: benvenuto, quiz o risultati.

Il codice è diviso in quattro file JavaScript, ciascuno con una responsabilità:

| File | Responsabilità |
|---|---|
| `impostazioni.js` | Costanti, stato condiviso, array delle domande |
| `domande.js` | Lista domande e risposte, verifica corretta/sbagliata |
| `timer.js` | Avvio, stop e scadenza del timer |
| `schermate.js` | Schermata iniziale e schermata finale |

<!-- TODO [Luca]: aggiungere un diagramma del flusso welcome → quiz → risultati → welcome -->

## Come funziona

Le domande sono oggetti in un array. Ogni oggetto ha, oltre a testo e risposte, un `id` e un `timer` (in secondi). Struttura prevista, **nomi da confermare**:

```js
{
  id: 1,
  domanda: "Cosa significa l'acronimo CPU?",
  rispostaCorretta: "Central Processing Unit",
  risposteSbagliate: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  timer: 20,
}
```

<!-- TODO [da assegnare]: confermare la struttura dell'oggetto domanda e inserire lo snippet definitivo -->

### Timer

Conto alla rovescia per ogni domanda; negli ultimi secondi diventa rosso; allo scadere si ferma e blocca le risposte.

<!-- TODO [Nicholas]: spiegare come funziona il timer e inserire lo snippet di avvio/stop/scadenza -->

### Lista domande e verifica

Le risposte sono mostrate in una lista (`ul` → `li`); al click viene verificata la risposta e colorata di verde o di rosso.

<!-- TODO [Francesco, Manuel]: spiegare la verifica della risposta e inserire lo snippet -->

### Contatore delle domande

Un contatore interno tiene il conto delle domande svolte e mostra il progresso a video.

<!-- TODO [Giuseppe]: spiegare il contatore interno e inserire lo snippet -->

### Risultati

Percentuale di risposte corrette, esito Promosso/Bocciato, numero di corrette e sbagliate, due barre colorate, pulsante **Ricomincia**.

<!-- TODO [Giuseppe, Alessandro]: spiegare il calcolo del risultato finale e la schermata dei risultati, con snippet -->

## Convenzioni di codice

- **camelCase** per tutto.
- **Variabili, funzioni, costanti e chiavi degli oggetti in italiano**, con nomi che dicono a cosa servono.
- **Commenti con il nome di chi li scrive**, per sapere a chi chiedere: `// [Nicholas] ferma il timer quando scade il tempo`.
- Solo `const` e `let`, mai `var`.
- `querySelector` / `querySelectorAll` per il DOM.
- `addEventListener`, mai `onclick` inline nell'HTML.

Il dettaglio, con i nomi di riferimento, è in [ISTRUZIONI PROGETTO.md](ISTRUZIONI%20PROGETTO.md).

## Il team

Ruoli definiti per il momento.

| Persona | Ruolo |
|---|---|
| Gabriel | Operatore speciale Git, CSS |
| Nicholas | Timer |
| Luca | README, CSS |
| Alessandro | Schermate e contatore giuste/sbagliate |
| Francesco | Lista domande e risposte con verifica |
| Giuseppe | Contatore interno, contatore finale |
| Manuel | CSS, lista domande e risposte con verifica |

## Flusso di lavoro Git

- Una sola repo per il gruppo, con **branch personali** e merge su `main`.
- **Una sola persona** gestisce repo, branch, merge e pull request: Gabriel.
- Il link consegnato è quello della repo associata all'account di chi gestisce Git.

## Personalizzazioni facoltative

Previste dal brief; da scegliere con il team.

- [ ] **Shuffle**: ordine casuale di domande e risposte a ogni restart
- [ ] **Domande custom**: aggiungere, togliere o modificare domande, gestendo le percentuali decimali
- [ ] **Timer grafico**: progress bar, spinner o altra rappresentazione
- [ ] **Grafici dei risultati**: a barre o a torta con Chart.js
- [ ] **Rating**: feedback di gradimento (stelline)

## Crediti

Progetto realizzato dal Team 4 per la **Build Week 1** del master Epicode. Sfondo e logo Epicode forniti da Epicode.
