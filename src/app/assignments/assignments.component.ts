import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentService } from '../shared/assignments.service';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
    titre = "Formulaire d'ajout de devoir";
    color = 'green';
    id = "monParagraphe";
    boutonDesactive = true;

    assignmentSelectionne?: number;

    constructor (private assignmentService:AssignmentService){}

    ngOnInit() {
        console.log(" AVANT RENDU DE LA PAGE !");
    }

    getDescription() {
        return 'Je suis un sous composant';
    }

    getColor(a: any) {
        return a.rendu ? 'green' : 'red';
    }

    getAssignements() {
        return this.assignmentService.getAssignments();
    }

    getAssignementSelectionne() {
        return this.assignmentSelectionne ? this.getAssignement(this.assignmentSelectionne) : undefined;
    }

    getAssignement(id: number) {
        return this.assignmentService.getAssignment(id);
    }

    assignmentClique(a: Assignment) {
        this.assignmentSelectionne = a.id;
    }

    onNouvelAssignment(event: Assignment) {
        this.assignmentService.addAssignment(event);
    }

    onDeleteAssignment(element: Assignment) {
        this.assignmentService.deleteAssignment(element);
    }
}
