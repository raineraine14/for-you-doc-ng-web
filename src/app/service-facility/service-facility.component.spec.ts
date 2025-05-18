import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFacilityComponent } from './service-facility.component';

describe('ServiceFacilityComponent', () => {
  let component: ServiceFacilityComponent;
  let fixture: ComponentFixture<ServiceFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
