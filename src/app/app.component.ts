import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basic Angular Calculator';
  valueA = '';
  valueB = '';
  ValueAdd: any = '';
  ValueSub: any = '';
  ValueMul: any = '';
  ValueDiv: any = '';
  ValueMod: any = '';

  add() {
    this.ValueAdd = Number(this.valueA) + Number(this.valueB);
  }
  sub() {
    this.ValueSub = Number(this.valueA) - Number(this.valueB);
  }
  mul() {
    this.ValueMul = Number(this.valueA) * Number(this.valueB);
  }
  div() {
    this.ValueDiv = Number(this.valueA) / Number(this.valueB);
  }
  mod() {
    this.ValueMod = Number(this.valueA) % Number(this.valueB);
  }

  reset(){
    this.ValueAdd = '';
    this.ValueSub = '';
    this.ValueDiv = '';
    this.ValueMod = '';
    this.ValueMul = '';
  }
  calc(){
    this.add();
    this.sub();
    this.mul();
    this.div();
    this.mod();
  }

}
