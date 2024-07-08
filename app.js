var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paese, istruzione, lingue, interestArea) {
        this.nome = nome;
        this.cognome = cognome;
        this.paese = paese;
        this.istruzione = istruzione;
        this.lingue = lingue;
        this.interestArea = interestArea;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        if (!corso.iscritti.includes(this)) {
            corso.aggiungiPartecipante(this);
            console.log("".concat(this.nome, " ").concat(this.cognome, " ti sei iscritto al corso ").concat(corso.titoloCorso));
        }
        else {
            console.log("Sei gia iscritto al corso");
        }
    };
    return Partecipante;
}());
var Corso = /** @class */ (function () {
    function Corso(titoloCorso, descrizione, settore, durata, iscritti) {
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settore = settore;
        this.durata = durata;
        this.iscritti = iscritti;
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) {
        this.iscritti.push(partecipante);
        console.log("".concat(partecipante.nome, " ").concat(partecipante.cognome, " \u00E8 stato aggiunto al corso ").concat(this.titoloCorso));
    };
    return Corso;
}());
var Azienda = /** @class */ (function () {
    function Azienda(nome, settore, descrizione, posizioniAperte) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        console.log("Gentile ".concat(partecipante.nome, " ").concat(partecipante.cognome, " dopo avere analizzato il suo profilo siamo lieti di offrirle la posizione di ").concat(posizione));
    };
    return Azienda;
}());
var partecipante1 = new Partecipante('Gennaro', 'Esposito', 'Nigeria', 'Diploma', ['francese', 'inglese'], 'agricoltura');
var corso1 = new Corso('io Coltivo', 'imparerai l\'arte dell\'agricolutura', 'agricoltura', '6 mesi', []);
// partecipante1.iscrivitiCorso(corso1)
// corso1.aggiungiPartecipante(partecipante1);
// console.log(corso1);
partecipante1.iscrivitiCorso(corso1);
// console.log(partecipante1);
