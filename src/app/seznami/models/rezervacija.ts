import { Postaja } from "./postaja";
import { Uporabnik } from "./uporabnik";

export class Rezervacija {
    postaja:Postaja;
    uporabnik:Uporabnik;
    zacetekRezervacije: Date;
    konecRezervacije: Date;
}
