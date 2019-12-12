import { NgModule } from "@angular/core";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent, 
        SidebarComponent
    ],
}
)

export class SharedModule {

}