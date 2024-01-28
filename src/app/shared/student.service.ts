import { Injectable } from "@angular/core";
import { Student } from "../student/student.model";
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class StudentService{
    
    nextId = 1;

    students: Student[] = [];
    studentsMap: Map<number, Student> = new Map<number, Student>();
    
    constructor(){
        this.studentsMap.set(1, {
            id: 1,
            nom: 'AIME',
            prenom: 'Florian',
            image_id: 1
        });
        this.studentsMap.set(2, {
            id: 2,
            nom: 'CANAVAGGIO',
            prenom: 'Thibault',
            image_id: 1
        });
        this.studentsMap.set(3, {
            id: 3,
            nom: 'TYSON',
            prenom: 'Mike',
            image_id: 1
        });
        this.studentsMap.set(4, {
            id: 4,
            nom: 'BALBOA',
            prenom: 'Rocky',
            image_id: 1
        });
        this.studentsMap.set(5, {
            id: 5,
            nom: 'DOE',
            prenom: 'Jhon',
            image_id: 1
        });
        this.studentsMap.set(6, {
            id: 6,
            nom: 'MARLEY',
            prenom: 'Bob',
            image_id: 1
        });
        this.studentsMap.set(7, {
            id: 7,
            nom: 'MAN',
            prenom: 'Pac',
            image_id: 1
        });
        this.studentsMap.set(8, {
            id: 8,
            nom: 'FORD',
            prenom: 'Henry',
            image_id: 1
        });
        this.studentsMap.set(9, {
            id: 9,
            nom: 'ARNAULT',
            prenom: 'BERNARD',
            image_id: 1
        });
        this.studentsMap.set(10, {
            id: 10,
            nom: 'JACKSON',
            prenom: 'MICHAEL',
            image_id: 1
        });

        this.setStudentArray();

        this.nextId = this.studentsMap.size+1;
    }

    // url = "http://localhost:8010/api/students";

    public getStudent(id :number):Observable<Student|undefined>{
        const a:Student|undefined = this.studentsMap.get(id);

        return of(a);
    }

    public getStudentName(id :number):Observable<string | undefined>{
        const a:Student|undefined = this.studentsMap.get(id);
        return of(a?.prenom + ' ' + a?.nom);
    }

    public getStudents(){
        return this.students;
    }

    public getStudentsMap(){
        return this.studentsMap;
    }
    
    public addStudent(student: Student){
        student.id = this.nextId++;
        this.studentsMap.set(student.id, student);
        this.setStudentArray();
    }

    public deleteStudent(element:Student){
        this.studentsMap.delete(element.id);
        this.setStudentArray();
    }

    public deleteStudentById(id:number){
        this.studentsMap.delete(id);
        this.setStudentArray();
    }

    public updateStudent(element:Student):Observable<string>{
        return of("Student service: student modifié")
    }

    private setStudentArray(){
        this.students = Array.from(this.studentsMap.values());
    }

}