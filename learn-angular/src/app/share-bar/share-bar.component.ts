import { Component } from '@angular/core';

@Component({
  selector: 'app-share-bar',
  standalone: true,
  template: `
    <button (click)="copy()">Copy link</button>
  `
})
export class ShareBarComponent {

  async copy() {
    await navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
  }
}