import { Component } from '@angular/core';

// templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  template: `
    <h1>Services Class</h1>
    <app-card></app-card>
    <router-outlet></router-outlet>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
}
