import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../shared/snackbar.service';

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
  nomDevoir=""
  dateDeRendu?:Date=undefined;


  constructor(private assignmentService: AssignmentService, private router: Router, private snackBarService: SnackBarService) {}

  ngOnInit(): void{}

  onSubmit(event:any) {

    let a = new Assignment();
    a.nom = this.nomDevoir;
    if(this.dateDeRendu)
      a.dateDeRendu = this.dateDeRendu;

    a.rendu = false;
    a.matiere_id = 1;
    a.enseignant_id = 1;

    this.assignmentService.addAssignment(a);

    this.router.navigate(['/list-assignment']); // Adjust the route as per your application's routing configuration
    this.snackBarService.openSnackBar('Devoir ajouté !', 'Fermer');

  }

}
