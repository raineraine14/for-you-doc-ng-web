import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-service-facility',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './service-facility.component.html',
  styleUrl: './service-facility.component.scss',
})
export class ServiceFacilityComponent {}
