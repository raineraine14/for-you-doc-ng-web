import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmoComponent } from './hmo.component';

describe('HmoComponent', () => {
  let component: HmoComponent;
  let fixture: ComponentFixture<HmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
