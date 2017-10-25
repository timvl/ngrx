import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <div class="content-container">
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
