import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import {SnackBarService} from "./snackbar.service";

export const loginGuard: CanActivateFn = (route, state) => {

    let loginService = inject(LoginService);
    let router = inject(Router);
    let snackBarService = inject(SnackBarService);


    return loginService.isAdmin()
    .then(
        authentifie => {
            if(authentifie){
                console.log("Admin, navigation autorisée");
                return true;
            }
            else{
                console.log("Pas admin, navigation refusée");
                router.navigate(["/auth"]);
                snackBarService.openSnackBar('Vous devez vous authentifier pour accéder à ce module !', 'Fermer');
                return true;
            }
        }
    )

};
