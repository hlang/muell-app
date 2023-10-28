import {Component, Input} from '@angular/core';
import {Fraktion, Street} from "../services/street.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-street-editor',
  templateUrl: './street-editor.component.html',
  styleUrls: ['./street-editor.component.css']
})
export class StreetEditorComponent {
  @Input() street: Street;
  @Input() fraktion: Fraktion;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close('Close click')
  }

  save() {
    console.info("Save our changes");
    this.close();
  }
}
