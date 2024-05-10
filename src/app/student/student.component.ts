import { Component } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
    std:Student= new Student(3,"Rehab Kosbar",25);
    id:number=4;
    name:string="Aly";
    age:number=22;
}