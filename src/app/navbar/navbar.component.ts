import { Component, Input } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { SidebarToggleService } from '../shared/sidebar-toggle.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    @Input()
    appTitle?: string ;

    constructor(private sidebarToggleService: SidebarToggleService, private loginService: LoginService, private router: Router) { }

    public toggleSidebar():void {
        this.sidebarToggleService.toggleSidebar();
    }

    public isLogged():boolean{
        return this.loginService.isLogged();
    }

    public logOut(): void{
        this.loginService.logOut();
    }

    public showAuth(): void{
        if(this.isLogged()){
            this.router.navigate(['/home'])
        }else{
            this.router.navigate(['/auth'])
        }
    }
    
}

