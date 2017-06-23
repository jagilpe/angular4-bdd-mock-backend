import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  name: string;
  greeting = 'Welcome!!';

  greet(): void {
    this.greeting = this.name !== null ? `Welcome ${this.name}!!` : 'Welcome!!';
  }
}
