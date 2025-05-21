/**
 * Classe che rappresenta un utente del sistema e permette la prenotazione di un mezzo.
 */
export class Utente {
    /**
     * Crea una nuova istanza di Utente.
     * @param Nome Nome dell'utente.
     * @param Cognome Cognome dell'utente.
     * @param Email Email dell'utente.
     * @param PagamentoPreferito Metodo di pagamento preferito dall'utente.
     * @throws Errore se uno dei parametri obbligatori è vuoto o se l'email non è valida.
     */
    constructor(Nome, Cognome, Email, PagamentoPreferito) {
        this.Nome = Nome;
        this.Cognome = Cognome;
        this.Email = Email;
        this.PagamentoPreferito = PagamentoPreferito;
        if (Nome === "")
            throw new Error("Nome utente non valido, non può essere vuoto");
        if (Cognome === "")
            throw new Error("Cognome utente non valido, non può essere vuoto");
        if (PagamentoPreferito === "")
            throw new Error("Pagamento utente non valido, non può essere vuoto");
        if (Email === "")
            throw new Error("Email utente non valida, non può essere vuota");
        if (!Email.includes("@") || !Email.includes(".")) {
            throw new Error("Email utente non valida, deve contenere '@' e '.'");
        }
    }
    /**
     * Permette all'utente di prenotare un mezzo.
     * @param mezzo Il mezzo da prenotare.
     */
    prenotaMezzo(mezzo) {
        mezzo.assegnaUtente(this);
    }
}
