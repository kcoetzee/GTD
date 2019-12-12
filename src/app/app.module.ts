import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, MatFormField, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './modules/tasks/task.module';
import { SharedModule } from './shared/shared.module';
import { OverviewModule } from './modules/overview/overview.module';
import { LogbookModule } from './modules/logbook/logbook.module';
import { CalenderModule } from './modules/calender/calender.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { WaitingModule } from './modules/waiting/waiting.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
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
    OverviewModule,
    LogbookModule,
    CalenderModule,
    ProjectsModule,
    WaitingModule
  ],
  providers: [],
  entryComponents: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
