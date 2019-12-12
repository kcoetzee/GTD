import { NgModule, Optional, SkipSelf } from "@angular/core";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {firebaseConfig} from '../../environments/firebaseconfig';


@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig.details),
        AngularFirestoreModule,
    ],
    exports: [

    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
              'CoreModule is already loaded. Import it in the AppModule only'
            );
          }
      }
}