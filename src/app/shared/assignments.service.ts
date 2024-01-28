import { Injectable } from "@angular/core";
import { Assignment } from "../assignments/assignment.model";
import {catchError, Observable, of, throwError} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {reportUnhandledError} from "rxjs/internal/util/reportUnhandledError";

@Injectable({
    providedIn: 'root'
})

export class AssignmentService{
    
    nextId = 1;
    totalDocs: any;
    totalPages: any;
    hasPrevPage: any;
    prevPage: any;
    hasNextPage: any;
    nextPage: any;

    url = "http://localhost:8010/api";
    // url = "https://assignment-back-c0dfe7c8382c.herokuapp.com/api";

    assignments: Assignment[] = [];
    assignmentsMap: Map<number, Assignment> = new Map<number, Assignment>();
    
    constructor(private http:HttpClient){}

    public getAssignmentsAPI(page: number = 0, limit: number = 0){
        if(page != 0 && limit != 0){
            const queryParams = {
                page: page,
                limit: limit
            }
            this.http.get<Assignment[]>(this.url + "/assignments", { params: queryParams })
                .subscribe(assignments => {
                    this.assignments = [];
                    this.assignmentsMap.clear();

                    assignments.forEach(assignment => {
                        this.assignmentsMap.set(assignment.id, assignment);
                    });
                    this.assignments = assignments;
                });
        }else{
            this.http.get<Assignment[]>(this.url + "/assignments")
                .subscribe(assignments => {
                    this.assignments = [];
                    this.assignmentsMap.clear();

                    assignments.forEach(assignment => {
                        this.assignmentsMap.set(assignment.id, assignment);
                    });
                    this.assignments = assignments;
                });
        }
        this.nextId = this.assignmentsMap.size+1;
    }

    public getAssignment(id :number):Observable<Assignment|undefined>{
        const a:Assignment|undefined = this.assignmentsMap.get(id);

        return of(a);
    }
    public getAssignmentAPI(id :number):Observable<Assignment|undefined>{
        return this.http.get<Assignment>(this.url + "/assignments" + "/"+ id);
    }


    getAssignmentsPagine(page: number, limit: number): Observable<any> {
        const queryParams = {
            page: page,
            limit: limit,
        }
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public getAssignments(){
        return this.http.get<any>(this.url + "/assignments");
    }

    public addAssignment(assignment: Assignment) {
        assignment.id = this.nextId++;
        console.log(assignment);
        this.http.post<Assignment>(this.url + "/assignments",assignment).subscribe(
            (response) => {
                console.log('API response:', response);
            },
            (error) => {
                console.error('API error:', error);
            });
    }

    public deleteAssignment(element:Assignment){
        this.assignmentsMap.delete(element.id);
        this.setAssignmentArray();
    }

    public deleteAssignmentById(id:number){
        this.assignmentsMap.delete(id);
        this.setAssignmentArray();
    }

    public updateAssignment(element:Assignment):Observable<string>{
        return of("Assignment service: assignment modifié")
    }

    private setAssignmentArray(){
        this.assignments = Array.from(this.assignmentsMap.values());
    }

    public getAssignmentsRendus() {
        const queryParams = {
            rendu: true
        }
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public getAssignmentsNonRendus() {
        const queryParams = {
            rendu: false
        }
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public getAssignmentsByTeacher(teacher_id:number) {
        const queryParams = {
            enseignant_id: teacher_id
        }
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public getAssignmentsBySubject(subject_id:number) {
        const queryParams = {
            matiere_id: subject_id
        }
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public setData(){
        const data = {}; // Add your data here if needed

        // Make the POST request
        this.http.post(this.url + '/peuplerbdd', data).subscribe(
            (response) => {
                console.log('API response:', response);
            },
            (error) => {
                console.error('API error:', error);
            }
        );
    }

}