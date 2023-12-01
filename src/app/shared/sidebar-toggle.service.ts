// sidebar-toggle.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  public isOpen = false;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

}