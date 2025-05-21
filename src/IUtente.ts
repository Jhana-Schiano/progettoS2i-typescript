import { IMezzo } from "./IMezzo.js";

/**
 * Interfaccia che definisce le proprietà e i metodi di un utente.
 */
export interface IUtente {
    /** Nome dell'utente */
    Nome: string;

    /** Cognome dell'utente */
    Cognome: string;

    /** Email dell'utente */
    Email: string;
    
    /** Metodo di pagamento preferito dall'utente */
    PagamentoPreferito: string;

    /**
     * Permette all'utente di prenotare un mezzo.
     * @param mezzo Il mezzo da prenotare.
     */
    prenotaMezzo(mezzo:IMezzo): void;
}