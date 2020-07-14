import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  declarations: [
    AppComponent,
    OuterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
