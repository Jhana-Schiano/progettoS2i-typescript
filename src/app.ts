import { Mezzo } from "./Mezzo.js";
import { Utente } from "./Utente.js";
import { StatoMezzo, TipoMezzo } from "./IMezzo.js";
import { Citta } from "./Citta.js";

console.log("Creazione delle istanze di mezzo, utenti e città...");

//Creazione di diverse istanze di mezzo
let bici = new Mezzo(TipoMezzo.Bici, StatoMezzo.Disponibile);
let scooter = new Mezzo(TipoMezzo.Scooter, StatoMezzo.Disponibile);
let monopattino = new Mezzo(TipoMezzo.Monopattino, StatoMezzo.Disponibile);
let bici2 = new Mezzo(TipoMezzo.Bici, StatoMezzo.Disponibile);

//Creazione di una città con un elenco di mezzi
let citta = new Citta("Roma", [bici, scooter, monopattino]);

//Creazione di due utenti 
let utente = new Utente("Mario", "Rossi", "m.rossi@gmail.com", "carta");
let utente2 = new Utente("Luca", "Verdi", "luca.verdi@gmail.com", "contanti");

//Aggiunta di un mezzo alla città
console.log("Aggiunta di un mezzo alla città...");
citta.aggiungiMezzo(bici2);
console.log("Aggiunta di un mezzo già presente nella città...");
citta.aggiungiMezzo(bici);

//Assegnazione di un utente a un mezzo
console.log("Assegnazione di un utente a un mezzo...");
bici.assegnaUtente(utente);
console.log("Assegnazione di un utente a un mezzo già in uso...");
bici.assegnaUtente(utente2);

//Prenotazione di un mezzo disponibile da parte di un utente 
console.log("Prenotazione di un mezzo disponibile da parte di un utente...");
utente2.prenotaMezzo(scooter);
console.log("Prenotazione di un mezzo in uso non disponibile...");
utente2.prenotaMezzo(bici);