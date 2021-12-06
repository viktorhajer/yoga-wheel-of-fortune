import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AsanaDialogComponent} from '../components/asana-dialog/asana-dialog.component';
import {SpinnerModel} from '../model/spinner.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  open(model: SpinnerModel): Observable<void> {
    return this.dialog.open(AsanaDialogComponent, {
      panelClass: 'full-modal',
      data: {model}
    }).afterClosed();
  }
}
