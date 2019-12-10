import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { DashboardInComponent } from './dashboard-in/dashboard-in.component';
import { DashboardNextActionsComponent } from './dashboard-next-actions/dashboard-next-actions.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DashboardCalenderComponent } from './dashboard-calender/dashboard-calender.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardWaitingComponent } from './dashboard-waiting/dashboard-waiting.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardOverviewComponent },
  { path: 'firebase', component: FirebaseTestComponent },
  { path: 'in', component: DashboardInComponent },
  { path: 'next-actions', component: DashboardNextActionsComponent },
  { path: 'calender', component: DashboardCalenderComponent },
  { path: 'projects', component: DashboardProjectsComponent },
  { path: 'waiting-for', component: DashboardWaitingComponent },
  { path: 'list', component: EditListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
