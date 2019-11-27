import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { HomeComponent } from './home/home.component';
import { DashboardInComponent } from './dashboard-in/dashboard-in.component';
import { DashboardNextActionsComponent } from './dashboard-next-actions/dashboard-next-actions.component';
import { EditListComponent } from './edit-list/edit-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'firebase', component: FirebaseTestComponent },
  { path: 'in', component: HomeComponent },
  { path: 'next-actions', component: HomeComponent },
  { path: 'calender', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'waiting-for', component: HomeComponent },
  { path: 'list', component: EditListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
