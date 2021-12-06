import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SpinnerComponent} from '../spinner/spinner.component';
import {SpinnerModel} from '../../model/spinner.model';

@Component({
  selector: 'app-asana-dialog',
  templateUrl: './asana-dialog.component.html',
  styleUrls: ['./asana-dialog.component.scss']
})
export class AsanaDialogComponent {

  @ViewChild('spinnerFirst') spinnerFirst: SpinnerComponent | undefined;
  value = '';
  level = 8;

  constructor(protected dialogRef: MatDialogRef<AsanaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { model: SpinnerModel }) {
  }

  changeLevel() {
    setTimeout(() => this.spinnerFirst?.refresh(), 100);
  }

  stopped(text: string) {
    this.value = text;
  }

  getData(): SpinnerModel {
    return {options: this.data.model.options.filter(o => o.level <= this.level)};
  }

  close() {
    this.dialogRef.close();
  }
}
