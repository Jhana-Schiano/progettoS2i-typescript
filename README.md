# Moove - progettoS2i-typescript

Moove è un semplice sistema di gestione mezzi di trasporto in TypeScript. 
Consente di organizzare i vari mezzi disponibili all'interno di una città, scegliendo tra bici, scooter e monopattini elettrici e permettendo all'utente di prenotare un mezzo.

## Requisiti

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (di solito incluso con Node.js)
- [TypeScript](https://www.typescriptlang.org/)

## Installazione

1. **Clona il repository**
   ```sh
   git clone https://github.com/tuo-utente/progettoS2i-typescript.git

2. **Installa le dipendenze**
    ```sh
    npm install
    npm install -g typescript

## Struttura del progetto e configurazione
- src/app.ts: Entry point dell'applicazione.
- src/Mezzo.ts, src/Utente.ts, src/Citta.ts: Classi principali.
- src/IMezzo.ts, src/IUtente.ts, src/ICitta.ts: Interfacce ed enumerazioni.
  
La configurazione del progetto avviene tramite tsconfig.json e consente di compilare i file TypeScript presenti in src in file Javascript nella cartella dist

1. Per **compilare** il progetto eseguire:
  ```sh
    tsc -w
  ```
2. Per vedere i log nella console del tuo browser aprire il file index.html e prendere F12
