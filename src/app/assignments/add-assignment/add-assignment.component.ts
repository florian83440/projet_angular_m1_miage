import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../shared/snackbar.service';
import {SubjectService} from "../../shared/subject.service";
import {TeacherService} from "../../shared/teacher.service";
import {StudentService} from "../../shared/student.service";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  // Evenement qu'on enverra au père avec la soumission
  // du formulaire
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // pour le formulaire
  nomDevoir:string=""
  dateDeRendu?:Date=undefined;
  matiere_id!:number;
  enseignant_id!:number;
  auteur_id!:number;
  note?: number;
  comment:string = "";


  constructor(protected subjectService: SubjectService,
              protected teacherService: TeacherService,
              protected studentService: StudentService,
              private assignmentService: AssignmentService,
              private router: Router,
              private snackBarService: SnackBarService) {}

  ngOnInit(): void{}

  onSubmit(event:any) {

    let a = new Assignment();
    a.nom = this.nomDevoir;
    if(this.dateDeRendu)
      a.dateDeRendu = this.dateDeRendu;

    a.rendu = false;
    // a.matiere_id = this.matiere_id;
    // a.enseignant_id = this.enseignant_id;
    a.matiere_id = this.matiere_id;
    a.enseignant_id = this.enseignant_id;
    a.auteur_id = this.auteur_id;
    a.comment = this.comment;
    a.note = this.note;

    this.assignmentService.addAssignment(a);

    this.router.navigate(['/list-assignment']); // Adjust the route as per your application's routing configuration
    this.snackBarService.openSnackBar('Devoir '+a.nom+' ajouté !', 'Fermer');

  }

}
