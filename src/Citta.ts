import { IMezzo } from "./IMezzo.js";
import { ICitta } from "./ICitta.js";

/**
 * Classe che rappresenta una città con un elenco di mezzi disponibili.
 */
export class Citta implements ICitta {

     /**
     * Costruttore che crea una nuova città.
     * @param Nome Nome della città.
     * @param ElencoMezzi Array contenente i mezzi presenti nella città.
     */
    constructor(public Nome: string, public ElencoMezzi: IMezzo[]) { }
    
    /**
     * Aggiunge un mezzo all'elenco dei mezzi della città.
     * @param mezzo Il mezzo da aggiungere.
     */
    aggiungiMezzo(mezzo: IMezzo): void {
      // Controlla se esiste già il mezzo nella lista
      if (this.ElencoMezzi.includes(mezzo)) {
        console.log(`Il mezzo ${mezzo.IdMezzo} è già presente nella lista, non verrà aggiunto`);
        return;
      }
      this.ElencoMezzi.push(mezzo);
      console.log(`Il mezzo ${mezzo.IdMezzo} è stato aggiunto alla lista`);
    }
}