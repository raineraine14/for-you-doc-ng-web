import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-side-panel-component',
  standalone: true,
  imports: [CardModule, TieredMenuModule],
  templateUrl: './side-panel-component.component.html',
  styleUrl: './side-panel-component.component.scss',
})
export class SidePanelComponentComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi-chart-bar',
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
      },
      {
        label: 'New',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'New Charge Information',
            routerLink: '/charge',
          },
          {
            label: 'New Service Facility',
            routerLink: '/service-facility',
          },
          {
            label: 'New HMO',
            routerLink: '/hmo-information',
          },
          {
            label: 'New Service Procedures',
          },
        ],
      },
    ];
  }
}
