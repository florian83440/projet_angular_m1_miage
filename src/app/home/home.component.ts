import { Component, OnInit } from '@angular/core';
import {AssignmentService} from "../shared/assignments.service";
import { TeacherService } from "../shared/teacher.service";
import { SubjectService } from "../shared/subject.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected nbAssignments: number = 0;
  protected nbAssignmentsRendus: number = 0;
  protected nbAssignmentsNonRendus: number = 0;
  protected nbAssignmentsTeacher: any = [];
  protected nbAssignmentsSubject: any = [];

  constructor(protected assignmentService: AssignmentService, private teacherService: TeacherService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.getNombreAssignments()
    this.getNombreAssignmentsRendus()
    this.getNombreAssignmentsNonRendus()
    this.getNombreAssignmentsByTeacher();
    this.getNombreAssignmentsBySubject()
  }

  getNombreAssignments(){
    this.assignmentService.getAssignments()
        .subscribe(data => {
          this.nbAssignments = data.totalDocs;
        });
  }

  getNombreAssignmentsRendus(){
    this.assignmentService.getAssignmentsRendus()
        .subscribe(data => {
          this.nbAssignmentsRendus = data.totalDocs;
        });
  }

  getNombreAssignmentsNonRendus() {
    this.assignmentService.getAssignmentsNonRendus()
        .subscribe(data => {
          this.nbAssignmentsNonRendus = data.totalDocs;
        });
  }

  getNombreAssignmentsByTeacher() {
    let teachers = this.teacherService.getTeachers();
    teachers.forEach(teacher => {
      this.assignmentService.getAssignmentsByTeacher(teacher.id)
          .subscribe(data => {
            this.nbAssignmentsTeacher[teacher.id] = data.totalDocs;
          });
    })
  }

  getNombreAssignmentsBySubject() {
    let subjects = this.subjectService.getSubjects();
    subjects.forEach(subject => {
      this.assignmentService.getAssignmentsBySubject(subject.id)
          .subscribe(data => {
            this.nbAssignmentsSubject[subject.id] = data.totalDocs;
          });
    })
  }

  getTeachers(){
    return this.teacherService.getTeachers();
  }

  getSubjects(){
    return this.subjectService.getSubjects();
  }

}
