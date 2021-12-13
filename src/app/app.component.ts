import {Component} from '@angular/core';
import {DialogService} from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options = [
    {color: '#B8D430', label: 'Shashankasana', level: 1},
    {color: '#3AB745', label: 'Akarna Dhanurasana', level: 2},
    {color: '#20a39b', label: 'Dvikonasana', level: 1},
    {color: '#41afd9', label: 'Sumeru Asana', level: 3},
    {color: '#6361bb', label: 'Yoga Mudra', level: 4},
    {color: '#a375bb', label: 'Vrikshasana', level: 4},
    {color: '#CC0071', label: 'Pada Prasara Puranutthan.', level: 6},
    {color: '#F80120', label: 'Shirshasana', level: 6},
    {color: '#F35B20', label: 'Padma Vrishchikasana', level: 8},
    {color: '#FB9A00', label: 'Dvikonasana', level: 7},
    {color: '#FFCC00', label: 'Sumeru Asana', level: 5},
    {color: '#FEF200', label: 'Yoga Mudra', level: 4}
  ];

  constructor(private readonly dialogService: DialogService) {
  }

  open() {
    this.dialogService.open({options: this.options});
  }
}
