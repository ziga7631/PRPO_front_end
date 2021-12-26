import { Component } from "@angular/core";
import { Router, Params, ActivatedRoute } from "@angular/router";

import { SeznamiService } from "./services/seznami.service";
import { switchMap } from "rxjs/operators";
import { Rezervacija } from "./models/rezervacija";
import { Uporabnik } from "./models/uporabnik";
import { Postaja } from "./models/postaja";
import { RezervacijaDTO } from "./models/rezervacijaDTO";

@Component({
  moduleId: module.id,
  selector: "dodaj-rezervacijo",
  templateUrl: "rezervacija-dodaj.component.html",
})
export class RezervacijaDodajComponent {
  rezervacijaDTO: RezervacijaDTO = new RezervacijaDTO();

  constructor(
    private seznamiService: SeznamiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.rezervacijaDTO.uporabnik_id = params["id"];
    });
  }

  submitForm(): void {
    this.seznamiService
      .create(this.rezervacijaDTO)
      .subscribe(() => this.router.navigate(["/uporabniki/" + this.rezervacijaDTO.uporabnik_id]));
  }

  nazaj(): void {
    this.router.navigate(["/uporabniki"]);
  }

}
