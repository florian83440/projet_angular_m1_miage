import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../../shared/assignments.service';
import { UserService } from '../../shared/user.service';
import { SnackBarService } from '../../shared/snackbar.service';
import {TeacherService} from "../../shared/teacher.service";
import {SubjectService} from "../../shared/subject.service";

@Component({
    selector: 'app-assignment-detail',
    templateUrl: './assignment-detail.component.html',
    styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

    assignmentTransmis?: Assignment;

    constructor(private assignmentService: AssignmentService,
                private route: ActivatedRoute,
                private router: Router,
                private userService:UserService,
                protected teacherService:TeacherService,
                protected subjectService:SubjectService,
                private snackBarService: SnackBarService) { }

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

    public getTeacherName(teacher_id:number):string{
        let name = "";
        this.teacherService.getTeacher(teacher_id).subscribe(
            teacher => name = teacher?.prenom + ' ' + teacher?.nom
        )
        return name
    }

    public getSubjectLibelle(subject_id:number):string{
        let lib: string | undefined = "";
        this.subjectService.getSubject(subject_id).subscribe(
            subject => lib = subject?.libelle
        )
        return lib
    }
}
