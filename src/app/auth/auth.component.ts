import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    username = "";
    password = "";
    hide: boolean = true;

    constructor(private userService: UserService, private router: Router){}

    onSubmit(event: SubmitEvent) {
        if(this.userService.checkUser(this.username, this.password)){
            this.router.navigate(['/home']);
        }else{
            this.router.navigate(
                ['/auth'],
                { queryParams: { message: 'Mauvais nom d\'utilisateur ou mot de passe' } }
            );
        }
    }

}
