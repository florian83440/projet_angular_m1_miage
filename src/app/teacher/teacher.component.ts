import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../shared/teacher.service';
import {MatTableDataSource} from "@angular/material/table";
import {Assignment} from "../assignments/assignment.model";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {

  constructor (private teacherService:TeacherService){}

  ngOnInit() {
    // console.log(this.page)
    // console.log(this.limit)
    // this.getDataByPage(this.page, this.limit);
    // console.log(this.teachers)
    console.log(" AVANT RENDU DE LA PAGE !");
  }

  getTeachers() {
    return this.teacherService.getTeachers();
  }

}

