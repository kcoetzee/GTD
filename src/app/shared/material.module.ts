import { 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatCheckboxModule, 
    MatProgressSpinnerModule, 
    MatFormFieldModule, 
    MatDialogModule 
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatDialogModule,
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatDialogModule,
    ],
})
export class MaterialModule {

}