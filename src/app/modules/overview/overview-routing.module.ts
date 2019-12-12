import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview.page';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverviewRoutingModule {

}