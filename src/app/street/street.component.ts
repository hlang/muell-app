import {Component, Input} from '@angular/core';
import {Fraktion, Street, StreetService} from "../services/street.service";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent {
  private _street: Street;
  get street(): Street {
    return this._street;
  }

  @Input()
  set street(value: Street) {
    if(this._street !== value) {
      this._street = value;
      this.fraktions = [];
    }
  }

  fraktions: Fraktion[] = [];

  constructor(private streetService: StreetService) {
  }

  loadFraktions() {
    this.streetService.getStreetFraktions(this._street.id)
      .subscribe(fraktions =>
        this.fraktions = fraktions.map(f => ({...f, farbeRgb: `#${f.farbeRgb}`}))
      );
  }
}
