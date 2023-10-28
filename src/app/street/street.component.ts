import {Component, Input} from '@angular/core';
import {Fraktion, Street, StreetService} from "../services/street.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JsonPipe} from "@angular/common";
import {StreetEditorComponent} from "../street-editor/street-editor.component";

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
      this.loadFraktions();
    }
  }

  fraktions: Fraktion[] = [];

  constructor(private streetService: StreetService,
              private modalService: NgbModal) {
  }

  loadFraktions() {
    this.streetService.getStreetFraktions(this._street.id)
      .subscribe(fraktions =>
        this.fraktions = fraktions.map(f => ({...f, farbeRgb: `#${f.farbeRgb}`}))
      );
  }

  openModal(fraktion: Fraktion) {
    console.info("Open Modal")
    const modalRef = this.modalService.open(StreetEditorComponent);
    modalRef.componentInstance.street = this.street;
    modalRef.componentInstance.fraktion = fraktion;
  }
}
