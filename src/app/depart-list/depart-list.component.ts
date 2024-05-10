import { Component } from '@angular/core';
import { Department } from '../_models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-depart-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './depart-list.component.html',
  styleUrl: './depart-list.component.css'
})
export class DepartListComponent {
  ndepart:Department = new Department(0,"");
  sDepart:Department = new Department(0,"");

  departments:Department[]=[
    new Department(2,"Open Source"),
    new Department(3,"AI"),
    new Department(4,"Software Fundemental"),
  ]

  save(){
    this.departments.push(new Department(this.ndepart.id,this.ndepart.name));
    this.resetForm();
  }

  show(d:Department){
    this.sDepart=d;
  }


  edit(d:Department) {
    this.sDepart = new Department(d.id, d.name);
  }
  
  update() {
    const depart = this.departments.findIndex(department => department.id === this.sDepart.id);
    if (depart !== -1) {
      this.departments[depart] = new Department(this.sDepart.id, this.sDepart.name);
      this.resetForm();
    }
  }

  // Delete Student Data
  delete(d:Department) {
    this.sDepart = d; 
  }

  confirmDelete() {
      const index = this.departments.findIndex(department => department.id === this.sDepart.id);
      if (index !== -1) {
          this.departments.splice(index, 1);
      }
  }
  
  resetForm() {
    this.ndepart = new Department(0, "");
    this.sDepart = new Department(0, "");
  }
}
