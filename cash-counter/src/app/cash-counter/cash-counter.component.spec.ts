import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CashCounterComponent } from './cash-counter.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        CashCounterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CashCounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cash-counter'`, () => {
    const fixture = TestBed.createComponent(CashCounterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cash-counter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CashCounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, cash-counter');
  });
});
