import { Component, OnInit } from '@angular/core';
import { EmployeesService,Employee} from '../employees/employees.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [EmployeesService] 
})

export class EmployeesComponent implements OnInit{

  employees: Employee[] = [];
  employee?: Employee;
  searchId: number | undefined ;
  errorMessage: string = '';

  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.employee = undefined;
        this.errorMessage = '';
      },
      error: () => this.errorMessage = 'Error al obtener los empleados'
    });
  }

  searchEmployee(): void {
    if (!this.searchId) {
      this.getAllEmployees();
      return;
    }
    this.employeeService.getEmployeeById(this.searchId).subscribe({
      next: (data) => {
        this.employee = data;
        this.employees = [];
        this.errorMessage = '';
      },
      error: () => this.errorMessage = 'Empleado no encontrado'
    });
  }

}
