import { NgModule } from "@angular/core";
import { SharedModule } from '../../shared/shared.module';
import { OverviewComponent } from './pages/overview.page';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [],
})

export class OverviewModule {

}