import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignments.service';
import {SubjectService} from "../../shared/subject.service";
import {TeacherService} from "../../shared/teacher.service";
import {StudentService} from "../../shared/student.service";
import {SnackBarService} from "../../shared/snackbar.service";

@Component({
 selector: 'app-edit-assignment',
 templateUrl: './edit-assignment.component.html',
 styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
    assignment!: Assignment | undefined;
    nomDevoir:string=""
    dateDeRendu!:Date;
    matiere_id?:number;
    enseignant_id?:number;
    auteur_id?:number;
    note?: number;
    comment:string = "";

 constructor(   protected subjectService: SubjectService,
                protected teacherService: TeacherService,
                protected studentService: StudentService,
                private assignmentsService: AssignmentService,
                private snackbarService: SnackBarService,
                private route: ActivatedRoute,
                private router: Router
 ) {}

 ngOnInit(): void {
   this.getAssignment();
 }
 getAssignment() {
    const id = +this.route.snapshot.params['id'];
   
    this.assignmentsService.getAssignmentAPI(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;

      this.nomDevoir = assignment.nom;
      this.dateDeRendu = assignment.dateDeRendu;
      this.note = assignment.note;
      this.comment = assignment.comment;
      this.matiere_id = assignment.matiere_id;
      this.enseignant_id = assignment.enseignant_id;
      this.auteur_id = assignment.auteur_id;
    });
  }
  onSaveAssignment() {
    if (!this.assignment) return;

    this.assignment.nom = this.nomDevoir;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignment.note = this.note;
    this.assignment.comment = this.comment;
    this.assignment.matiere_id = this.matiere_id;
    this.assignment.enseignant_id = this.enseignant_id;
    this.assignment.auteur_id = this.auteur_id;

    this.assignmentsService
      .updateAssignment(this.assignment).subscribe(
        (updatedAssignment) => {
            console.log('Assignment updated successfully:', updatedAssignment);
            this.router.navigate(['/assignment/'+this.assignment?.id]);
            this.snackbarService.openSnackBar('Devoir modifié !', 'Fermer');
        },
        error => {
            console.error('Error updating assignment:', error);
            this.snackbarService.openSnackBar('Erreur lors de la modification !', 'Fermer');
            // Handle the error appropriately in your component
        });
  }
 }
 