import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FirebaseTestComponent } from './components/firebase-test.component';


const routes: Routes = [
    {
        path: '',
        component: FirebaseTestComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class SandboxRoutingModule {

}