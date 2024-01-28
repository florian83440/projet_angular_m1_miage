import { Injectable } from '@angular/core';
import { User } from '../user/user.modele';
import { LoginService } from './login.service';
import {SnackBarService} from "./snackbar.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    nextId = 1;

    users: User[] = [];
    usersMap: Map<number, User> = new Map<number, User>();
    private isAdmin :boolean = false;

    constructor(private loginService: LoginService,
                private snackBarService:SnackBarService){
        
        this.usersMap.set(1, {
            id: 1,
            username: 'admin',
            password: '1234',
            admin: true
        });
        this.usersMap.set(2, {
            id: 2,
            username: 'flo',
            password: 'Azerty0',
            admin: false
        });
        this.nextId = 3;
        this.setUserArray();
    }

    // public getUser(id :number){
    //     const u = this.usersMap.get(id);
    //     return u;
    // }

    public getLoggedUser(){
        const loggedId = this.loginService.getLoggedUser();
        const u = loggedId ? this.usersMap.get(loggedId) : undefined;
        return u;   
    }

    // public getUsers(){
    //     return this.users;
    // }
    //
    // public getUserssMap(){
    //     return this.usersMap;
    // }
    //
    // public addUser(assignment: User){
    //     assignment.id = this.nextId++;
    //     this.usersMap.set(assignment.id, assignment);
    //     this.setUserArray();
    // }
    //
    // public deleteUser(element:User){
    //     this.usersMap.delete(element.id);
    //     this.setUserArray();
    // }
    //
    // public deleteUserById(id:number){
    //     this.usersMap.delete(id);
    //     this.setUserArray();
    // }

    public checkUser(username:string, password:string){
        for (const user of this.usersMap.values()) {
            if (user.username === username && user.password === password) {
                this.loginService.logIn(user.id);
                const userAdmin = this.getLoggedUser()?.admin;
                if(userAdmin != undefined){
                    this.isAdmin = userAdmin;
                }else{
                    this.isAdmin = false;
                }
                return true;
            }
        }
        this.snackBarService.openSnackBar('Nom d\'utilisateur ou mot de passe incorrect !', 'Fermer');
        return false;    
    }

    public isUserAdmin(){
        return this.isAdmin;
    }

    private setUserArray(){
        this.users = Array.from(this.usersMap.values());
    }

}