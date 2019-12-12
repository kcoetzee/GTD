import { NgModule } from "@angular/core";
import { SharedModule } from '../../shared/shared.module';
import { OverviewComponent } from './pages/overview.page';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        SharedModule,
        OverviewRoutingModule
    ],
    exports: [],
})

export class OverviewModule {

}