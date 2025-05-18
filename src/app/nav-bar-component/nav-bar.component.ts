import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  logout() {
    // Add your logout logic here
    console.log('User logged out');
  }
}
