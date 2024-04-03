import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Gina';

  person0 = {
    givenName: 'Gina',
    surName: 'Voumvoulaki',
    age: 36,
    email: 'g.voumvoulaki@gmail.com',
    address: 'Athens, Greece',
  };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  };
}
