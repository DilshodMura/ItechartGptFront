import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorybarComponent } from './historybar.component';

describe('HistorybarComponent', () => {
  let component: HistorybarComponent;
  let fixture: ComponentFixture<HistorybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorybarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
