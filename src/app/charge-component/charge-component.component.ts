import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-charge-component',
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
  templateUrl: './charge-component.component.html',
  styleUrl: './charge-component.component.scss',
})
export class ChargeComponent {
  value: string | undefined;

  procedures = [
    { label: 'Procedure A', value: 'A' },
    { label: 'Procedure B', value: 'B' },
  ];

  hmos = [
    { label: 'HMO 1', value: 'hmo1' },
    { label: 'HMO 2', value: 'hmo2' },
  ];

  types = [
    { label: 'Inpatient', value: 'inpatient' },
    { label: 'Outpatient', value: 'outpatient' },
  ];

  facilities = [
    { label: 'Facility X', value: 'X' },
    { label: 'Facility Y', value: 'Y' },
  ];

  genders = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
  ];
}
