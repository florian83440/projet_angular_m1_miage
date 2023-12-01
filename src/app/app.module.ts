import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { LoginService } from './shared/login.service';
import { loginGuard } from './shared/login.guard';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        'path': '',
        component: HomeComponent
    },
    {
        'path': 'home',
        component: HomeComponent
    },
    {
        'path': 'list-assignment',
        component: AssignmentsComponent
    },
    {
        'path': 'add-assignment',
        component: AddAssignmentComponent
    },
    {
        'path': 'assignment/:id',
        component: AssignmentDetailComponent
    },
    {
        'path': 'assignment/:id/edit',
        component: EditAssignmentComponent,
        canActivate: [loginGuard]
    },{
        'path': 'auth',
        component: AuthComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        AssignmentsComponent,
        RenduDirective,
        NonRenduDirective,
        AssignmentDetailComponent,
        AddAssignmentComponent,
        NavbarComponent,
        SidebarComponent,
        EditAssignmentComponent,
        HomeComponent,
        AuthComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule, MatIconModule, MatDividerModule,
        MatCardModule, MatFormFieldModule, MatInputModule,
        FormsModule, MatDatepickerModule, MatNativeDateModule,
        MatListModule, MatCheckboxModule, MatToolbarModule,
        MatSidenavModule, NgIf, RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
