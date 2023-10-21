import {Component, OnInit} from '@angular/core';
import {Street, StreetService} from "../services/street.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";




@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.css']
})
export class StreetsComponent implements OnInit{
  private _streetSearchStr = "";
  get streetSearchStr(): string {
    return this._streetSearchStr;
  }

  set streetSearchStr(value: string) {
    this._streetSearchStr = value;
    this.filterStreets();
  }

  allStreets: Street[] = [];
  anzahl = 0;

  selectedStreet: Street;

  constructor(private streetService: StreetService) {
  }

  ngOnInit(): void {
    this.streetService.getStreets()
      .subscribe(ergebnis => {
        this.allStreets = ergebnis;
        this.anzahl = ergebnis.length;
      });
  }

  search: OperatorFunction<string, readonly Street[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.filterStreets(),
      ),
    );
  filterStreets(): Street[] {
   return  this.allStreets.filter(
      street => street.name.toLowerCase().includes(this.streetSearchStr.toLowerCase())
    ).slice(0, 10);
  }
  formatStreetName = (street: Street): string => street.name;

  selectStreet(event: NgbTypeaheadSelectItemEvent<any>) {
    this.selectedStreet = event.item;
  }
}
