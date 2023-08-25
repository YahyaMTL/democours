import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/users.model';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private liste_employees:Employee[] = [];

  constructor() {
    // Initialize a list of users from the library Faker
    // npm install faker --save
    // npm install @types/faker --save
    // npm i --save-dev @types/faker
    for(let i=0;i<20;i++) {
        console.log(faker.name.firstName());
        this.liste_employees.push(
            {
                id: i,
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                country: faker.address.country()
            }
        );
    }
     
   }

  public getEmployees(): Observable<Employee[]> {
      return new Observable<Employee[]>(
          (observable) => {
              observable.next(this.liste_employees);
              observable.complete();
          }
      )
  }

}
