import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/users.model';
import { EmployeeService } from '../services/users.service';
//import { Employee } from '../users.model';
//import { EmployeeService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public employees!: Employee[];

  constructor(
    private empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

}
