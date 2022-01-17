import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxModalComponent } from './tx-modal.component';

describe('TxModalComponent', () => {
  let component: TxModalComponent;
  let fixture: ComponentFixture<TxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
