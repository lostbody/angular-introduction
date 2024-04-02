import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Gina';

  person = {
    givenName: 'Gina',
    surName: 'Voumvoulaki',
    age: 36,
    email: 'g.voumvoulaki@gmail.com',
  };
}
