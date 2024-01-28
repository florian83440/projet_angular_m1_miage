import { Component, OnInit } from '@angular/core';
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

    menuToShow: Menu[] = [];

    constructor(protected sidebarToggleService: SidebarToggleService, private userService: UserService) { }

    ngOnInit() {
        this.setMenuAdmin();
    }
    public isAdmin():boolean {
        return this.userService.isUserAdmin();
    }

    setMenuAdmin() {
        this.menuToShow = this.menus;
        // this.menuToShow = [];
        // if (this.isAdmin()){
        //     this.menuToShow = this.menus;
        // } else {
        //     console.log(this.isAdmin())
        //     this.menus.forEach(item => {
        //         if (!item.admin) {
        //             console.log(item.lib)
        //             this.menuToShow.push(item);
        //         }
        //     });
        // }
    }

}
