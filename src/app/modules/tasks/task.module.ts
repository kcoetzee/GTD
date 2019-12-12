import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './pages/tasks.page';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    SharedModule,
    TasksRoutingModule
  ]
})
export class TaskModule { }
