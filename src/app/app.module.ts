import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StreetsComponent } from './streets/streets.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StreetComponent } from './street/street.component';
import { StreetEditorComponent } from './street-editor/street-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    StreetsComponent,
    StreetComponent,
    StreetEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
