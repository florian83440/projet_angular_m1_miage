import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignments.service';
import { LoginService } from '../shared/login.service';
import { TeacherService } from "../shared/teacher.service";
import { SubjectService } from "../shared/subject.service";
import { StudentService } from "../shared/student.service";
import {Assignment} from "./assignment.model";
import {MatTableDataSource, MatTableDataSourcePaginator} from "@angular/material/table";
import {StudentComponent} from "../student/student.component";

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

    filterRendu: string = "";
    filterValue: string = "";
    filterData: string = "";
    trierPar = [
        {
            id:"",
            lib:"Choix..."
        },
        {
            id:"matiere_id",
            lib:"Matière"
        },
        {
            id:"auteur_id",
            lib:"Étudiant"
        },
        {
            id:"enseignant_id",
            lib:"Enseignant"
        }
    ]
    choiceValeur = [{
        id:"",
        lib:"Choix..."
    }]

    constructor (private subjectService:SubjectService,
                 private teacherService:TeacherService,
                 private studentService:StudentService,
                 protected assignmentService:AssignmentService,
                 private loginService:LoginService){}

    ngOnInit() {
        this.getDataByPage(this.page, this.limit);
    }

    getDataByPage(page: number, limit: number) {
        this.assignmentService.getAssignmentsPagine(page, limit, this.filterRendu, this.filterValue, this.filterData)
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

    setRenduFilter(event:any){
        this.filterRendu = event.value;
        this.updateAssignmentsTable();
    }

    setTriData(event:any){
        this.filterData = event.value;
        this.updateAssignmentsTable();
    }

    setTriValue(event:any){
        this.filterValue = event.value;
        if (this.filterValue === "matiere_id") {
            this.choiceValeur = [
                ...this.subjectService.getSubjects().map(data => ({
                    id: data.id.toString(),
                    lib: data.libelle
                }))
            ];
        }
        else if (this.filterValue === "enseignant_id") {
            this.choiceValeur = [
                ...this.teacherService.getTeachers().map(data => ({
                    id: data.id.toString(),
                    lib: data.prenom + " " + data.nom
                }))
            ];
        }
        else if (this.filterValue === "auteur_id") {
            this.choiceValeur = [
                ...this.studentService.getStudents().map(data => ({
                    id: data.id.toString(),
                    lib: data.prenom + " " + data.nom
                }))
            ];
        }
        this.filterData = "";
    }

    updateAssignmentsTable() {
        this.assignmentService.getAssignmentsPagine(this.page, this.limit, this.filterRendu, this.filterValue, this.filterData)
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
    getStudentName(student_name: number) {
        var returnName: string | undefined = "";

        this.studentService.getStudentName(student_name)
            .subscribe(studentName => returnName = studentName);

        return returnName;
    }
    getSubjectLibelle(matiere_id: number) {
        var returnName: string | undefined = "";

        this.subjectService.getSubjectLibelle(matiere_id)
            .subscribe(matiereLibelle => returnName = matiereLibelle);

        return returnName;
    }
}
