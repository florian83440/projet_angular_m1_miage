import { Injectable } from "@angular/core";
import { Assignment } from "../assignments/assignment.model";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

    // url = "http://localhost:8010/api";
    url = "https://angularflorianthibaultback.onrender.com/api";

    constructor(private http:HttpClient){}

    public getAssignmentAPI(id :number):Observable<Assignment|undefined>{
        return this.http.get<Assignment>(this.url + "/assignments" + "/"+ id);
    }

    getAssignmentsPagine(page: number, limit: number, rendu: string, value:string, data:string): Observable<any> {
        let queryParams;
        if (value != "" && data != ""){
            queryParams = {
                page: page,
                limit: limit,
                rendu: rendu,
                value: value,
                data: data
            }
        }else{
            queryParams = {
                page: page,
                limit: limit,
                rendu: rendu
            }
        }
        console.log(queryParams)
        return this.http.get<any>(this.url + "/assignments", { params: queryParams });
    }

    public getAssignments(){
        return this.http.get<any>(this.url + "/assignments");
    }

    public addAssignment(assignment: Assignment) {
        assignment.id = this.nextId++;

        this.http.post<Assignment>(this.url + "/assignments",assignment).subscribe(
            (response) => {
                console.log('API response:', response);
            },
            (error) => {
                console.error('API error:', error);
            });
    }


    public deleteAssignmentById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/assignments/${id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    public updateAssignment(assignment: Assignment): Observable<Assignment> {
        return this.http.put<Assignment>(this.url + "/assignments", assignment)
            .pipe(
                catchError(this.handleError)
            );
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

    private handleError(error: any): Observable<never> {
        console.error('An error occurred:', error);
        return throwError('Something went wrong, please try again later.');
    }

}