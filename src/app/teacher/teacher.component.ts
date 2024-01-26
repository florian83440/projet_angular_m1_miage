import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { TeacherService } from '../shared/teacher.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {

  teacherSelectionne?: number;

  constructor (private teacherService:TeacherService, private loginService:LoginService){}

  ngOnInit() {
    console.log(" AVANT RENDU DE LA PAGE !");
  }

  getTeachers() {
    return this.teacherService.getTeachers();
  }

  getAssignementSelectionne() {
    return this.teacherSelectionne ? this.getAssignement(this.teacherSelectionne) : undefined;
  }

  getAssignement(id: number) {
    return this.teacherService.getTeacher(id);
  }

  teacherClique(a: Teacher) {
    this.teacherSelectionne = a.id;
  }

  onNouvelTeacher(event: Teacher) {
    this.teacherService.addTeacher(event);
  }

  onDeleteTeacher(element: Teacher) {
    this.teacherService.deleteTeacher(element);
  }

  isUserConnected(){
    return this.loginService.isLogged();
  }

}

