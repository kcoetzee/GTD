import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        CommonModule,
        RouterModule,
        BrowserModule
    ],
    declarations: [
        HeaderComponent, 
        SidebarComponent
    ],
}
)

export class SharedModule {

}