import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from '../shared/student.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  studentSelectionne?: number;

  constructor (private studentService:StudentService, private loginService:LoginService){}

  ngOnInit() {
    console.log(" AVANT RENDU DE LA PAGE !");
  }

  getStudents() {
    return this.studentService.getStudents();
  }

  getAssignementSelectionne() {
    return this.studentSelectionne ? this.getAssignement(this.studentSelectionne) : undefined;
  }

  getAssignement(id: number) {
    return this.studentService.getStudent(id);
  }

  studentClique(a: Student) {
    this.studentSelectionne = a.id;
  }

  onNouvelStudent(event: Student) {
    this.studentService.addStudent(event);
  }

  onDeleteStudent(element: Student) {
    this.studentService.deleteStudent(element);
  }

  isUserConnected(){
    return this.loginService.isLogged();
  }

}

