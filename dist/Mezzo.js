import { StatoMezzo } from "./IMezzo.js";
/**
 * Classe che rappresenta un mezzo di trasporto.
 */
export class Mezzo {
    /**
     * Get pubblico l'identificativo univoco del mezzo.
     */
    get IdMezzo() {
        return this._idMezzo;
    }
    /**
     * Set privato dell'identificativo del mezzo.
     */
    set IdMezzo(value) {
        this._idMezzo = value;
    }
    /**
     * Crea una nuova istanza di Mezzo.
     * @param Tipo Il tipo di mezzo (bici, monopattino, scooter).
     * @param Stato Lo stato iniziale del mezzo (disponibile, in uso).
     */
    constructor(Tipo, Stato) {
        this.Tipo = Tipo;
        this.Stato = Stato;
        /** Identificativo univoco del mezzo privato */
        this._idMezzo = 0;
        this.IdMezzo = Mezzo.nextId++;
    }
    /**
     * Assegna un utente al mezzo se disponibile, altrimenti segnala che non è disponibile.
     * @param utente L'utente a cui assegnare il mezzo.
     */
    assegnaUtente(utente) {
        if (this.Stato === StatoMezzo.Disponibile) {
            this.Stato = StatoMezzo.InUso;
            console.log(`Il mezzo ${this.IdMezzo} è stato assegnato a ${utente.Nome} ${utente.Cognome}`);
        }
        else {
            console.log(`Il mezzo ${this.IdMezzo} non è disponibile`);
        }
    }
}
/** Variabile statica per generare ID univoci per ogni mezzo */
Mezzo.nextId = 1;
