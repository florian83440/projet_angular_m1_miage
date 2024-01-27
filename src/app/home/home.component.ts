import { Component, OnInit } from '@angular/core';
import {AssignmentService} from "../shared/assignments.service";
import {TeacherService} from "../shared/teacher.service";
import {SubjectService} from "../shared/subject.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private assignmentService: AssignmentService, private teacherService: TeacherService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.assignmentService.getAssignmentsAPI();
  }

  getNombreAssignments(): number{
    return this.assignmentService.getAssignments().length;
  }

  getNombreAssignmentsRendus(): number {
    return this.assignmentService.getAssignmentsRendus().length
  }

  getNombreAssignmentsNonRendus(): number {
    return this.assignmentService.getAssignmentsNonRendus().length
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
