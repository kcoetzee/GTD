import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './pages/tasks.page';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class TaskModule { }
