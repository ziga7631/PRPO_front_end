import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import {SeznamiService} from './services/seznami.service';
import { Uporabnik } from './models/uporabnik';
import { Rezervacija } from './models/rezervacija';

@Component({
    moduleId: module.id,
    selector: 'seznam-podrobnosti',
    templateUrl: 'seznam-podrobnosti.component.html'
})
export class SeznamPodrobnostiComponent implements OnInit {
    seznamRezervacij: Rezervacija[];

    uporabnik: Uporabnik = new Uporabnik();

    constructor(private seznamService: SeznamiService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamService.getUporabnik(+params['id'])))
            .subscribe(uporabnik => this.uporabnik = uporabnik);
        this.pridobiRezervacijeUporabnika();
    }

    pridobiRezervacijeUporabnika(): void {
        this.seznamService
        .getSeznamRezervacij()
        .subscribe(seznamRezervacij => {
            this.seznamRezervacij = seznamRezervacij;
            this.seznamRezervacij=this.seznamRezervacij.filter(rezervacija => rezervacija.uporabnik.id ===this.uporabnik.id);
        });
    }

    dodajRezervacijo(): void {
        this.router.navigate(['uporabniki/' + this.uporabnik.id + '/dodaj']);
    }

    nazaj(): void {
        this.router.navigate(['uporabniki']);
    }
}
