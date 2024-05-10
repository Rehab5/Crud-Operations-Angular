import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  nstd:Student= new Student(0,"",18);
  dstd:Student= new Student(0,"",0);

  students:Student[] = [
    new Student(1,"Rehab",25),
    new Student(2,"Mona",25),
    new Student(3,"Shimaa",22),
    new Student(4,"Sara",23),
  ]

  // Add student
  save(){
    this.students.push(new Student(this.nstd.id,this.nstd.name,this.nstd.age));
    this.resetForm();
  }

  // Show data of student
  show(s:Student){
    this.dstd=s;
  }

  // Edit of Student
  edit(s:Student) {
    this.dstd = new Student(s.id, s.name, s.age);
  }

  // Update of Student data
  update() {
    const std = this.students.findIndex(student => student.id === this.dstd.id);
    if (std !== -1) {
      this.students[std] = new Student(this.dstd.id, this.dstd.name, this.dstd.age);
      this.resetForm();
    }
  }

  // Delete Student Data
  delete(s:Student) {
    this.dstd = s; 
  }

  confirmDelete() {
      const index = this.students.findIndex(student => student.id === this.dstd.id);
      if (index !== -1) {
          this.students.splice(index, 1);
      }
  }
 
  resetForm() {
    this.nstd = new Student(0, "", 18);
    this.dstd = new Student(0, "", 0);
  }
}
