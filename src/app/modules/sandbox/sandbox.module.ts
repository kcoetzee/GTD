import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FirebaseTestComponent } from './components/firebase-test.component';
import { SandboxRoutingModule } from './sandbox-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        SandboxRoutingModule
    ],
    exports: [

    ],
    declarations: [FirebaseTestComponent]
})
export class SandboxModule {

}