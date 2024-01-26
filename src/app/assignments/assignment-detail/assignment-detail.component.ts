import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../../shared/assignments.service';
import { UserService } from '../../shared/user.service';
import { SnackBarService } from '../../shared/snackbar.service';

@Component({
    selector: 'app-assignment-detail',
    templateUrl: './assignment-detail.component.html',
    styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

    assignmentTransmis?: Assignment;

    constructor(private assignmentService: AssignmentService, private route: ActivatedRoute, private router: Router, private userService:UserService, private snackBarService: SnackBarService) { }

    ngOnInit() {
        this.getAssignment();
    }

    getAssignment() {
        const id = +this.route.snapshot.params['id'];
        this.assignmentService.getAssignmentAPI(id)
            .subscribe(assignment => this.assignmentTransmis = assignment);
    }

    edit() {
        this.router.navigate(["/assignment", this.assignmentTransmis?.id, "edit"],
            { queryParams: { nom: this.assignmentTransmis?.nom }, fragment: 'edition' })
    }

    delete() {
        this.assignmentTransmis ? this.assignmentService.deleteAssignment(this.assignmentTransmis) : '';

        this.router.navigate(["/home"])

        this.snackBarService.openSnackBar('Devoir supprimé !', 'Fermer');

    }

    onAsssignmentRendu() {
        this.assignmentTransmis ? this.assignmentTransmis.rendu = true : '';
        this.assignmentTransmis ? this.assignmentService.updateAssignment(this.assignmentTransmis) : '';

        this.router.navigate(["/home"])

        this.snackBarService.openSnackBar('Devoir rendu !', 'Fermer');
    }

    public isAdmin():boolean {
        return this.userService.isUserAdmin();
    }
}
