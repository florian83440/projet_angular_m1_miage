import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentService } from '../shared/assignments.service';
import { LoginService } from '../shared/login.service';
import { TeacherService } from "../shared/teacher.service";

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css'],
})

export class AssignmentsComponent implements OnInit {

    page: number = 1;
    limit: number = 1;

    constructor (private teacherService:TeacherService, protected assignmentService:AssignmentService, private loginService:LoginService){}

    assignments:Assignment[] = [];

    public getDataSource(){
        return this.assignments;
    }

    ngOnInit() {
        this.assignmentService.getAssignmentsAPI(this.page, this.limit);
    }
        updateList(event: any) {
            this.assignmentService.getAssignmentsAPI(event.pageIndex + 1, event.pageSize);
        }

    isUserConnected(){
        return this.loginService.isLogged();
    }

    getTeacherName(teacher_id: number) {
        var returnName: string | undefined = "";

        this.teacherService.getTeacherName(teacher_id)
            .subscribe(teacherName => returnName = teacherName);

        return returnName;
    }

    public getPage(){
        return this.page;
    }

    public getLimit(){
        return this.limit;
    }

    public getAssignments(){
        return this.assignmentService.getAssignments();
    }
}
