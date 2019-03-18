import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee=[];
  public errorMsg;

  constructor(private _employeeService: EmployeeserviceService ) {


   }

  ngOnInit() {

    this._employeeService.getEmployees()
      .subscribe(data => this.employee = data,
                error => this.errorMsg = error);
  }

}
