import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {AsanaDialogComponent} from './components/asana-dialog/asana-dialog.component';
import {CircleButtonComponent} from './components/circle-button/circle-button.component';
import {HandComponent} from './components/hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AsanaDialogComponent,
    CircleButtonComponent,
    HandComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
