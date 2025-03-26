import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_annual_salary:number;
  employee_age: number;
  profile_image: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService{
  private apiUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/all`).pipe(
      catchError(error => {
        console.error('Error al obtener empleados', error);
        return throwError(() => new Error('No se pudieron obtener los empleados.'));
      })
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener empleado', error);
        return throwError(() => new Error('No se pudo encontrar el empleado.'));
      })
    );
  }
}
