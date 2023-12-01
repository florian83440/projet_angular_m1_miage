import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

    let loginService = inject(LoginService);
    let router = inject(Router);

    return loginService.isAdmin()
    .then(
        authentifie => {
            if(authentifie){
                console.log("Admin, navigation autorisée");
                return true;
            }
            else{
                console.log("Pas admin, navigation refusée");
                router.navigate(["/home"]);
                return true;
            }
        }
    )

};
