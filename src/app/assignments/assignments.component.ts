import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignments.service';
import { LoginService } from '../shared/login.service';
import { TeacherService } from "../shared/teacher.service";
import { SubjectService } from "../shared/subject.service";
import {Assignment} from "./assignment.model";
import {MatTableDataSource, MatTableDataSourcePaginator} from "@angular/material/table";

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css'],
})

export class AssignmentsComponent implements OnInit {

    page: number = 1;
    limit: number = 10;
    totalDocs: any;
    totalPages: any;
    hasPrevPage: any;
    prevPage: any;
    hasNextPage: any;
    nextPage: any;
    assignments: any;
    dataSource!: MatTableDataSource<Assignment>;

    constructor (private subjectService:SubjectService, private teacherService:TeacherService, protected assignmentService:AssignmentService, private loginService:LoginService){}

    ngOnInit() {
        this.assignmentService.getAssignmentsPagine(this.page, this.limit)
            .subscribe(data => {
                this.assignments = data.docs;
                this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
                this.page = data.page;
                this.limit = data.limit;
                this.totalDocs = data.totalDocs;
                this.totalPages = data.totalPages;
                this.hasPrevPage = data.hasPrevPage;
                this.prevPage = data.prevPage;
                this.hasNextPage = data.hasNextPage;
                this.nextPage = data.nextPage;
            });
    }
    updateList(event: any) {
        this.assignmentService.getAssignmentsAPI(event.pageIndex + 1, event.pageSize);
    }

    getDataByPage(page: number, limit: number) {
        this.assignmentService.getAssignmentsPagine(page, limit)
            .subscribe(data => {
                console.log(data)
                this.assignments = data.docs;
                this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
                this.page = data.page;
                this.limit = data.limit;
                this.totalDocs = data.totalDocs;
                this.totalPages = data.totalPages;
                this.hasPrevPage = data.hasPrevPage;
                this.prevPage = data.prevPage;
                this.hasNextPage = data.hasNextPage;
                this.nextPage = data.nextPage;
            });
    }

    updateAssignmentsTable() {
        this.assignmentService.getAssignmentsPagine(this.page, this.limit)
            .subscribe(data => {
                this.assignments = data.docs;
                this.page = data.page;
                this.limit = data.limit;
                this.totalDocs = data.totalDocs;
                this.totalPages = data.totalPages;
                this.hasPrevPage = data.hasPrevPage;
                this.prevPage = data.prevPage;
                this.hasNextPage = data.hasNextPage;
                this.nextPage = data.nextPage;
            });
    }

    updatePage(event: any) {
        console.log(event.pageIndex + 1);
        console.log(event.pageSize);
        this.getDataByPage(event.pageIndex + 1, event.pageSize);
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
    getSubjectLibelle(matiere_id: number) {
        var returnName: string | undefined = "";

        this.subjectService.getSubjectLibelle(matiere_id)
            .subscribe(matiereLibelle => returnName = matiereLibelle);

        return returnName;
    }

    public getPage(){
        return this.page;
    }

    public getLimit(){
        return this.limit;
    }

    public getAssignments(){
        console.log(this.assignments)
        return this.assignments;
    }
}
