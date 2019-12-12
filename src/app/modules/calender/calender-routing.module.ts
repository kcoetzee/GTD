import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import { CalenderComponent } from './pages/calender.page';

const routes: Routes = [
    {
        path: '',
        component: CalenderComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalenderRoutingModule{

}