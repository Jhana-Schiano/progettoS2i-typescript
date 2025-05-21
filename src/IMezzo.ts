import { IUtente } from "./IUtente.js";

/**
 * Enumerazione che rappresenta lo stato di un mezzo (disponibile, in uso).
 */
export enum StatoMezzo {
  Disponibile = "disponibile",
  InUso = "in uso",
}

/**
 * Enumerazione che rappresenta il tipo di mezzo (bici, monopattino, scooter).
 */
export enum TipoMezzo {
  Bici = "bici",
  Monopattino = "monopattino",
  Scooter = "scooter",
}

/**
 * Interfaccia che definisce le proprietà e i metodi di un mezzo.
 */
export interface IMezzo {
  /** Identificativo univoco del mezzo (sola lettura) */
  readonly IdMezzo: number;

  /** Tipo del mezzo */
  Tipo: TipoMezzo;

  /** Stato attuale del mezzo */
  Stato: StatoMezzo;

  /**
   * Assegna un utente al mezzo.
   * @param utente L'utente a cui assegnare il mezzo.
   */
  assegnaUtente(utente: IUtente): void;
}
