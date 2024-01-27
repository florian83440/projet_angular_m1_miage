import { Component } from '@angular/core';
import { SidebarToggleService } from '../shared/sidebar-toggle.service';
import { Menu } from './menu.model';
import { UserService } from "../shared/user.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    menus: Menu[] = [
        {
            link: '/list-assignment',
            lib: "Liste des devoirs",
            admin: false
        },
        {
            link: '/add-assignment',
            lib: "Ajout d'un devoir",
            admin: true
        },
        {
            link: '/teacher',
            lib: "Paramétrage des enseignants",
            admin: true
        },
        {
            link: '/subject',
            lib: "Paramétrage des matières",
            admin: true
        },
        {
            link: '/student',
            lib: "Paramétrage des élèves",
            admin: true
        },
    ];

    constructor(protected sidebarToggleService: SidebarToggleService, private userService: UserService) { }

    public isAdmin():boolean {
        return this.userService.isUserAdmin();
    }

    getMenuAdmin(isAdmin: boolean): Menu[] {
        if (isAdmin) {
            return this.menus.filter(item => item.admin);
        } else {
            return this.menus;
        }
    }

}
