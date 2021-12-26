import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Uporabnik } from '../models/uporabnik';
import { Rezervacija } from '../models/rezervacija';
import { RezervacijaDTO } from '../models/rezervacijaDTO';

@Injectable()
export class SeznamiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/uporabniki';
    private urlRezervacije = 'http://localhost:8080/v1/rezervacije';

    constructor(private http: HttpClient) {
    }

    getUporabniki(): Observable<Uporabnik[]> {
        return this.http.get<Uporabnik[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getUporabnik(id: number): Observable<Uporabnik> {
        const url = `${this.url}/${id}`;
        console.log(url);
        return this.http.get<Uporabnik>(url)
                        .pipe(catchError(this.handleError));
    }

    getSeznamRezervacij(): Observable<Rezervacija[]> {
        return this.http.get<Rezervacija[]>(this.urlRezervacije)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(rezervacija: RezervacijaDTO): Observable<Rezervacija> {

        return this.http.post<RezervacijaDTO>(this.urlRezervacije, JSON.stringify(rezervacija), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

