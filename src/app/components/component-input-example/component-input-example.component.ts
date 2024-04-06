import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css',
  imports: [PersonTableComponent],
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Gina',
    surName: 'Voumvoulaki',
    age: 36,
    email: 'g.voumvoulaki@gmail.com',
    address: 'Athens, Greece',
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  };
}
