import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsComponent } from './pages/projects.page';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [],
})
export class ProjectsModule {

}