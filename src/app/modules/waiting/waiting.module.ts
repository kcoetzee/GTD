import { NgModule } from "@angular/core";
import { WaitingComponent } from './pages/waiting.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { WaitingRoutingModule } from './waiting-routing.module';

@NgModule({
    declarations: [
        WaitingComponent
    ],
    imports: [
        SharedModule,
        WaitingRoutingModule
    ],
    exports: []
})

export class WaitingModule{

}