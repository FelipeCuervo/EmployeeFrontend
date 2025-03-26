import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    EmployeesComponent,
    
  ],
  providers: [provideHttpClient(withFetch())], 
  exports: [EmployeesComponent]
})
export class EmployeesModule { }
