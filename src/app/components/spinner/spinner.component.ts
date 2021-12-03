import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {SpinnerModel} from '../../model/spinner.model';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() size = 400;
  @Input() data: SpinnerModel = new SpinnerModel();
  @Input() color = '#000000';
  @Output() stopped = new EventEmitter();
  noBlur = true;

  private spinning = false;
  private startAngle = 0;
  private spinTimeout = 0;
  private arc = 0;

  ngOnInit() {
    setTimeout(() => this.refresh(), 50);
  }

  spin() {
    if (!this.spinning) {
      this.spinning = true;
      this.noBlur = false;
      const spinAngleStart = Math.random() * 10 + 10;
      const spinTime = 0;
      const spinTimeTotal = Math.random() * 3 + 4 * 1000;
      this.rotateWheel(spinAngleStart, spinTime, spinTimeTotal);
    }
  }

  isSpinning(): boolean {
    return this.spinning;
  }

  refresh() {
    this.arc = Math.PI / (this.data.options.length / 2);
    const canvas = document.getElementById('wheelcanvas') as HTMLCanvasElement;
    if (canvas.getContext) {
      const outsideRadius = this.size / 2 - 10;
      const textRadius = 80;
      const insideRadius = 20;

      const ctx = canvas.getContext('2d') as any;
      ctx.clearRect(0, 0, this.size, this.size);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;
      ctx.font = 'bold 10px sans-serif';

      for (let i = 0; i < this.data.options.length; i++) {
        const angle = this.startAngle + i * this.arc;
        ctx.fillStyle = this.data.options[i].color;

        ctx.beginPath();
        ctx.arc(this.size / 2, this.size / 2, outsideRadius, angle, angle + this.arc, false);
        ctx.arc(this.size / 2, this.size / 2, insideRadius, angle + this.arc, angle, true);
        //ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur    = 0;
        ctx.shadowColor   = "rgba(255,255,255, 0.3)";
        ctx.fillStyle = this.color;
        ctx.translate(this.size / 2 + Math.cos(angle + this.arc / 2) * textRadius, this.size / 2 + Math.sin(angle + this.arc / 2) * textRadius);
        ctx.rotate(angle + this.arc / 2);
        const text = this.data.options[i].label;
        ctx.fillText(text, -40, 0);
        ctx.restore();
      }

      this.drawArrow(ctx, outsideRadius);
    }
  }

  private drawArrow(ctx: any, outsideRadius: number) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.size / 2 - 4, this.size / 2 - (outsideRadius + 5));
    ctx.lineTo(this.size / 2 + 4, this.size / 2 - (outsideRadius + 5));
    ctx.lineTo(this.size / 2 + 4, this.size / 2 - (outsideRadius - 5));
    ctx.lineTo(this.size / 2 + 9, this.size / 2 - (outsideRadius - 5));
    ctx.lineTo(this.size / 2 + 0, this.size / 2 - (outsideRadius - 13));
    ctx.lineTo(this.size / 2 - 9, this.size / 2 - (outsideRadius - 5));
    ctx.lineTo(this.size / 2 - 4, this.size / 2 - (outsideRadius - 5));
    ctx.lineTo(this.size / 2 - 4, this.size / 2 - (outsideRadius + 5));
    ctx.fill();
  }

  private rotateWheel(spinAngleStart: number, spinTime: number, spinTimeTotal: number) {
    spinTime += 30;
    if (!this.noBlur && Math.abs(spinTime - spinTimeTotal) <= 2500){
      this.noBlur = true;
    }
    if (spinTime >= spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    const spinAngle = spinAngleStart - this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    this.startAngle += (spinAngle * Math.PI / 180);
    this.refresh();
    this.spinTimeout = setTimeout(() => this.rotateWheel(spinAngleStart, spinTime, spinTimeTotal), 15);
  }

  private stopRotateWheel() {
    clearTimeout(this.spinTimeout);
    const degrees = this.startAngle * 180 / Math.PI + 90;
    const arcd = this.arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    const text = this.data.options[index].label;
    this.spinning = false;
    this.stopped.emit(text);
  }

  private easeOut(t: number, b: number, c: number, d: number) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
}
