import { Component, OnInit } from '@angular/core';
import {AssignmentService} from "../shared/assignments.service";
import {TeacherService} from "../shared/teacher.service";
import {SubjectService} from "../shared/subject.service";
import {MatTableDataSource} from "@angular/material/table";
import {Assignment} from "../assignments/assignment.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected nbAssignments: number = 0;
  protected nbAssignmentsRendus: number = 0;
  protected nbAssignmentsNonRendus: number = 0;
  constructor(private assignmentService: AssignmentService, private teacherService: TeacherService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.getNombreAssignments()
    this.getNombreAssignmentsRendus()
    this.getNombreAssignmentsNonRendus()
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

  getNombreAssignmentsByTeacher(teacher_id:number): number {
    return this.assignmentService.getAssignmentsByTeacher(teacher_id).length
  }

  getNombreAssignmentsBySubject(subject_id:number): number {
    return this.assignmentService.getAssignmentsBySubject(subject_id).length
  }

  getTeachers(){
    return this.teacherService.getTeachers();
  }

  getSubjects(){
    return this.subjectService.getSubjects();
  }

}
