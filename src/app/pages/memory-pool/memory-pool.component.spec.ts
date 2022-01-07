import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryPoolComponent } from './memory-pool.component';

describe('MemoryPoolComponent', () => {
  let component: MemoryPoolComponent;
  let fixture: ComponentFixture<MemoryPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
