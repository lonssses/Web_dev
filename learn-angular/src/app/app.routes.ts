import { Routes } from '@angular/router';
import { UsersPageComponent } from './users-page/users-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: 'users' },
];