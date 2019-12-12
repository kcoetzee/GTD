import { NgModule } from "@angular/core";
import { WaitingComponent } from './pages/waiting.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        WaitingComponent
    ],
    imports: [
        SharedModule
    ],
    exports: []
})

export class WaitingModule{

}