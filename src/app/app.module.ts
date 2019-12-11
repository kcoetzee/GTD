import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, MatFormField, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { SidebarComponent } from './modules/dashboard/components/sidebar/sidebar.component';
import { LogbookComponent } from './modules/logbook/logbook.page';
import { TasksComponent } from './modules/tasks/tasks.page';
import { CalenderComponent } from './modules/calender/calender.page';
import { ProjectsComponent } from './modules/projects/projects.page';
import { WaitingComponent } from './modules/waiting/waiting.page';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/dashboard/components/header/header.component';
import { DialogNextActionComponent } from './modules/logbook/dialog-next-action.component';
import { OverviewComponent } from './modules/overview/overview.page';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './modules/tasks/task.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogbookComponent,
    TasksComponent,
    CalenderComponent,
    ProjectsComponent,
    WaitingComponent,
    HeaderComponent,
    DialogNextActionComponent,
    OverviewComponent

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
    MatDialogModule,
    HttpClientModule,
    TaskModule,
  ],
  providers: [],
  entryComponents: [
    DialogNextActionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
