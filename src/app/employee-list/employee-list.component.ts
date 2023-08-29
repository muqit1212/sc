import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  error:String
  employees: Employee[];
  constructor(private employeeService:EmployeeService){ }
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    return this.employeeService.getEmployeesList().subscribe
    (data=> {
      this.employees=data;
    })
  }
}