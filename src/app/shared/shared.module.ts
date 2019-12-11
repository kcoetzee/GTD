import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        HeaderComponent, 
        SidebarComponent
    ],
}
)

export class SharedModule {

}