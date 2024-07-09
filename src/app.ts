import { Partecipante, Corso, Azienda } from "./classes"


//Partecipanti
const partecipante1 = new Partecipante(
    "Hugh",
    "Crane",
    "Ucraina",
    "Diploma",
    ["Ucraino", "Inglese"],
    "Agricoltura"
);

const partecipante2 = new Partecipante(
    "Joy",
    "Safari",
    "Kenya",
    "Laurea in Informatica",
    ["Inglese", "Swahili", "Francese"],
    "Artigianato"
);

const partecipante3 = new Partecipante(
    "Tommaso",
    "Crociera",
    "Italia",
    "Laurea in DAMS",
    ["Italiano"],
    "Moda"
);


//Corsi
const corso1 = new Corso('ioAllaccio', 'Crea e ripara scarpe con metodi tradizionali.', 'artigianato e calzature', '8 mesi', []);
const corso2 = new Corso('ioColtivo', 'Imparerai l\'arte dell\'agricolutura', 'agricoltura', '6 mesi', []);
const corso3 = new Corso('ioCucio', 'Progetta e realizza abbigliamento personalizzato.', 'moda e abbigliamento', '11 mesi', []);

//Aziende
const azienda1 = new Azienda(
    "Scarpe Diem",
    "Calzature",
    "Produzione e vendita di calzature eleganti e confortevoli.",
    ["Sarto", "Calzolaio", "Venditore"]
);

const azienda2 = new Azienda(
    "TerraMia",
    "Agricoltura",
    "Coltivazioni biologiche e sostenibili di frutta e verdura.",
    ["Agronomo", "Operatore di campo", "Esperto di irrigazione"]
);

const azienda3 = new Azienda(
    "BeloFisico",
    "Moda",
    "Creazione di abbigliamento moda e accessori di alta qualità.",
    ["Stilista", "Sarto", "Addetto marketing"]
);

//


