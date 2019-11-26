import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { HomeComponent } from './home/home.component';
import { DashboardInComponent } from './dashboard-in/dashboard-in.component';
import { DashboardNextActionsComponent } from './dashboard-next-actions/dashboard-next-actions.component';
import { DashboardCalenderComponent } from './dashboard-calender/dashboard-calender.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardWaitingComponent } from './dashboard-waiting/dashboard-waiting.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    FirebaseTestComponent,
    HomeComponent,
    DashboardInComponent,
    DashboardNextActionsComponent,
    DashboardCalenderComponent,
    DashboardProjectsComponent,
    DashboardWaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
