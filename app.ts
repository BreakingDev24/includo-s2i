
interface Ipartecipante {
    nome: string;
    cognome: string;
    paese: string;
    istruzione: string;
    lingue: string[];
    interestArea: string;

    iscrivitiCorso(corso: Icorso): void;

}

interface Icorso {
    titoloCorso: string;
    descrizione: string;
    settore: string;
    durata: string;
    iscritti: Ipartecipante[]

    aggiungiPartecipante(partecipante: Ipartecipante, ):void
}

interface IAzienda {
    nome: string;
    settore: string;
    descrizione: string;
    posizioniAperte: string[];

    offriPosizione(partecipante: Ipartecipante, posizione:string):void
}

class Partecipante implements Ipartecipante {
    nome: string;
    cognome: string;
    paese: string;
    istruzione: string;
    lingue: string[];
    interestArea: string;

    constructor(nome:string, cognome:string, paese:string, istruzione:string, lingue:string[], interestArea:string) {
        this.nome = nome; 
        this.cognome = cognome;
        this.paese = paese;
        this.istruzione = istruzione;
        this.lingue = lingue;
        this.interestArea = interestArea
    }
    iscrivitiCorso(corso: Icorso): void {
        if(!corso.iscritti.includes(this)){
            corso.aggiungiPartecipante(this);
            console.log(`${this.nome} ${this.cognome} ti sei iscritto al corso ${corso.titoloCorso}`);
        } else {
            console.log(`Sei gia iscritto al corso`);
            
        }
        
        
    }

}


class Corso implements Icorso {
    titoloCorso: string;
    descrizione: string;
    settore: string;
    durata: string;
    iscritti: Ipartecipante[];

    constructor(titoloCorso: string, descrizione: string, settore: string, durata: string, iscritti: Ipartecipante[]){
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settore = settore;
        this.durata = durata; 
        this.iscritti = iscritti
    }
    aggiungiPartecipante(partecipante: Ipartecipante): void {
        this.iscritti.push(partecipante)
        console.log(`${partecipante.nome} ${partecipante.cognome} è stato aggiunto al corso ${this.titoloCorso}`);
        
    }

}

class Azienda implements IAzienda{
    nome: string;
    settore: string;
    descrizione: string;
    posizioniAperte: string[];
    constructor(nome:string, settore: string, descrizione:string, posizioniAperte:string[]){
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte
    }
    offriPosizione(partecipante: Ipartecipante, posizione:string): void {
        console.log(`Gentile ${partecipante.nome} ${partecipante.cognome} dopo avere analizzato il suo profilo siamo lieti di offrirle la posizione di ${posizione}`);
        
    } 
}

const partecipante1 = new Partecipante('Gennaro', 'Esposito', 'Nigeria', 'Diploma', ['francese', 'inglese'], 'agricoltura')
const corso1 = new Corso('io Coltivo', 'imparerai l\'arte dell\'agricolutura', 'agricoltura', '6 mesi', [])
// partecipante1.iscrivitiCorso(corso1)

// corso1.aggiungiPartecipante(partecipante1);
// console.log(corso1);
partecipante1.iscrivitiCorso(corso1)

// console.log(partecipante1);
