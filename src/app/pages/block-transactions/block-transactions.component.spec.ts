import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTransactionsComponent } from './block-transactions.component';

describe('BlockTransactionsComponent', () => {
  let component: BlockTransactionsComponent;
  let fixture: ComponentFixture<BlockTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
