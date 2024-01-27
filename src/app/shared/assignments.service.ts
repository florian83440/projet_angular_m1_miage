import { Injectable } from "@angular/core";
import { Assignment } from "../assignments/assignment.model";
import {catchError, Observable, of, throwError} from "rxjs";
import { HttpClient } from "@angular/common/http";

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

    url = "http://localhost:8010/api/assignments";

    assignments: Assignment[] = [];
    assignmentsMap: Map<number, Assignment> = new Map<number, Assignment>();
    
    constructor(private http:HttpClient){}

    public getAssignmentsAPI(page: number = 0, limit: number = 0){
        if(page != 0 && limit != 0){
            const queryParams = {
                page: page,
                limit: limit
            }
            this.http.get<Assignment[]>(this.url, { params: queryParams })
                .subscribe(assignments => {
                    this.assignments = [];
                    this.assignmentsMap.clear();

                    assignments.forEach(assignment => {
                        this.assignmentsMap.set(assignment.id, assignment);
                    });
                    this.assignments = assignments;
                });
        }else{
            this.http.get<Assignment[]>(this.url)
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
        return this.http.get<Assignment>(this.url + "/"+ id);
    }


    getAssignmentsPagine(page: number, limit: number): Observable<any> {
        const queryParams = {
            page: page,
            limit: limit,
        }
        return this.http.get<any>(this.url, { params: queryParams });
    }

    public getAssignments(){
        return this.assignments;
    }

    public addAssignment(assignment: Assignment): Observable<any> {
        assignment.id = this.nextId++;
        return this.http.post<Assignment>(this.url, assignment).pipe(
            catchError((error: any) => {
                console.error('Error adding assignment', error);
                return throwError(error);
            })
        );
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

    public getAssignmentsRendus(): Assignment[] {
        return this.assignments.filter(assignment => assignment.rendu);
    }

    public getAssignmentsNonRendus(): Assignment[] {
        return this.assignments.filter(assignment => !assignment.rendu);
    }

    public getAssignmentsByTeacher(teacher_id:number): Assignment[] {
        return this.assignments.filter(assignment => assignment.enseignant_id = 1);
    }

    public getAssignmentsBySubject(subject_id:number): Assignment[] {
        return this.assignments.filter(assignment => assignment.matiere_id = subject_id);
    }

}