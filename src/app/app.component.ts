import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'school-system';

  employees: any[] = [];
  error: string = '';

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        this.error = error; // Display the error to the user or handle it as needed
      }
    );
  }

}
