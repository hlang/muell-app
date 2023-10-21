import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Street {
  id: number;
  name: string;
  ort: Ort;
  plz: string
}

export interface Ort {
  id: number;
  name: string;
}

export interface Fraktion {
  farbeRgb: string;
  iconNr: number;
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor(private http: HttpClient) { }

  getStreets(): Observable<Street[]> {
    return this.http.get<Street[]>("https://nuernberg-abfallapp.regioit.de/abfall-app-nuernberg/rest/orte/5273009/strassen");
  }

  getStreetFraktions(streetId: number): Observable<Fraktion[]> {
    return this.http.get<Fraktion[]>(`https://nuernberg-abfallapp.regioit.de/abfall-app-nuernberg/rest/strassen/${streetId}/fraktionen`);
  }

}
