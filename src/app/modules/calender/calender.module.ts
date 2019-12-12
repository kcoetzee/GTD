import { NgModule } from "@angular/core";
import { CalenderComponent } from './pages/calender.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [CalenderComponent],
    imports: [
        SharedModule
    ],
    exports: [],
})

export class CalenderModule {

}