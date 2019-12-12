import { NgModule } from "@angular/core";
import { LogbookComponent } from './pages/logbook.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogNextActionComponent } from './components/dialog-next-action.component';
import { LogbookRoutingModule } from './logbook-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
    declarations: [
        LogbookComponent,
        DialogNextActionComponent
    ],
    imports: [
        SharedModule,
        LogbookRoutingModule,
        MaterialModule
    ],
    exports: [],
    entryComponents: [
        DialogNextActionComponent
    ]
    
})

export class LogbookModule {

}