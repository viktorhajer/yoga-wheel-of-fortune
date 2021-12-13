import {Component} from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent {

  control = 0;
  mouseControl = 0;
  mousePos = 0;
  started = false;

  constructor() {
    addEventListener('mouseup', () => {
      this.started = false;
    });
    addEventListener('mousemove', (event: MouseEvent) => {
      if (this.started) {
        this.mousePos = event.clientY;
      }
    });
  }

  start(event: MouseEvent, element: HTMLElement) {
    if (!this.started) {
      const value = element.style.transform;
      this.control = Number(value ? value.substring(value.indexOf('(') + 1, value.indexOf('deg')) : '0');
      this.started = true;
      this.mousePos = event.clientY;
      this.mouseControl = event.clientY;
      this.rotate(element);
    }
  }

  rotate(element: HTMLElement) {
    const value = this.control + this.mousePos - this.mouseControl;
    element.style.transform = `rotate(${value}deg)`;
    if (this.started) {
      setTimeout(() => this.rotate(element), 10);
    }
  }
}
