import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidePanelComponentComponent } from './side-panel-component/side-panel-component.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidePanelComponentComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'for-you-doc-ng-web';
}
