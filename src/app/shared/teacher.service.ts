import { Injectable } from "@angular/core";
import { Teacher } from "../teacher/teacher.model";
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class TeacherService{
    
    nextId = 1;

    teachers: Teacher[] = [];
    teachersMap: Map<number, Teacher> = new Map<number, Teacher>();
    
    constructor(){
        //
        // this.http.get<Teacher[]>(this.url)
        //     .subscribe(teachers => {
        //         this.teachersMap.clear();
        //
        //         teachers.forEach(teacher => {
        //             this.teachersMap.set(teacher.id, teacher);
        //         });
        //         this.teachers = teachers;
        //     });

        this.teachersMap.set(1, {
            id: 1,
            nom: 'Buffa',
            prenom: 'Michel'
        });
        this.teachersMap.set(2, {
            id: 2,
            nom: 'Donati',
            prenom: 'Leo'
        });

        this.setTeacherArray();

        this.nextId = this.teachersMap.size+1;
    }

    // url = "http://localhost:8010/api/teachers";

    public getTeacher(id :number):Observable<Teacher|undefined>{
        const a:Teacher|undefined = this.teachersMap.get(id);

        return of(a);
    }

    public getTeacherName(id :number):Observable<string | undefined>{
        const a:Teacher|undefined = this.teachersMap.get(id);
        return of(a?.nom);
    }

    public getTeachers(){
        return this.teachers;
    }

    public getTeachersMap(){
        return this.teachersMap;
    }
    
    public addTeacher(teacher: Teacher){
        teacher.id = this.nextId++;
        this.teachersMap.set(teacher.id, teacher);
        this.setTeacherArray();
    }

    public deleteTeacher(element:Teacher){
        this.teachersMap.delete(element.id);
        this.setTeacherArray();
    }

    public deleteTeacherById(id:number){
        this.teachersMap.delete(id);
        this.setTeacherArray();
    }

    public updateTeacher(element:Teacher):Observable<string>{
        return of("Teacher service: teacher modifié")
    }

    private setTeacherArray(){
        this.teachers = Array.from(this.teachersMap.values());
    }

}