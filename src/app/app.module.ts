import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, MatFormField, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { DashboardInComponent } from './dashboard-in/dashboard-in.component';
import { DashboardNextActionsComponent } from './dashboard-next-actions/dashboard-next-actions.component';
import { DashboardCalenderComponent } from './dashboard-calender/dashboard-calender.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardWaitingComponent } from './dashboard-waiting/dashboard-waiting.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { FormsModule } from '@angular/forms';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DialogNextActionComponent } from './dashboard-in/dialog-next-action.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    FirebaseTestComponent,
    DashboardInComponent,
    DashboardNextActionsComponent,
    DashboardCalenderComponent,
    DashboardProjectsComponent,
    DashboardWaitingComponent,
    EditListComponent,
    DashboardHeaderComponent,
    DialogNextActionComponent,
    DashboardOverviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    DialogNextActionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
