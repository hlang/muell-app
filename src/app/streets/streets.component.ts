import {Component, OnInit} from '@angular/core';
import {Street, StreetService} from "../services/street.service";




@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.css']
})
export class StreetsComponent implements OnInit{

  streets: Street[] = [];
  anzahl = 0;
  constructor(private streetService: StreetService) {
  }

  ngOnInit(): void {
    this.streetService.getStreets()
      .subscribe(ergebnis => {
        this.streets = ergebnis;
        this.anzahl = ergebnis.length;
      });
  }

}
