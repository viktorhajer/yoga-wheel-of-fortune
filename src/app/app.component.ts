import {Component, ViewChild} from '@angular/core';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SpinnerModel} from './model/spinner.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('spinnerFirst') spinnerFirst: SpinnerComponent | undefined;
  value = '';

  dataFirst: SpinnerModel = {
    options: [
      {color: '#B8D430', label: 'Shashankasana'},
      {color: '#3AB745', label: 'Akarna Dhanurasana'},
      {color: '#20a39b', label: 'Dvikonasana'},
      {color: '#41afd9', label: 'Sumeru Asana'},
      {color: '#6361bb', label: 'Yoga Mudra'},
      {color: '#a375bb', label: 'Vrikshasana'},
      {color: '#CC0071', label: 'Pada Prasara Puranutthan.'},
      {color: '#F80120', label: 'Shirshasana'},
      {color: '#F35B20', label: 'Padma Vrishchikasana'},
      {color: '#FB9A00', label: 'Just Crepes'},
      {color: '#FFCC00', label: 'Arby\'s'},
      {color: '#FEF200', label: 'Indian'}
    ]
  };

  stopped(text: string) {
    this.value = text;
  }
}
