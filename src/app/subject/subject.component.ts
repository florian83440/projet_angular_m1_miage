import { Component, OnInit } from '@angular/core';
import { Subject } from './subject.model';
import { SubjectService } from '../shared/subject.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit {

  constructor (private subjectService:SubjectService, private loginService:LoginService){}

  ngOnInit() {
    console.log(" AVANT RENDU DE LA PAGE !");
  }

  getSubjects() {
    return this.subjectService.getSubjects();
  }

}

