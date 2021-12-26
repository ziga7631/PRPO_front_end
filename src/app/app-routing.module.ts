import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import {RezervacijaDodajComponent } from './seznami/rezervacija-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/uporabniki', pathMatch: 'full'},
    {path: 'uporabniki', component: SeznamiComponent},
    {path: 'uporabniki/:id', component: SeznamPodrobnostiComponent},
    {path: 'uporabniki/:id/dodaj', component: RezervacijaDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
