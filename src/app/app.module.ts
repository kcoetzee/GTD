import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, MatFormField, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './modules/tasks/task.module';
import { OverviewModule } from './modules/overview/overview.module';
import { LogbookModule } from './modules/logbook/logbook.module';
import { CalenderModule } from './modules/calender/calender.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { WaitingModule } from './modules/waiting/waiting.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
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
    OverviewModule,
    LogbookModule,
    CalenderModule,
    ProjectsModule,
    WaitingModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
