import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WaitingComponent } from './pages/waiting.page';

const routes : Routes = [
    {
        path: '',
        component: WaitingComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WaitingRoutingModule {

}