import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
  <h1>About</h1>
  <p>This app demonstrates Angular routing and components.</p>

  <a href="https://angular.dev" target="_blank">
    Angular official site
  </a>
  `
})
export class AboutPageComponent {}