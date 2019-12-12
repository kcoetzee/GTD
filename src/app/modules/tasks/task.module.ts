import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './pages/tasks.page';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TaskModule { }
