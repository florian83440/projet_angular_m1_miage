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

}

