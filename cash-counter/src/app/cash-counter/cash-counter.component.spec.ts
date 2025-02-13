import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CashCounterComponent } from './cash-counter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CashCounterComponent', () => {
  let component: CashCounterComponent;
  let fixture: ComponentFixture<CashCounterComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        FormsModule, 
        CommonModule
      ],
      declarations: [
        CashCounterComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CashCounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CashCounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Cash Counter');
  });

  it('should calculate total entered amount correctly', () => {
    component.denominations[0].count = 2; // 2 x £100
    component.denominations[1].count = 1; // 1 x £50
    component.calculateTotal();
    expect(component.enteredAmount).toBe(250);
  });

  it('should calculate difference correctly', () => {
    component.setEnteredAmount(400);
    expect(component.difference).toBe(100);
  });

  it('should log data on submit', () => {
    spyOn(console, 'log');
    component.submitData();
    expect(console.log).toHaveBeenCalledWith(jasmine.objectContaining({
      targetAmount: component.targetAmount,
      enteredAmount: component.enteredAmount,
      difference: component.difference
    }));
  });
});
