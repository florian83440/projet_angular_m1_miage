    import { Injectable } from '@angular/core';

    @Injectable({
        providedIn: 'root'
    })
    export class LoginService {
        private logged = false;
        private loggedUser ?: number;
        
        public logIn(id: number): void {
            this.logged = true;
            this.loggedUser = id;
            console.log('Utilisateur connecté')
        }

        public logOut(): void {
            this.logged = false;
        }

        public isLogged(): boolean {
            return this.logged;
        }

        public isAdmin() {
            const isUserAdmin = new Promise(
                (resolve, reject) =>{
                    resolve(this.logged)
                }
            );
            return isUserAdmin;
        }

        public getLoggedUser(){
            return this.loggedUser;
        }

    }