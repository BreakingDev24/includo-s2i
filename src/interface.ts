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
