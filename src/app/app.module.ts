import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
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
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { loginGuard } from './shared/login.guard';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { MatTableModule } from "@angular/material/table";
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { StudentComponent } from './student/student.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";

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
    },
    {
        'path': 'teacher',
        component: TeacherComponent
    },
    {
        'path': 'subject',
        component: SubjectComponent
    },
    {
        'path': 'student',
        component: StudentComponent
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
        UserComponent,
        TeacherComponent,
        SubjectComponent,
        StudentComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        MatButtonModule, MatIconModule, MatDividerModule,
        MatCardModule, MatFormFieldModule, MatInputModule,
        FormsModule, MatDatepickerModule, MatNativeDateModule,
        MatListModule, MatCheckboxModule, MatToolbarModule,
        MatSidenavModule, NgIf, RouterModule.forRoot(routes),
        MatSnackBarModule, MatTableModule, HttpClientModule, MatPaginatorModule, MatRadioModule, MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
export class Snackbar {
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }
}