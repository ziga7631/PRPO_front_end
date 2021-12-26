import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Uporabnik } from './models/uporabnik';
import { SeznamiService } from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    templateUrl: 'seznami.component.html'
})
export class SeznamiComponent implements OnInit {

    uporabniki: Uporabnik[];
    uporabnik: Uporabnik;

    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getUporabniki();
    }

    getUporabniki(): void {
        this.seznamiService
            .getUporabniki()
            .subscribe(uporabniki => this.uporabniki = uporabniki);
    }

    naPodrobnosti(uporabnik: Uporabnik): void {
        this.uporabnik = uporabnik;
        this.router.navigate(['/uporabniki', this.uporabnik.id]);
    }

    delete(uporabnik: Uporabnik): void {
        this.seznamiService
            .delete(uporabnik.id)
            .subscribe(uporabnikId => this.uporabniki = this.uporabniki.filter(up => up.id !== uporabnik.id));
    }

}
