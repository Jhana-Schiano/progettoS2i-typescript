import { IMezzo } from "./IMezzo.js";
import { IUtente } from "./IUtente.js";
import { StatoMezzo, TipoMezzo } from "./IMezzo.js";

/**
 * Classe che rappresenta un mezzo di trasporto.
 */
export class Mezzo implements IMezzo {
  /** Variabile statica per generare ID univoci per ogni mezzo */
  private static nextId = 1;

  /** Identificativo univoco del mezzo privato */
  private _idMezzo: number = 0;

  /**
   * Get pubblico l'identificativo univoco del mezzo.
   */
  public get IdMezzo(): number {
    return this._idMezzo;
  }

  /**
   * Set privato dell'identificativo del mezzo.
   */
  private set IdMezzo(value: number) {
    this._idMezzo = value;
  }

  /**
   * Crea una nuova istanza di Mezzo.
   * @param Tipo Il tipo di mezzo (bici, monopattino, scooter).
   * @param Stato Lo stato iniziale del mezzo (disponibile, in uso).
   */
  constructor(public Tipo: TipoMezzo, public Stato: StatoMezzo) {
    this.IdMezzo = Mezzo.nextId++;
  }

  /**
   * Assegna un utente al mezzo se disponibile, altrimenti segnala che non è disponibile.
   * @param utente L'utente a cui assegnare il mezzo.
   */
  assegnaUtente(utente: IUtente): void {
    if (this.Stato === StatoMezzo.Disponibile) {
      this.Stato = StatoMezzo.InUso;
      console.log(`Il mezzo ${this.IdMezzo} è stato assegnato a ${utente.Nome} ${utente.Cognome}`);
    } else {
      console.log(`Il mezzo ${this.IdMezzo} non è disponibile`);
    }
  }
}
