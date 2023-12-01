import { Injectable } from "@angular/core";
import { Assignment } from "../assignments/assignment.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AssignmentService{
    
    nextId = 1;

    assignments: Assignment[] = [];
    assignmentsMap: Map<number, Assignment> = new Map<number, Assignment>();
    
    constructor(){

        this.assignmentsMap.set(1, {
            id: 1,
            nom: 'Devoir Angular de Buffa',
            dateDeRendu: new Date('2023-09-30'),
            rendu: false,
        });
        this.assignmentsMap.set(2, {
            id: 2,
            nom: 'Devoir SQL de Mopolo',
            dateDeRendu: new Date('2023-10-30'),
            rendu: false,
        });
        this.assignmentsMap.set(3, {
            id: 3,
            nom: 'Devoir gestion de Tunsi',
            dateDeRendu: new Date('2023-08-30'),
            rendu: true,
        });
        this.nextId = 4;
        this.setAssignmentArray();
        
    }

    public getAssignment(id :number):Observable<Assignment|undefined>{
        const a:Assignment|undefined = this.assignmentsMap.get(id);

        return of(a);
    }

    public getAssignments(){
        return this.assignments;
    }

    public getAssignmentsMap(){
        return this.assignmentsMap;
    }
    
    public addAssignment(assignment: Assignment){
        assignment.id = this.nextId++;
        this.assignmentsMap.set(assignment.id, assignment);
        this.setAssignmentArray();
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
}