import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsComponent } from './pages/projects.page';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        SharedModule,
        ProjectsRoutingModule
    ],
    exports: [],
})
export class ProjectsModule {

}