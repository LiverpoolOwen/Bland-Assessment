// cash-counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './cash-counter.component.html',
  standalone: false,
  styleUrls: ['./cash-counter.component.css']
})
export class CashCounterComponent {
  targetAmount: number = 500;
  enteredAmount: number = 0;
  difference: number = 0;
  
  denominations = [
    { label: '£100', value: 100, count: 0 },
    { label: '£50', value: 50, count: 0 },
    { label: '£20', value: 20, count: 0 },
    { label: '£10', value: 10, count: 0 },
    { label: '£5', value: 5, count: 0 },
    { label: '£1', value: 1, count: 0 },
    { label: '50p', value: 0.5, count: 0 },
    { label: '20p', value: 0.2, count: 0 },
    { label: '10p', value: 0.1, count: 0 },
    { label: '5p', value: 0.05, count: 0 }
  ];
  
  calculateTotal() {
    this.enteredAmount = this.denominations.reduce((sum, denom) => sum + (denom.value * denom.count), 0);
    this.difference = this.targetAmount - this.enteredAmount;
  }
  
  setEnteredAmount(value: number) {
    this.enteredAmount = value;
    this.difference = this.targetAmount - this.enteredAmount;
  }
  
  submitData() {
    console.log({
      targetAmount: this.targetAmount,
      enteredAmount: this.enteredAmount,
      difference: this.difference,
      denominations: this.denominations.map(d => ({ denomination: d.label, count: d.count, total: d.value * d.count }))
    });
  }
}
