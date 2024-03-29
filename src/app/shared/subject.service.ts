import { Injectable } from "@angular/core";
import { Subject } from "../subject/subject.model";
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class SubjectService{
    
    nextId = 1;

    subjects: Subject[] = [];
    subjectsMap: Map<number, Subject> = new Map<number, Subject>();
    
    constructor(){

        this.subjectsMap.set(1, {
            id: 1,
            libelle: 'Maths',
            image_id: 1
        });
        this.subjectsMap.set(2, {
            id: 2,
            libelle: 'Web (angular)',
            image_id: 2
        });
        this.subjectsMap.set(3, {
            id: 3,
            libelle: 'Gestion de projet',
            image_id: 3
        });
        this.subjectsMap.set(4, {
            id: 4,
            libelle: 'Analyse Financière',
            image_id: 4
        });
        this.subjectsMap.set(5, {
            id: 5,
            libelle: 'SGBD',
            image_id: 5
        });
        this.subjectsMap.set(6, {
            id: 6,
            libelle: 'EPS',
            image_id: 6
        });
        this.subjectsMap.set(7, {
            id: 7,
            libelle: 'Management',
            image_id: 7
        });
        this.subjectsMap.set(8, {
            id: 8,
            libelle: 'Anglais',
            image_id: 8
        });
        this.subjectsMap.set(9, {
            id: 9,
            libelle: 'OIB',
            image_id: 9
        });
        this.subjectsMap.set(10, {
            id: 10,
            libelle: 'Java',
            image_id: 10
        });

        this.setSubjectArray();

        this.nextId = this.subjectsMap.size+1;
    }

    public getSubject(id :number):Observable<Subject|undefined>{
        const a:Subject|undefined = this.subjectsMap.get(id);

        return of(a);
    }

    public getSubjectLibelle(id :number):Observable<string | undefined>{
        const a:Subject|undefined = this.subjectsMap.get(id);
        return of(a?.libelle);
    }

    public getSubjects(){
        return this.subjects;
    }

    private setSubjectArray(){
        this.subjects = Array.from(this.subjectsMap.values());
    }

}