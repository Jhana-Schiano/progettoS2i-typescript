import { IMezzo } from "./IMezzo.js";

/**
 * Interfaccia che definisce le proprietà e i metodi di una città.
 **/
export interface ICitta {
  /** Nome della città. */
  Nome: string;

  /** Elenco dei mezzi disponibili nella città. */
  ElencoMezzi: IMezzo[];

  /**
   * Aggiunge un mezzo all'elenco dei mezzi della città.
   * @param mezzo Il mezzo da aggiungere.
   */
  aggiungiMezzo(mezzo: IMezzo): void;
}
