import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeComponentComponent } from './charge-component.component';

describe('ChargeComponentComponent', () => {
  let component: ChargeComponentComponent;
  let fixture: ComponentFixture<ChargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
