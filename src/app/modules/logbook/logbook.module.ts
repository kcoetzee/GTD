import { NgModule } from "@angular/core";
import { LogbookComponent } from './pages/logbook.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogNextActionComponent } from './components/dialog-next-action.component';
import { LogbookRoutingModule } from './logbook-routing.module';

@NgModule({
    declarations: [
        LogbookComponent,
        DialogNextActionComponent
    ],
    imports: [
        SharedModule,
        LogbookRoutingModule
    ],
    exports: [],
    entryComponents: [
        DialogNextActionComponent
    ]
    
})

export class LogbookModule {

}