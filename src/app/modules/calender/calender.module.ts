import { NgModule } from "@angular/core";
import { CalenderComponent } from './pages/calender.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalenderRoutingModule } from './calender-routing.module';

@NgModule({
    declarations: [CalenderComponent],
    imports: [
        SharedModule,
        CalenderRoutingModule
    ],
    exports: [],
})

export class CalenderModule {

}