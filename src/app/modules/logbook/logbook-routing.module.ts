import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LogbookComponent } from './pages/logbook.page';

const routes: Routes = [
    {
        path: '',
        component: LogbookComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LogbookRoutingModule {

}