import { Injectable } from "@angular/core";
import { Teacher } from "../teacher/teacher.model";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})

export class TeacherService{
    
    nextId = 1;

    teachers: Teacher[] = [];
    teachersMap: Map<number, Teacher> = new Map<number, Teacher>();
    
    constructor(){

        this.teachersMap.set(1, {
            id: 1,
            nom: 'BUFFA',
            prenom: 'Michel',
            image_id: 1
        });
        this.teachersMap.set(2, {
            id: 2,
            nom: 'DONATI',
            prenom: 'Leo',
            image_id: 2
        });
        this.teachersMap.set(3, {
            id: 3,
            nom: 'GALLI',
            prenom: 'Gregory',
            image_id: 3
        });
        this.teachersMap.set(4, {
            id: 4,
            nom: 'WINTER',
            prenom: 'Michel',
            image_id: 4
        });
        this.teachersMap.set(5, {
            id: 5,
            nom: 'TOUNSI',
            prenom: 'Stéphane',
            image_id: 5
        });
        this.teachersMap.set(6, {
            id: 6,
            nom: 'MOPOLO',
            prenom: 'Gabriel',
            image_id: 1
        });
        this.teachersMap.set(7, {
            id: 7,
            nom: 'MIRBEL',
            prenom: 'Isabelle',
            image_id: 7
        });
        this.teachersMap.set(8, {
            id: 8,
            nom: 'ARNAULT',
            prenom: 'Frédéric',
            image_id: 8
        });
        this.teachersMap.set(9, {
            id: 9,
            nom: 'CRESCENZO',
            prenom: 'Pierre',
            image_id: 9
        });
        this.teachersMap.set(10, {
            id: 10,
            nom: 'BARET',
            prenom: 'Emanuelle',
            image_id: 1
        });

        this.setTeacherArray();

        this.nextId = this.teachersMap.size+1;
    }

    // public getTeachersAPI(page: any, limit: any){
    //     let queryParams = {
    //         page: page,
    //         limit: limit
    //     }
    //     return this.http.get<any>(this.url + "/teacher", { params: queryParams });
    // }

    public getTeacher(id :number):Observable<Teacher|undefined>{
        const a:Teacher|undefined = this.teachersMap.get(id);

        return of(a);
    }

    public getTeacherName(id :number):Observable<string | undefined>{
        const a:Teacher|undefined = this.teachersMap.get(id);
        return of(a?.prenom + ' ' + a?.nom);
    }

    public getTeachers(){
        // this.http.get<any>(this.url + "/teacher").subscribe(data =>
        // {
        //     console.log(data)
        //     this.teachers = data.docs;
        // });
        return this.teachers;
    }
    
    public addTeacher(teacher: Teacher){
        teacher.id = this.nextId++;
        this.teachersMap.set(teacher.id, teacher);
        this.setTeacherArray();
    }

    private setTeacherArray(){
        this.teachers = Array.from(this.teachersMap.values());
    }

}