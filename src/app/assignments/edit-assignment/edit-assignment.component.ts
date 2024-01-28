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
    private snackBarService: any;

 constructor(   protected subjectService: SubjectService,
                protected teacherService: TeacherService,
                protected studentService: StudentService,
                private assignmentsService: AssignmentService,
                private route: ActivatedRoute,
                private router: Router
 ) {}

 ngOnInit(): void {
   this.getAssignment();
 }
 getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];
   
    this.assignmentsService.getAssignmentAPI(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
      // Pour pré-remplir le formulaire
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
 
    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomDevoir;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)

      this.router.navigate(['/home']);
      this.snackBarService.openSnackBar('Devoir modifié !', 'Fermer');
  }
 }
 