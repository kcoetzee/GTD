import { NgModule } from "@angular/core";
import { LogbookComponent } from './pages/logbook.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogNextActionComponent } from './components/dialog-next-action.component';

@NgModule({
    declarations: [
        LogbookComponent,
        DialogNextActionComponent
    ],
    imports: [SharedModule],
    exports: [],
    entryComponents: [
        DialogNextActionComponent
    ]
    
})

export class LogbookModule {

}