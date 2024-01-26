import { Component } from '@angular/core';
import { SidebarToggleService } from '../shared/sidebar-toggle.service';
import { Menu } from './menu.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    menu: Menu[] = [
        {
            link: '/list-assignment',
            lib: "Liste des devoirs"
        },
        {
            link: '/add-assignment',
            lib: "Ajout d'un devoir"
        },
        {
            link: '/teacher',
            lib: "Paramétrage des enseignants"
        },
    ];

    constructor(public sidebarToggleService: SidebarToggleService) { }

    isSidebarOpen() {
        return this.sidebarToggleService.isOpen;
    }
}
