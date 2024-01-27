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
        //
        // this.http.get<Subject[]>(this.url)
        //     .subscribe(subjects => {
        //         this.subjectsMap.clear();
        //
        //         subjects.forEach(subject => {
        //             this.subjectsMap.set(subject.id, subject);
        //         });
        //         this.subjects = subjects;
        //     });

        this.subjectsMap.set(1, {
            id: 1,
            libelle: 'Maths'
        });
        this.subjectsMap.set(2, {
            id: 2,
            libelle: 'Web (angular)',
        });
        this.subjectsMap.set(3, {
            id: 3,
            libelle: 'Gestion de projet',
        });
        this.subjectsMap.set(4, {
            id: 4,
            libelle: 'Analyse Financière',
        });
        this.subjectsMap.set(5, {
            id: 5,
            libelle: 'SGBD',
        });
        this.subjectsMap.set(6, {
            id: 6,
            libelle: 'EPS',
        });
        this.subjectsMap.set(7, {
            id: 7,
            libelle: 'Management',
        });
        this.subjectsMap.set(8, {
            id: 8,
            libelle: 'Anglais',
        });
        this.subjectsMap.set(9, {
            id: 9,
            libelle: 'OIB',
        });
        this.subjectsMap.set(10, {
            id: 10,
            libelle: 'Java',
        });

        this.setSubjectArray();

        this.nextId = this.subjectsMap.size+1;
    }

    // url = "http://localhost:8010/api/subjects";

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