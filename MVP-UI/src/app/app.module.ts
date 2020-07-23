import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
// import {FormsModule} from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { CarService } from './carservice';
import {TableModule} from 'primeng/table';


// import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    OuterLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    TieredMenuModule,
    TableModule
    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
